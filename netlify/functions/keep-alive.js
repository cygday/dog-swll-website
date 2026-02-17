const https = require('https');

export default async () => {
  const url = 'https://familypaws.netlify.app'; // Replace with your Render URL

  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`Keep-alive ping sent. Status: ${res.statusCode}`);
      resolve({ statusCode: 200 });
    });
  });
};
