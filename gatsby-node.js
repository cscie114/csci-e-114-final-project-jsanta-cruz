
const fetch = require('node-fetch');
require("dotenv").config();


exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
  }) => {
   const { createNode } = actions;
    let resourceType = "image"
    let baseUrl = `https://api.harvardartmuseums.org/${resourceType}/`;
    let apiKey = process.env.HARVARD_API_KEY;
  
    let requestParams = {
      apikey: apiKey,
      size: 100,
      page: 20
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


     responseData?.records?.forEach((image) => {
        console.log("data: " , image),
        createNode({
        ...image,
        id: createNodeId(image.id), //[ pass a unique identifier here: [movie.id] for example
        parent: null,
        children: [],
        internal: {
            type: 'Images',   // name of collection in graphql schema
            contentDigest: createContentDigest(image),
        },
        })
    })
}
