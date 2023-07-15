import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";

export default function Testimonials() {
  const [opinions, setOpinions] = useState([]);

  // function to fetch the list of objects from an API
  const fetchServices = async () => {
    try {
      const response = await fetch('https://jad-umzug.onrender.com/opinions/all');
      const data = await response.json();
      setOpinions(data['data']);
    } catch (error) {
      console.error(error);
    }
  };

  // call the fetchServices function when the component mounts
  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">

        {(opinions).map(opinion =>
          <div className="testimonial">

            <div className="info">
              {opinion.name}

            </div>
            <div className="details">

              {opinion.content}

            </div>

          </div>)}

      </div>
      <div className="formDiv">
        <TextField variant="outlined" label="Name" InputProps={{
          style: {
            height: '3rem', // set the height of the input
            borderRadius: '4px', // set the border radius
            padding: '4px 8px', // set the padding
          },
        }} />
        <h2 className="con">     a  </h2>
        <TextField variant="outlined" label="Review" InputProps={{
          style: {
            height: '3rem', // set the height of the input
            borderRadius: '4px', // set the border radius
            padding: '4px 8px', // set the padding
          },
        }} />
        <h2 className="con">     a  </h2>

        <button className="btn2" >Submit</button>

      </div>

    </Section>
  );
}

const Section = styled.section`
.btn2{
  flex:1;
 margin-left:5px;
 padding-left: 2.5rem;
 padding-right: 2.5rem;
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
.con{
  color:white
}
.formDiv{
  margin-top:1rem;
  text-align:center;
}
.opinionsReview{
  text-align:center;
}
.details{
  text-align:center;color:white;
}
.info{
  text-align:center;color:white;
}
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 1rem;
    gap: 1rem;
    .testimonial {
      text-align:center;
      background-color:#2656c7;
      height:5rem;
      padding-left;2rem;
      padding-right:2rem;



      border-radius:8px;
      margin-left:1rem;
margin-right:1rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          text-align:center;
        }
      }
    }
  }
`;