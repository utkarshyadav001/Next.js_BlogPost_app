// http://localhost:3000/api/blog?slug=how-to-learn-css

import * as fs from "fs";

export default function handler(req, res) {
    const slug = req.query.slug;
    if (!slug) {
        return res.status(500).json({ error: "No such blog's found" });
    };

    fs.readFile(`blogpost/${slug}.json`, "utf-8", (err, data) => {
        if (err) {
            return res.status(400).json({ error: "No such blog found" });
        };
        return res.status(200).json({ name: 'Utkarsh Yadav', blogData: JSON.parse(data) });
    });
};
