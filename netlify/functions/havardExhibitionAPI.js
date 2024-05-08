const fetch = require('node-fetch');
require("dotenv").config();

const handler = async function (event) {
    // const apiKey = process.env.NFL_API_KEY;
    const { venue } = event.queryStringParameters;
    let apikey = process.env.HARVARD_API_KEY;
  

      const meta = {
        "Content-Type": "application/json"
        };
    const headers = new Headers(meta);
    const fetchOptions = {
          "headers": headers
      }
    try{
        const response = await fetch(`https://api.harvardartmuseums.org/exhibition?apikey=${apikey}&venue=${venue}&size=8&hasimage=1&after=2024-05-08`, fetchOptions)
        if (!response.ok) {
            // NOT res.status >= 200 && res.status < 300
            return { statusCode: response.status, body: response.statusText }
        }
        const data = await response.json()
        console.log(data)

        return {
           statusCode: 200,
           body: JSON.stringify({ data }) 
        }
    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: error.message })
        }
    }

}
module.exports = {handler}