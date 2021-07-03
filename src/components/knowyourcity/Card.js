import React,{ useContext } from 'react'
import { HeartFilled } from "@ant-design/icons";
import { wishContext } from '../../App';
import { message, Rate } from 'antd';
import 'antd/dist/antd.css';

const CityCard = ({data}) => {

    const [wish, setwish] = useContext(wishContext)

    const wishAddHandler =  () => {
        setwish([...wish, {name:data["restaurant"]["name"], url:data["restaurant"]["url"]}])
        message.success("Restaurant added..");
        
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
                <p className="restaurants-info">Rating: <Rate allowHalf disabled defaultValue={data["restaurant"]["user_rating"]["aggregate_rating"]} /></p>    
            
        </div>
    )
}

export default CityCard;