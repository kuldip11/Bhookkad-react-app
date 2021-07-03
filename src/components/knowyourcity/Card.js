import React,{ useContext } from 'react'
import { HeartFilled } from "@ant-design/icons";
import { wishContext } from '../../App';
import { message, Rate } from 'antd';
import 'antd/dist/antd.css';

const CityCard = ({data}) => {

    const [wish, setwish] = useContext(wishContext)

    const wishAddHandler =  () => {
        const val = wish.filter((item) => item.name === data["restaurant"]["name"] )
        if(val.length === 0){
        setwish(
            [
                ...wish, {
                    name:data["restaurant"]["name"], 
                    url:data["restaurant"]["url"], 
                    ratings:data["restaurant"]["user_rating"]["aggregate_rating"],
                    time:data["restaurant"]["timings"]
                }])
        message.success("Restaurant added..");
        } else{
            message.warning("Restaurant is already added");
        }
        
    }

    return (
        <div style={{width:"40vw"}}>
                <span>
                    <a 
                        href={data["restaurant"]["url"]} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{fontSize:"40px",fontWeight:"bold"}}>
                        {data["restaurant"]["name"]}  
                    </a>
                        <span>
                            <HeartFilled style={{height:"15px", color:"red"}} onClick={wishAddHandler}/>
                        </span>
                </span>
                <p>Average cost for two: {data["restaurant"]["average_cost_for_two"]}</p>
                <p>Cuisines Available: {data["restaurant"]["cuisines"]}</p> 
                <p>Timing: {data["restaurant"]["timings"]}</p>
                <p className="restaurants-info">Rating: <Rate allowHalf disabled defaultValue={data["restaurant"]["user_rating"]["aggregate_rating"]} /></p>    
            
        </div>
    )
}

export default CityCard;