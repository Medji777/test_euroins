import React from 'react';
import User from "./User";

const Users = ({users}) => {
    return (
        <div>
            <h2>Список пользователей</h2>
            {users && users.map(u => <User key={u.id} name={u.name}/>)}
        </div>
    )
};

export default Users;