import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../common/interface/server";
import { USERS } from "../constants/user";

/**
 * 
 * @param req : NextApiRequest,
 * @param res : NextApiResponse
 * @returns : Fetch All Users List
 */
export async function fetchAllUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        // call to database for CRUD operations
        return res.status(200).json(USERS);
    } catch (err) {
        res.status(500).end(err);
    }
}

/**
 * 
 * @param req : NextApiRequest,
 * @param res : NextApiResponse
 * @returns : Get Users match with Query String
 */
export async function searchUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        const username = req.query.username;
        let foundUser;

        if (!username) {
            return console.log("Username not available");
        }
        // call to database for CRUD operations
        if (typeof username === "string") {
            foundUser = USERS.filter((user: User) =>
                user.name.toLowerCase().includes(username.toLowerCase())
            );
        }

        return res.status(200).json(foundUser);
    } catch (err) {
        res.status(500).end(err);
    }
}
