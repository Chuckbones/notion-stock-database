// configuration for environment variables

import { Client } from "@notionhq/client";
import dotenv from "dotenv"; 

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY });

export const getTickersFromNotion = async () => {
  const call = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID_REAL,
  });
  // console.log(call.results[0].properties.Ticker.rich_text)
  // (call.results[0  ].id)
  // return page id too
  // make an object = {pageId: ___, ticker: ___}
  return (
    call.results
      .map((result) => {
        return {
          pageId: result.id,
          ticker: result.properties.Ticker?.rich_text[0]?.plain_text,
        };
      })
      // change to filter only for ticker
      .filter((ticker) => ticker.ticker != null)
  );
};

export const updatePrice = async (pageId, newStockPrice) => {
  const response = await notion.pages.update({
    page_id: pageId,
    properties: {
      "Current Price": {
        number: parseFloat(newStockPrice),
      },
    },
  });
};
