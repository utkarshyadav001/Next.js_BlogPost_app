// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/blogs?count=2

import * as fs from "fs";

export default async function handler(req, res) {

  let fileNameArray;
  let blogs = [];
  let {count} = req.query;
  console.log(count)

  fileNameArray = await fs.promises.readdir("blogpost");
  fileNameArray = fileNameArray.slice(0, parseInt(count));
  // console.log(fileNameArray,"e");

  for (let index = 0; index < fileNameArray.length; index++) {
    const fileName = fileNameArray[index];
    // console.log(fileName)
    await fs.promises.readFile(`blogpost/${fileName}`, "utf-8").then((e)=>{
      let {title, author, metadesc, slug} = JSON.parse(e)
      let cBlog = {title, author, metadesc, slug};
      blogs.push(cBlog)
    });
    
  }
  res.status(200).json({ api_Author: 'Utkarsh Yadav', blogs });
  

  // var fileNameArray;
  // await fs.promises.readdir("blogpost", (err, data) => {
  //   if (err) {
  //     return res.status(500).json({ error: "No such blog's found" });
  //   };
  //   console.log(data);
  //   fileNameArray = data;
  //   console.log(fileNameArray)
  //   res.status(200).json({ name: 'Utkarsh Yadav', data });
  // });
  // console.log(fileNameArray, "w");

  // await fileNameArray.forEach(element => {
  //   const file = fs.readFileSync(`blogpost/${element}`, "utf-8");
  //   console.log(file)
  // });

};

