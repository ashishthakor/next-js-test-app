import React, { useState } from "react";

import { URL, User } from "../../common/interface/server";
import { getServerSideProps } from "../server";

const Cient = ({ data }: { data: User[] }) => {
    const [inputValue, setInputValue] = useState("");
    const [user, setUser] = useState(data || []);

    async function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
        if (event.target.value.trim().length > 0) {
            const res = await fetch(
                `${URL}/api/users/user?username=${event.target.value.trim()}`
            );
            const data = await res.json();
            setUser(data);
        } else {
            setUser(data);
        }
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search name"
                value={inputValue}
                onChange={handleInputChange}
            />
            {user.length < 1 && <p>Data Not Available</p>}
            {user.map((userData: User) => (
                <p key={userData.id}>{userData.name}</p>
            ))}
        </>
    );
};

export { getServerSideProps };

export default Cient;
