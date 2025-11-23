import { useEffect, useState } from "react";


function ToDo() {
  
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
      fetch("http://localhost:8080/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error("Error fetching data:", error));
    }, [])
    
  return (
    <div className="container-fluid">
        <h1>APPIONTMENTS</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER ID</th>
              <th>TITLE</th>
              <th>DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment,index)=>
              <tr key={index}>
                <td>{appointment.id}</td>
                <td>{appointment.userid}</td>
                <td>{appointment.title}</td>
                <td>{appointment.date}</td>
                <td>
                  <button className="btn btn-warning bi bi-pen mx-2"></button>
                  <button className="btn btn-danger bi bi-trash"></button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  )
}

export default ToDo;