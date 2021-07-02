import React, { useContext } from "react";
import { filterContext } from "./Bhookkad";
import "antd/dist/antd.css";
import "../styles/Filter.css";
import { Select } from "antd";
const { Option } = Select;
const Filter = () => {
  const [filterItem, setfilterItem] = useContext(filterContext);
  return (
    <Select
    className="filter"
    style={{width:"100px",height:"20px"}}
      showSearch
      placeholder="Search to Select"
      optionFilterProp="children"
      
      onChange={(val) => setfilterItem(val)}
    >
      <Option value="Cost">Price</Option>
      <Option value="Rating">Rating</Option>
      <Option value="real_distance">Distance</Option>
    </Select>
  );
};

export default Filter;
