import { lazy, Suspense, useState } from "react";


const User = lazy( ()=> import("./UseREducerHook67") );

function LazyLoading67() {
    const [load, setLoad] = useState(false);
  return (
    <div>
      <h1>Lazy Loading</h1>

      {
         load ? <Suspense fallback={<h3>Loading...</h3>}>  <User /> </Suspense> : null
        }

        <button onClick={() => setLoad(true)}>Load User</button>
    </div>
    )
}

export default LazyLoading67;