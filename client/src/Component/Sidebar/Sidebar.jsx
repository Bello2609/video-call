import React, { useEffect , useState} from "react";
import classes from "./Sidebar.module.css";
import axios from "axios";
import { USER } from "../utils/api";
import { Link } from "react-router-dom"

const Sidebar = ()=>{ 
    const [ users, setUsers ] = useState([]);
   
    useEffect(()=>{
        axios.get(USER).then(user=>{
            const res_data = user.data.allUser;
                setUsers(res_data);
        }).catch(err=>{
            console.log(err);
        });
    }, []);
    return (
        <>
            <div className={classes.Sidebar}>
                {
                        users.map(user=>(
                            <Link to={`/chat/${user._id}`}>
                                <div className={classes.Contact}>
                                    <h4 key={user._id}>{user.name}</h4>
                                    <p>how are you</p>
                                </div>
                            </Link>
                                
                                
                          
                        ))
                }
            </div>
        </>
    );
}
export default Sidebar;