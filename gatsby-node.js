
const fetch = require('node-fetch');
require("dotenv").config();


exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
  }) => {
   const { createNode } = actions;
    let resourceType = "object"
    let baseUrl = `https://api.harvardartmuseums.org/${resourceType}/`;
    let apiKey = process.env.HARVARD_API_KEY;
  
    let requestParams = {
      apikey: apiKey,
      size: 100,
      page: 1,
      hasimage: 1,
      century: "20th century"
    }
  
    let params = new URLSearchParams(requestParams);
    let queryString = params.toString();
  
    let requestUrl = `${baseUrl}?${queryString}`;
  
    console.log(requestUrl);
    const meta = {
      "Content-Type": "application/json"
      };
  const headers = new Headers(meta);
    const fetchOptions = {
        "headers": headers
    }
let responseData = {}
        let response = await fetch(requestUrl, fetchOptions);
        responseData = await response.json();

    
console.log(responseData)


     responseData?.records?.forEach((object) => {
        console.log("data: " , object),
        createNode({
        ...object,
        id: createNodeId(object.id), 
        parent: null,
        children: [],
        internal: {
            type: 'Objects',   // name of collection in graphql schema
            contentDigest: createContentDigest(object),
        },
        })
    })
}
