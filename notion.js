// configuration for environment variables
import dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });

export const getTickersFromNotion = async () => {
  const call = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID_REAL,
  });
  return call.results.map((result) => {
    return result.properties.Ticker?.title[0]?.plain_text
  }).filter((ticker) => ticker != null)
}

