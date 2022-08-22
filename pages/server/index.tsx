import React from "react";
import { GetServerSideProps } from "next";

import { URL, User } from "../../common/interface/server";

const Server = ({ data }: {
    data: User[]
}) => {
    if (data.length < 1) {
        return <>Data Not Available</>;
    }
    return (
        <>
            {data.map((user: User) => 
                <p key={user.id}>{user.name}</p>
            )}
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${URL}/api/users`);
    const data = await res.json();
    return {
        props: { data: data },
    };
};

export default Server;
