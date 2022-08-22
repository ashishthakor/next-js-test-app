import { NextApiRequest, NextApiResponse } from "next";
import { fetchAllUser } from "../../../lib/user";

export default async function users(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return fetchAllUser(req, res);
  } else {
    res.status(405).json({ message: "Trying to call Invalid Method" });
  }
}
