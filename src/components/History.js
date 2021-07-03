import React,{useContext} from 'react'
import { wishContext } from '../App'
import "../styles/History.css"
import { DeleteFilled } from "@ant-design/icons";
const History = () => {

    const [wishlist, setwishlist, history, sethistory]  = useContext(wishContext)
    const historyDeletHandler = (e, clickedName) => {
        e.preventDefault();
        let newList = history.filter((item) => item.time !== clickedName );
        sethistory(newList)
        // message.success('history successfully deleted');
    }
    
    return (
        <tbody className="history">
            <h1>Search History</h1>
            {history.map((ele,indx)=>(
                <tr key={indx}  style={{textAlign:"start"}}>
                    <td > 
                        <DeleteFilled style={{marginRight:"20px"}} onClick={(e)=>historyDeletHandler(e, ele.time)}/> 
                    </td>
                    <td className="name"> {ele.name} </td>
                    <td className="date"> {ele.time}</td>
                </tr>
            ))}
        </tbody>
    )
}

export default History
