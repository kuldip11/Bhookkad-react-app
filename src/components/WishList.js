import React, { useContext } from "react";
import { wishContext } from "../App";
import { DislikeFilled } from "@ant-design/icons";
import { message, Rate } from "antd";
import "../styles/WishCard.css";

function WishCard() {
  console.log("hi");
  const [wish, setwish] = useContext(wishContext);

  const wishDeletHandler = (e, clickedName) => {
    e.preventDefault();
    let newList = wish.filter((item) => item.name !== clickedName);
    setwish(newList);
    message.success("Restaurant deleted");
  };

  return (
    <div className="wish">
      {wish.length === 0 && <h1>WishList is Empty...</h1>}
      {wish.map((ele, indx) => (
        <div className="output wish" key={indx}>
          <div className="Text-Text">
            <span>
              <a className="re" href={ele.url} target="_blank" rel="noreferrer">
                {" "}
                {ele.name}{" "}
              </a>
              <span>
                <DislikeFilled onClick={(e) => wishDeletHandler(e, ele.name)} />
              </span>
            </span>
            <p>Timing: {ele.time}</p>
            <p className="restaurants-info">
              Rating: <Rate allowHalf disabled defaultValue={ele.ratings} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WishCard;
