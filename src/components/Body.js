import React from 'react'
import AboutUs from './AboutUs'
import Bhookkad from './Bhookkad'
import User from './user/User'
import Store from './Store'
import KnowYourCity from './knowyourcity/KnowYourCity'
import ContactUs from './ContactUs'


const Body = ({menudata}) => {
    return (
        <div style={{width:"80vw", height:"64vh"}}>
            {menudata === "User" && <User/>}
            {menudata === "AboutUs" && <AboutUs/>}
            {menudata === "yourCity" && <KnowYourCity />}
            {menudata === "Bhookkad" && <Bhookkad/>}
            {menudata === "WishList" && <Store task={true}/>}
            {menudata === "History" && <Store task={false}/>}
            {menudata === "ContactUs" && <ContactUs/>}
        </div>
    )
}

export default Body
