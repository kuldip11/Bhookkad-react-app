import React,{useContext} from 'react'
import { wishContext } from '../App'
import WishList from './WishList'
import "../styles/Store.css";
import History from './History';

const Store = ({task}) => {

    const [wish, setwish] = useContext(wishContext)
    return (
        <div className="store" >
            {task ? <WishList/> : <History/>}
        </div>
    )
}
export default Store;
