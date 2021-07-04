import React, { useState, useEffect, createContext, useContext } from 'react';
import "../styles/Bhookkad.css";
import Filter from './Filter';
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { wishContext } from '../App';
import Card from './knowyourcity/Card';
export const filterContext = createContext()

const Bhookkad = () => {
    const [wishlist, setwishlist, history, sethistory]  = useContext(wishContext)
    const [input, setInput] = useState("")
    const [flag, setflag] =useState(false);
    const [restau, setrestau] = useState([]);
    const [indx,setindx] = useState(0);
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [filterItem,setfilterItem] =useState("real_distance")

    const currentTime = () => {
        const date = new Date();
        const time = date.toLocaleTimeString()
        return time;
    }

        useEffect(() => {
            if(input!==""){
                var myHeaders = new Headers();
                myHeaders.append("user-key", "bd0694624e4a9df3fd6a90ce7addc33a");
                myHeaders.append("Cookie", "csrf=7f45d401452bea3de7cd3d42a9367d1f; fbcity=11434; fbtrack=7764bf6c133c0e240da74b90cad9fb08; zl=en; AWSALBTG=oFyX6u6kiuXSr7MiDS6OUDIDbnHlYv34dH8j9yA/8ePmiz0+SVqM/tNrTl9wl1YNwGKQTVWckvjpIyC8Ds3rz4MLhd5wKP9I0QhFiY6IK9EgjMO00Jpcb/zwXqF4H44iQmOUF5IAWo0qvxj47gBCX2XMp2lNW1Hm1h9FAp2b2jxG5BLE6sE=; AWSALBTGCORS=oFyX6u6kiuXSr7MiDS6OUDIDbnHlYv34dH8j9yA/8ePmiz0+SVqM/tNrTl9wl1YNwGKQTVWckvjpIyC8Ds3rz4MLhd5wKP9I0QhFiY6IK9EgjMO00Jpcb/zwXqF4H44iQmOUF5IAWo0qvxj47gBCX2XMp2lNW1Hm1h9FAp2b2jxG5BLE6sE=");

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch(`https://developers.zomato.com/api/v2.1/search?q=${input}&lat=${latitude}&lon=${longitude}&count=10&sort=${filterItem}&order=asc`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if(result["results_found"]!==0){
                        setrestau(result["restaurants"])
                        sethistory([...history,{name:input, time: currentTime()}])
                        setflag(true)
                    }
                    })
            }
    },[input,filterItem])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude(position.coords.latitude.toFixed(2))
            setLongitude(position.coords.longitude.toFixed(2))
          });
    }, [])


    const rightClickHandler = () => {
        if(indx !== restau.length-1){
            setindx(indx+1)
        }
    }

    const leftClickHandler = () => {
        if(indx !== 0){
            setindx(indx-1)
        }
    }
    

    return (
        <filterContext.Provider value = {[filterItem,setfilterItem]} style={{}}>
            <div style={{display:"flex", width:"100%",justifyContent:"center", alignItems:"center"}}>
                <input  className="foodInput"
                    onKeyDown={(e) => { if(e.code==='Enter'){ setInput(e.target.value) }} }/>
                <Filter />
            </div>

            {!flag && <div style={{height:"69vh"}}/>}   
            {flag && 
                <div className="resList">
                    <DoubleLeftOutlined style={{width:"100px"}} onClick={leftClickHandler}/>
                    <Card data={restau[indx]} />
                    <DoubleRightOutlined style={{width:"100px"}} onClick={rightClickHandler}/>
                </div>
            }
        </filterContext.Provider>    
    )
}

export default Bhookkad;
