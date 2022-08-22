import { NextApiRequest, NextApiResponse } from "next";
import { searchUser } from "../../../lib/user";


export default async function user(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return searchUser(req, res);
  } else {
    res.status(405).json({ message: "Trying to call Invalid Method" });
  }
}
