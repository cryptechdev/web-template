import type { NextApiRequest, NextApiResponse } from "next";
const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD || "";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (PASSWORD.length === 0) {
    res.status(200).json("ok");
  } else if (PASSWORD === req.body.password) {
    res.status(200).json("ok");
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
  return;
};

export default handler;
