const UserItem = ({user}) => {
    return (
        <tr>
            <td>{user.username}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    );
};


const UserList = ({users}) => {
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Имя пользователя</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Эл. почта</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <UserItem user={user}/>)}
                </tbody>
             </table>
        </div>
    );
};

export default UserList;