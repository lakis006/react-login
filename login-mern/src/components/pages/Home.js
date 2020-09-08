import React, { useEffect, useContext } from 'react';
import {useHistory} from "react-router-dom";
import UserContext from "../../context/UserContext"

function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) history.push("/login")
    
    })

    return <div className="page"> This is where the movie component will be rendered 
        
        
         </div>
}

export default Home
