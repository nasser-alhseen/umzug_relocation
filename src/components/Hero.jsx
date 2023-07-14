import { React, useState } from "react";
import styled from "styled-components";
import homeImage from "../assets/mainBackground.jpg";
import Navbar from "./Navbar2";
import { TextField } from "@material-ui/core";
export default function Hero() {

  function handleSendClick() {
    const phoneNumber = '+963992670932'; // Replace with the recipient's phone number
    const messageText = encodeURIComponent("");
    const link = `https://wa.me/${phoneNumber}?text=${messageText}`;
    window.open(link, '_blank');
  }
  function handleSendClickGmail() {
    const recipientEmail = 'example@gmail.com'; // Replace with the recipient's email address
    const subject = encodeURIComponent(''); // Replace with your subject text
    const body = encodeURIComponent(''); // Replace with your body text
    const link = `https://mail.google.com/mail/?view=cm&to=${recipientEmail}&su=${subject}&body=${body}`;
    window.open(link, '_blank');
  }


  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="navW">
          <Navbar />
        </div>
        <div className="formContainer">
          <div className="title">
            <h1>Moving doesn't have to be stressful </h1>

          </div>
          <div className="search">
            <div className="container">
              <label htmlFor="">What is your current address ?</label>
              <input type="text" />
              <TextField
                variant="outlined"
                InputProps={{
                  style: {
                    height: '32px', // set the height of the input
                    border: '1px solid #ccc', // set the border
                    borderRadius: '4px', // set the border radius
                    padding: '4px 8px', // set the padding
                  },
                }}
              />            <label htmlFor="">Where you want to move ?</label>
              <TextField
                variant="outlined"
                InputProps={{
                  style: {
                    height: '32px', // set the height of the input
                    border: '1px solid #ccc', // set the border
                    borderRadius: '4px', // set the border radius
                    padding: '4px 8px', // set the padding
                  },
                }}
              />
              <label htmlFor="">What items do you have ?

              </label>
              <TextField
                variant="outlined"
                InputProps={{
                  style: {
                    height: '32px', // set the height of the input
                    border: '1px solid #ccc', // set the border
                    borderRadius: '4px', // set the border radius
                    padding: '4px 8px', // set the padding
                  },
                }}
              />
            </div>
            {/* <div className="date">
              <label htmlFor="">Check-in  </label>
              <input type="date" />
            </div>
            <div className="time-picker-container">
              <input
                type="time"
                id="time"
                name="time"

              />
            </div> */}
            <div className="btns">
              <button className="btn1" onClick={handleSendClick}>Whats App</button>
              <button className="btn2" onClick={handleSendClickGmail}>Gmail</button>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}


const Section = styled.section`
.btns{
  margin-top:1rem;
}
.date{
  margin-bottom:1rem
}
background-color:white;
input {
  border: 1px solid red;
  border-radius: 10px;
}
// .btns{
//   display: flex;
//     justify-content: space-around;
// }
.title{
  margin-bottom:0.6rem;
}
.btn1{
 flex:1;
 margin-right:5px;
 padding-left: 3.5rem;
 padding-right: 3.5rem;
 padding-top:1rem;
 padding-bottom:1rem;

 cursor: pointer;
 border-radius: 0.3rem;
 border: none;
 color: white;
 background-color: rgb(31, 207, 31);;
 font-size: 1.1rem;
 transition: 0.3s ease-in-out;
 &:hover {
   background-color: #023e8a;}
}
.formContainer{
  margin-top:6rem;
}
.search > * {
  display: block;
}
.btn2{
  flex:1;
 margin-left:5px;
 padding-left: 3.5rem;
 padding-right: 3.5rem;
 padding-top:1rem;
 padding-bottom:1rem;

 cursor: pointer;
 border-radius: 0.3rem;
 border: none;
 color: white;
 background-color: #4361ee;
 font-size: 1.1rem;
 transition: 0.3s ease-in-out;
 &:hover {
   background-color: #023e8a;}

}
  position: relative;
  width: 100%;
  .navW{
    position: absolute;
    top: 10px;
    width:100%;
    margin-bottom:3rem;

  }
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      height:90vh;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: rgb(61, 54, 54);;
          }
          &:focus {
            outline: none;
          }
        }
      }

      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
   margin-bottom:10vh;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
        height:90vh;
      }
    }
    
    .content {
      .title {
        margin-top:7rem;
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 0.8rem;
        }
        /* display: none; */
      }
    }
  }
`;