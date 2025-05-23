// Discord webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1372868889922375680/MdFL80inkiDm_veKlO-e7ovXwd_kSKD8idYluu4IMkExJsVeAS4z1PB0fcTOafmD-K5W';

// Function to get visitor information
const getVisitorInfo = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return {
      city: data.city,
      country: data.country_name,
      region: data.region,
      ip: data.ip,
      timezone: data.timezone,
      timestamp: new Date().toLocaleString()
    };
  } catch (error) {
    console.error('Error fetching visitor info:', error);
    return null;
  }
};

// Function to update visitor count
const updateVisitorCount = () => {
  const currentCount = parseInt(localStorage.getItem('visitorCount') || '0');
  const newCount = currentCount + 1;
  localStorage.setItem('visitorCount', newCount.toString());
  return newCount;
};

// Function to send visitor info to Discord
const sendToDiscord = async (visitorInfo, count) => {
  if (!visitorInfo) return;

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
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });
  } catch (error) {
    console.error('Error sending to Discord:', error);
  }
};

// Main function to track visitor
export const trackVisitor = async () => {
  const visitorInfo = await getVisitorInfo();
  const count = updateVisitorCount();
  await sendToDiscord(visitorInfo, count);
}; 