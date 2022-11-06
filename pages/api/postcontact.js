import * as fs from "fs";

export default async function handler(req, res) {
    
    if (req.method === "POST"){
        // Process a POST request 
        let fileName = (Math.random()*100000).toFixed()
        let data = req.body;
        await fs.promises.writeFile(`./contact/${fileName}.json`,  JSON.stringify(data));
        res.status("200").json(["Thanks for get Feedback"]);
    }
    else{
        // Handle other HTTP method
        res.status(400).json(["Bad Request"]);
    }

};