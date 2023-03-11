import { getTickersFromNotion, updatePrice } from "./notion.js";

import { getLastStockValueFromTicker } from "./polygon.js";

// get all tickers data to be updated
const tickersToCheck = await getTickersFromNotion();

// upload data to notion after getting the price
tickersToCheck.forEach(async (value) => {
  await updatePrice(value.pageId, await getLastStockValueFromTicker(value.ticker));
});