









import {useState, useEffect } from "react";

const ComponentUsers = () =>{
    const [empData,setEmpData] =  useState([])
    useEffect(() => {
      
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setEmpData(data))
    }, [])
    return(
        <>
        <div>
            {empData.map((item)=>(
            <ul key={item.id} >
                <li className="list-none border-1 rounded-2xl hover:bg-amber-400 bg-gray-400 flex-col font-semibold text-center w-[300px]">{item.name}</li>
            </ul>
        ))}
        </div>
        </>
    )
}

export default ComponentUsers;