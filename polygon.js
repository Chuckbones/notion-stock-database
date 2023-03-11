import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getLastStockValueFromTicker = async (ticker) => {
  // make url 
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${process.env.ALPHA_ADVANTAGE_API_KEY}`;

  // call api
  const reply = await axios.get(url)

  // extract data
  const stockValue = reply.data['Global Quote']['05. price'];
  
  return stockValue;
};