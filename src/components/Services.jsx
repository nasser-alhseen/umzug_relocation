import React from "react";
import styled from "styled-components";

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import { useState, useEffect } from "react";
const icons = [
  <LocalShippingOutlinedIcon style={{ fontSize: '3rem', color: 'white' }} />,
  <Inventory2OutlinedIcon style={{ fontSize: '3rem', color: 'white' }} />,

  <HandymanOutlinedIcon style={{ fontSize: '3rem', color: 'white' }} />,

  <CleaningServicesOutlinedIcon style={{ fontSize: '3rem', color: 'white' }} />,


];
export default function Services() {
  const [services, setServices] = useState([]);

  // function to fetch the list of objects from an API
  const fetchServices = async () => {
    try {
      const response = await fetch('https://jad-umzug.onrender.com/services/all');
      const data = await response.json();
      setServices(data['data']);
    } catch (error) {
      console.error(error);
    }
  };

  // call the fetchServices function when the component mounts
  useEffect(() => {
    fetchServices();
  }, []);


  return (
    <Section id="services">
        <div className="title">
        <h2></h2>
      </div>
      {(services).map((service, index) => {
        return (
          <div className="service" key={index}>
            <div className="icon">
              {icons[0]}
            </div>
            <p>{service.content}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
.title h2{
  margin-bottom:30px
}
  .title {
    text-align: center;
  }
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  p{
    color:white;
  }
  gap: 1rem;
  .service {
    display: flex;
    border-radius:8px;
margin-left:1rem;
margin-right:1rem;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: #2656c7;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    margin-top:6rem;

    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    margin-top:6rem;

    grid-template-columns: repeat(2, 1fr);
  }
`;