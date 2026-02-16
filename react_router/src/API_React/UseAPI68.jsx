import { Suspense, use } from "react";

const fetchData = () => fetch('https://dummyjson.com/users')
    .then((response) => response.json());

function UseAPI68() {
    return (
        <div>
            <h1>Use API</h1>
            <Suspense fallback={<h1>Loading...</h1>}>
                <User userD={fetchData()} />
            </Suspense>
        </div>
    )
}

const User = ({ userD }) => {
    const userData = use(userD);

    return (
        <div>
            <h1>User List</h1>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Age</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userData?.users?.map((user) => (
                        <tr key={user.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.firstName} {user.lastName}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.age}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UseAPI68;
