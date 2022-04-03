
import React from "react";
import { useState } from "react";
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { EllipsisOutlined } from '@ant-design/icons';
import Msgimage from './Msgimage.jpg';
import { SearchOutlined } from '@ant-design/icons';
import Card from "../Card/Card";
import "./Content.css";
import Image1 from "./Image1.jpg"
import Image2 from "./Image2.jpg"
import Image3 from "./Image3.jpg"
import Image4 from "./Image4.jpg"
import Image5 from "./Image5.jpg"
import Image6 from "./Image6.jpg"
import Image7 from "./Image7.jpg"
import Image8 from "./Image8.jpg"

const Content = () => {
    const [showBody, setShowBody] = useState(false);
    const [showOption, setShowOption] = useState(false);


    const ContactList = [
        { Image: Image1, Name: "Vidhursan", Msg: "Typing...", Time: "12.50" },
        { Image: Image2, Name: "Sathish", Msg: "hii", Time: "12.39" },
        { Image: Image3, Name: "Abi", Msg: "how are you?", Time: "10.39" },
        { Image: Image4, Name: "Nathiya", Msg: "How was you carreer?", Time: "Yesterday" },
        { Image: Image5, Name: "Saraswathi", Msg: "Are you front-end developer?", Time: "Yesterday" },
        { Image: Image6, Name: "Aravinthan", Msg: "Be happy and have a smile", Time: "Saturday" },
        { Image: Image7, Name: "Sudha", Msg: "Ping me,Once you free", Time: "Saturday" },
        { Image: Image8, Name: "Bala", Msg: "I will come to your home  on tommorrow ", Time: "Friday" },

    ]

    const handleClick = (selectedImage, selectedName) => {
        if (showBody?.Name!==selectedName)

 
            setShowBody({Image:selectedImage, Name:selectedName});


    }
    const More_clicked = () => {

        setShowOption(!showOption);

    }
    const [inputMessage, setInputMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const onSendClick = () => {
        setMessages([
            ...messages,
            { text: inputMessage, date: new Date().toLocaleTimeString('en-US') },
        ]);
        setInputMessage("");
    };

    const onMessageInputChange = (event) => {
        setInputMessage(event.target.value);
    };
    return (


        <div className="card-container" >

            <div className="Top-container">

            </div>
            <div className="Container1">
                <div className="leftside-content">

                    <div className="leftside">
                        <div className="firstuser-icon">
                            <UserOutlined style={{
                                color: "gray", fontSize: "30px",
                                border: "1px solid gray",
                                borderRadius: "50%", position: "relative", top: "15px", left: "5px"
                            }} />
                            <div className="msg-ellipse">
                                <img src={Msgimage} className="message" />   <EllipsisOutlined onCli
                                k={More_clicked} style={{
                                    fontSize: "30px", color: "gray", transform: "rotate(90deg)", paddingLeft: "25px", position: "relative",
                                    top: "20px"
                                }} />

                            </div>
                            {showOption ? (
                                <div className="divConatainer">
                                    <ul>
                                        <li>Hai</li>
                                        <li>Hello</li>
                                        <li>How are you</li>
                                    </ul>

                                </div>
                            ) : null}

                        </div>

                        <div className="searchicon">
                            <div className="Search-box">
                                <SearchOutlined style={{
                                    fontSize: "22px", color: "black", position: "relative",
                                    left: "18px",
                                    top: "10px",
                                }} />


                                <input placeholder="Search or start new chat" className="searchicon-text" ></input>
                            </div>

                        </div>






                        <div className="scroll">

                            <div className="imgdiv"  >



                                {
                                    ContactList.map((userData) => {
                                        const { Image, Name, Msg, Time } = userData;
                                        return <Card Image={Image} Name={Name} Message={Msg} Time={Time} handleClick={handleClick} />;
                                    })}
                            </div>


                        </div>
                    </div>
                </div>
                {showBody ? (
                    <div class="rightside">

                        <div class="imgdiv-first">
                            <img src={showBody.Image} class="imagfirst" />
                            <div class="imgcenterfirst-text">
                                <h4>{showBody.Name}</h4>
                                <p style={{ color: "gray" }}>9.30</p>
                            </div>
                        </div>
                        <div className="chat-container">
                            <div className="message-body">
                                {/* <center><div class="day">Today</div></center> */}
                                {messages.map((message) => {
                                    const { text, date } = message;
                                    return (
                                        <div className="message-container">
                                            <div className="text">{text}</div>
                                            <div className="date">{date}</div>
                                        </div>
                                    );
                                })}
                          </div>
                               <div class="send-container">
                                <div className="send-message-container">
                                    <input
                                        className="message-input" value={inputMessage}
                                        onChange={onMessageInputChange}></input>
                                    <button onClick={onSendClick} >Send</button>
                                </div>
                           
                            </div>
                        </div>
                    </div>




















                ) : null}

            </div >

        </div>
    );
};

export default Content;