import Lec45_displayUser from "./Lec45_displayUser";
import Lec45AddUser from "./Lec45AddUser";
import { useState } from "react";


function Lec45Lifting() {

  const [user, setUser] = useState('');

  return (
    <div>
      <h1>Lec45Lifting</h1>
      <Lec45AddUser setUser={setUser} user={user} />
      <Lec45_displayUser user={user} />

    </div>
  );
}


export default Lec45Lifting;     