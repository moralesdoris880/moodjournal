import { useState } from "react";
import Calendar from 'react-calendar';

function Home(){
    const [date,setDate] = useState(new Date());

    return(
        <div>
            <button id="newEntry">+</button> 
            {/* ^^SHOULD BE IN NAVBAR^^ */}
            <h1>Welcome back, Doris</h1> 
            <div className="breakine"></div>
            <div id="moodtrackerbox">
                <h1>Mood Tracker</h1>
                <div className='calendar-container'>
                    <Calendar onChange={setDate} value={date} />
                </div>
            </div>
            <div className="breakline"></div>
        </div>
    );
}

export default Home;


// MANUAL CALENDAR
// const [currentMonth,setCurrentMonth] = useState(new Date().toLocaleString('default', {month: 'long'}));
// let days = 0;

// function handleMonth(currentMonth,days){
//     if(currentMonth==="January"||currentMonth==="March"||currentMonth==="May"||currentMonth==="July"||currentMonth==="August"||currentMonth==="October"||currentMonth==="December"){
//         days=31
//     }
//     else if(currentMonth==="February"){
//         const currentYear = new Date().getFullYear()
//         currentYear%4===0? days=29 : days=28
//     }
//     else{
//         days=30
//     }
//     return days
// }

//  <div> MANUAL CALENDAR
//                     {[...Array(handleMonth(currentMonth,days))].map((x, i) => 
//                         <li>😁</li>)}
// </div> 