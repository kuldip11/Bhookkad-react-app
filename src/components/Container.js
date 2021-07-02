import React from 'react'
import Body from './Body'
import Header from "./Header"
import "../styles/Container.css"

const Container = ({menudata}) => {
    return (
        <div className="container">
            <Header />
            <Body menudata={menudata}/>
        </div>
    )
}

export default Container
