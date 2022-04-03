
import React from "react";
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { EllipsisOutlined } from '@ant-design/icons';
import Msgimage from './Msgimage.jpg';
import { SearchOutlined } from '@ant-design/icons';
import "./Card.css";
import Image1 from './Image1.jpg'
// import image4 from './image4.jpg'

const CardItem = (props) => {
   const {Image,Name,Message,Time,handleClick}=props;
   const OnClick = () => {
           
    
        handleClick(Image,Name);
    
  
}
   
  
  
  return (



    

                <div className="imgdiv" onClick={OnClick} >
                <img src={Image} className="image" />
                <div className="imgcenter-text" >
                  <h4>{Name}</h4>
                  <p style={{ color: "gray" }}>{Message}</p>
                </div>
                <div className="imgrightside-text">
                <p>{Time}</p>
              </div>
              </div>
              
          









  );
};
export default CardItem;
