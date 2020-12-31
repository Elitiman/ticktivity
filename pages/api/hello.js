// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
export default (req, res) => {
  res.statusCode = 200;
  if (req.method !== "GET") {
    res.status(500).json({ message: "sorry we accept only get request" });
  }
  res.json({ name: "John Doe", method: req.method });
};
