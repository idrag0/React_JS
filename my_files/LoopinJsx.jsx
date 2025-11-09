import { use } from "react";
import UserCompo from "./UserCompo";

 //    lecture 24 =====> LOops in jsx

// function LoopinJsx(){
//     const userName = ['anil', 'vijay' , 'spidermon', 'batMOn'];
//     const clgData = ['galgotias', 'amity', 'g.l bajaj', 'amu', 'jmi'];

//     const user1 = {
//         name: 'aby',
//         age: 21,
//         email: 'aby@exg.com',
//         id: 1
//     };

//     const user2 = {
//         name: 'raj',
//         age: 22,
//         email: 'raj@exg.com',
//         id: 2
//     };

//     const user3 = {
//         name: 'neha',
//         age: 20,
//         email: 'neha@exg.com',
//         id: 3
//     };

//     const user4 = {
//         name: 'sachin',
//         age: 23,
//         email: 'sachin@exg.com',
//         id: 4
//     };

//     const userData = [user1, user2, user3, user4];

//     return(
//         <div>
//             <h1>Loops in JSX with Map Function</h1>
//             <br />

//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         userData.map((user) => (
//                             <tr key={user.id}>
//                                 <td>{user.id}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.age}</td>
//                                 <td>{user.email}</td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// }


/// lecture 25 ---  REUSE COMPONENT IN LOOP

function LoopinJsx(){
    const userTATA = [
        {
            name: 'alice',
            age: 21,
            email: 'alice@example.com',
            id: 1
        },
        {
            name: 'bob',
            age: 22,
            email: 'bob@example.com',
            id: 2
        },
        {
            name: 'carla',
            age: 20,
            email: 'carla@example.com',
            id: 3
        },
        {
            name: 'david',
            age: 23,
            email: 'david@example.com',
            id: 4
        }
    ]

    return(
        <div>
            <h1>REuse Components</h1>
            {
                userTATA.map((user) => (
                    <div key={user.id}>
                        <UserCompo user = {user} />
                    </div>

                ))
            }

        </div>
    )
}


export default LoopinJsx;