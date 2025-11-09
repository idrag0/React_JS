

// lecture => 26 Array Nested Looping with Components

import Collegess from "./Collegess";

function Lec26(){
    const clgData = [
        {
            name: 'Galgotias',
            city: 'G.Noida',
            website: 'www.gu.edu.in',
            student: [
                { name: 'aby', age: 21, email: 'aby@gu.edu.in' },
                { name: 'vijay patel', age: 23, email: 'vijay@gu.edu.in' }
            ]
        },
        {
            name: 'Amity University',
            city: 'Noida',
            website: 'www.amity.edu',
            student: [
                { name: 'neha sharma', age: 20, email: 'neha@amity.edu' },
                { name: 'raj kumar', age: 22, email: 'raj@amity.edu' }
            ]
        },
        {
            name: 'Lovely Professional University',
            city: 'Phagwara',
            website: 'www.lpu.in',
            student: [
                { name: 'simran kaur', age: 19, email: 'simran@lpu.in' },
                { name: 'aman singh', age: 21, email: 'aman@lpu.in' }
            ]
        },
        {
            name: 'Vellore Institute of Technology',
            city: 'Vellore',
            website: 'www.vit.ac.in',
            student: [
                { name: 'priya menon', age: 22, email: 'priya@vit.ac.in' },
                { name: 'sachin rao', age: 23, email: 'sachin@vit.ac.in' }
            ]
        }
    ];


    return(
        <div>
            <h1>Nested Looping with Component</h1>
            {
                clgData.map((clg,idx) => (
                    <div key={idx}>
                        <Collegess clg={clg}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Lec26;