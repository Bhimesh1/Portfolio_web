// Discord webhook URL from environment variable
const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

// Function to get visitor information
const getVisitorInfo = async () => {
  try {
    console.log('Fetching visitor info from ipapi.co...');
    const response = await fetch('https://ipapi.co/json/');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Visitor info received:', data);
    
    return {
      city: data.city || 'Unknown',
      country: data.country_name || 'Unknown',
      region: data.region || 'Unknown',
      ip: data.ip || 'Unknown',
      timezone: data.timezone || 'Unknown',
      timestamp: new Date().toLocaleString()
    };
  } catch (error) {
    console.error('Error fetching visitor info:', error);
    // Return a fallback object instead of null
    return {
      city: 'Unknown',
      country: 'Unknown',
      region: 'Unknown',
      ip: 'Unknown',
      timezone: 'Unknown',
      timestamp: new Date().toLocaleString(),
      error: error.message
    };
  }
};

// Function to update visitor count
const updateVisitorCount = () => {
  const currentCount = parseInt(localStorage.getItem('visitorCount') || '0');
  const newCount = currentCount + 1;
  localStorage.setItem('visitorCount', newCount.toString());
  console.log('Visitor count updated:', newCount);
  return newCount;
};

// Function to send visitor info to Discord
const sendToDiscord = async (visitorInfo, count) => {
  if (!visitorInfo) {
    console.error('No visitor info to send to Discord');
    return;
  }

  // Check if webhook URL is available
  if (!DISCORD_WEBHOOK_URL) {
    console.warn('Discord webhook URL not configured. Skipping Discord notification.');
    return;
  }

  const message = {
    content: `____________________________________________________________________\n` +
    `____________________________________________________________________\n` +
    `🌍 New Profile Visitor!\n` +
    `👥 Visitor: ${count}\n` +    
    `📍 Location:-------${visitorInfo.city}, ${visitorInfo.country}\n` +
    `⏰ Time:-----------${visitorInfo.timestamp}\n` +
    `🌐 Region:---------${visitorInfo.region}\n` +
    `🕒 Timezone:------${visitorInfo.timezone}`
  };

  try {
    console.log('Sending to Discord webhook...');
    console.log('Message content:', message.content);
    
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });

    if (!response.ok) {
      throw new Error(`Discord webhook error! status: ${response.status}`);
    }

    console.log('Successfully sent to Discord!');
  } catch (error) {
    console.error('Error sending to Discord:', error);
    console.error('Webhook URL configured:', !!DISCORD_WEBHOOK_URL);
  }
};

// Main function to track visitor
export const trackVisitor = async () => {
  console.log('Starting visitor tracking...');
  
  try {
    const visitorInfo = await getVisitorInfo();
    const count = updateVisitorCount();
    await sendToDiscord(visitorInfo, count);
    console.log('Visitor tracking completed successfully');
  } catch (error) {
    console.error('Error in trackVisitor:', error);
  }
}; 