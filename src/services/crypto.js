 const BASE_URL="https://api.coingecko.com/api/v3";
 const API_KEY="CG-dk9stUerTav5ugTC2at6j8fe";
 export const getCoinList = (page,currency) => {
   return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;
  
}


 export const searchCoin = (query) => `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;
   export const marketChart=coin=>`${BASE_URL}/coins/${coin}/market_chart/?vs_currency=usd&days=7`
export default{getCoinList, searchCoin,marketChart};

