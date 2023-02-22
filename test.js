// import { Client } from '@notionhq/client';

// (async () => {
//   const pageId = '59833787-2cf9-4fdf-8782-e53db20768a5';
//   const response = await notion.pages.update({
//     page_id: pageId,
//     properties: {
//       'In stock': {
//         checkbox: true,
//       },
//     },
//   });
//   console.log(response);
// (async () => {
//   const call = await notion.databases.query({
//     database_id: "23c62576f5104c1e961f88ba2452c275",
//   });

//   // // var iterator = call.results.values();
//   // // var test = iterator.next().value;  // test is value of results
//   // // var ticker_url = test["url"];
//   // // var end = ticker_url.search(/-/);
//   // // var tickerr = ticker_url.slice(22, end);
//   // // console.log(tickerr);
 
//   // console.log(call.results[1].properties.Ticker.title[0].plain_text);
//   console.log(call.results.length);
// })();
// const notion = new Client ({
//   auth : "secret_DNib1kcVsgqoFU1n7ab6tRHIwAB8j0JifOzThLmGaEK"
// })

// const listdatabases = async () => {

//   const res = await notion.databases.list(
//     { database_id: "23c62576f5104c1e961f88ba2452c275"}
//   )
//   console.log(res)
// }

// listdatabases()





// (async () => {
//   // const pageId = '23c62576-f510-4c1e-961f-88ba2452c275';
//   // const pageId ='42be379a-5260-44a9-b2c4-69cc2055c4f4';
//   // 42be379a526044a9b2c469cc2055c4f4
//   // const response = await notion.databases.retrieve({ database_id: databaseId });
//   // console.log(response.properties.Ticker.name);
//   const response = await notion.pages.retrieve({ page_id:'42be379a-5260-44a9-b2c4-69cc2055c4f4' });
// })();


// async function addItem(text) {
//   try {
//     const response = await notion.pages.create({
//       parent: { database_id: "23c62576f5104c1e961f88ba2452c275" },
//       properties: {
//         title: {
//           title:[
//             {
//               "text": {
//                 "content": text
//               }
//             }
//           ]
//         }
//       },
//     })
//     console.log(response)
//     console.log("Success! Entry added.")
//   } catch (error) {
//     console.error(error.body)
//   }
// }


console.log(process.env)