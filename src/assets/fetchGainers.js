import fetch from 'node-fetch';

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
const url = 'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=ONUTM70I4GP8A381'; // Replace 'YOUR_API_KEY_HERE' with your API key

export const fetchData = async () => {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'node-fetch' }
    });

    if (!response.ok) {
      console.log('Status:', response.status);
    } else {
      const data = await response.json();
      console.log(data);
      return data;
    }
};
