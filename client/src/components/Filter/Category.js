import React, { useEffect ,useState,Fragment} from 'react'
import axios from "axios"
import SearchItem from "./SearchItem"

export default function SearchResult({match,location}) {
    useEffect(() => {
        getCategory()
    }, [])
    const [userData, setuserData] = useState({})
    console.log(userData)
    
    
    const getCategory = () =>{

        let request = axios({
               method: "GET",
               url: `/api/filter/mentor/rxy/ryz/${match.params.category}`,
               
         });
         request.then(res => {
               console.log(res)
               setuserData(res.data)
             
         })
    }
    return (

        <Fragment>
                <p className='lead'>
                    <i className='fab fa-connectdevelop' />Search Result-
                    mentors
                </p>
                <div className='profiles'>
                    {userData.length > 0 ? (
                    userData.map(profile => (
                        <SearchItem key={profile._id} profile={profile} />
                       
                    ))
                    ) : (
                    <h4>Loading...</h4>
                    )}
                </div>
        </Fragment>
      );
}
