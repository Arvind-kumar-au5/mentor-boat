import React ,{useEffect}from  'react'
import axios from "axios"

export default function MentorDashboard() {
    const token = localStorage.getItem("token");
    useEffect(() => {
        getApplication()
    }, [])
    const getApplication = () => {

        let request = axios({
              method: "GET",
              url: "/api/mentorship/apply",
              headers: {
                    "x-auth-token": token
              },
        });
        request.then(res => {
              console.log(res)
            
        })
    }
    return (
        <div>
            Hello 
        </div>
    )
}
