export interface User {
    id: string;
    name: string;
    age: string;
}

export const URL = process.env.URL || "http://localhost:3001";