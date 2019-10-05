import React,{useEffect,useState} from 'react';
import api from "../../api/api";
import Users from "./Users";
import {Redirect} from "react-router-dom";

const UsersContainer = () => {

    const [state,setState] = useState([]);
    const [status,setStatus] = useState(false);

    useEffect(()=>{
        (async ()=>{
            try{
                let users = await api.getUsers();
                setState(users);
                setStatus(false);
            }
            catch (e) {
                if(e.response.status === 403){
                    setStatus(true);
                }
            }
        })()
    },[]);

    if(status){
        return <Redirect to={'/login'}/>
    }
    return <Users users={state}/>
};

export default UsersContainer;