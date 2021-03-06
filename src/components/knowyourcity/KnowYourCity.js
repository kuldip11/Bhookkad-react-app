import React,{ useState, useEffect} from 'react'
import "./city.css"
import Card from './Card';
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Spin } from 'antd';

const KnowYourCity = () => {

    const [cityData,setCityData] = useState({})
    const [cityFlag, setCityFlag] = useState(false)
    const [indx, setIndx] = useState(0)
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [cityId, setCityId] = useState("")
    const leftClickHandler = () => {
        if(indx>0){
            setIndx(indx-1)
        }
    }
    const rightClickHandler = () => {
        if(indx < cityData["best_rated_restaurant"].length -1 ){
            setIndx(indx+1)
        }
    }

    //Current city Data
    useEffect(() => {
        if(cityId!==""){
            var myHeaders = new Headers();
            myHeaders.append("Cookie", "csrf=bf7dd1c03157ba38ba7b42bebdd61c8c; fbcity=11434; fbtrack=7764bf6c133c0e240da74b90cad9fb08; zl=en; AWSALBTG=9Lu9djNB6jELLQSZBMHePXW/4MyeA/IhsOghAoqS6mOzbDA0/yVlydAL0Wjh4dTfnyCiD7lN27qPF/JPBdjvkXfdSONWC4cMEAgFuELBsYxV02SqCbnaLNcg3ktO/bKGKca6qGJli+eKnWsHFQJq+XVsjcwhxQgy60URbvRsUBHl5KGPEgs=; AWSALBTGCORS=9Lu9djNB6jELLQSZBMHePXW/4MyeA/IhsOghAoqS6mOzbDA0/yVlydAL0Wjh4dTfnyCiD7lN27qPF/JPBdjvkXfdSONWC4cMEAgFuELBsYxV02SqCbnaLNcg3ktO/bKGKca6qGJli+eKnWsHFQJq+XVsjcwhxQgy60URbvRsUBHl5KGPEgs=");

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${cityId}&entity_type=city&apikey=eb2aace27fa43d3d8ffa60ed4029767d`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setCityData(result)
                setCityFlag(true)
                
            })
            .catch(error => {
                console.log('error', error)
                setCityFlag(false)
            });
        }
    },[cityId])

    useEffect(() => {
        if(latitude!==""){
            fetch(`https://developers.zomato.com/api/v2.1/cities?&lat=${latitude}&lon=${longitude}&apikey=eb2aace27fa43d3d8ffa60ed4029767d`)
            .then(response => response.json())
            .then(result => {
                setCityId(result["location_suggestions"][0]["id"])
            })
        }
    }, [longitude])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude(position.coords.latitude.toFixed(2))
            setLongitude(position.coords.longitude.toFixed(2))
          });
    }, [])

    return (<>
        {!cityFlag && <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", height:"100%", width:"100%"}}>
             <Spin  size="large"/>
             <h5 style={{color:"white"}}>Loading Please Wait...</h5> 
        </div>}
        {cityFlag && <div className="know-your-city">
            <div className = "details">
                <h3 style={{fontSize:"25px", textShadow:"-moz-initial"}}>{cityData["city"]}, {cityData["location"]["country_name"]}</h3>
                <h3>Restaurants Available: {cityData["num_restaurant"]}</h3>
                <h3>Nightlife Restaurants: {cityData["nightlife_res"]}</h3>
                <h3>Top Cuisines:</h3>
                <ul>
                    { cityData.top_cuisines && cityData.top_cuisines.map((cuisine, index) => (<li key ={index}>{cuisine}</li>))}
                </ul>
            </div>
            <div className="city-restaurants">
                <h1 style={{width:"100%",marginTop:"50px"}}>Best Rated Restaurants</h1>
                <div className="top-res">
                    <DoubleLeftOutlined onClick={leftClickHandler}/>
                    <Card data={cityData["best_rated_restaurant"][indx]} />
                    <DoubleRightOutlined onClick={rightClickHandler}/>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default KnowYourCity
