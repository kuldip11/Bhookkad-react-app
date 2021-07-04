import React, {useState,useContext} from 'react';
import 'antd/dist/antd.css';
import { Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  CoffeeOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  SmileOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import { menuebarContext } from "../App"
import "../styles/App.css"
const { SubMenu } = Menu;

const MenuBar = () => {
const [menudata, setmenudata] =useContext(menuebarContext);
  const [collapsed, setcollapsed] = useState(0);

  const toggleCollapsed = () => {
    setcollapsed(!collapsed)
  };

    return (
      <div  >
        <Button type="primary" onClick={toggleCollapsed} style={{ marginRight:"1px !important", marginLeft:"2px !important", width:"85px" }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        Menu
        </Button>
        <Menu
          style={{borderRight:"1px solid white", height:"89vh"}}
          defaultSelectedKeys={['0']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          // style={{backgroundColor:"transparent"}}
        >

          <Menu.Item key="0" icon={<SmileOutlined />} onClick={()=>setmenudata("User")}>
            My Account
          </Menu.Item>

          <Menu.Item key="1" icon={<PieChartOutlined />} onClick={()=>setmenudata("AboutUs")}>
            About Us
          </Menu.Item>

          <Menu.Item key="2" icon={<EnvironmentOutlined />} onClick={()=>setmenudata("yourCity")}>
            Know Your City
          </Menu.Item>

          <Menu.Item key="3" icon={<CoffeeOutlined />} onClick={()=>setmenudata("Bhookkad")}>
            Bhookkad
          </Menu.Item>

          <Menu.Item key="4" icon={<ShoppingCartOutlined />} onClick={()=>setmenudata("WishList")}>
            Wishlist
          </Menu.Item>
          
          <SubMenu key="sub5" icon={<SettingOutlined />} title="Navigation Two" >
            <Menu.Item key="6"  onClick={()=>setmenudata("History")} >History</Menu.Item>
            <Menu.Item key="7" onClick={()=>setmenudata("ContactUs")}>Contact Us</Menu.Item>
          </SubMenu>

        </Menu>
      </div>
    );
  
}

export default MenuBar;