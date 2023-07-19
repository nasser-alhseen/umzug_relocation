import React from "react";
import styled from "styled-components";


export default function About() {



    return (
        <Section id="aboutus">
            <div className="title">
                <h2>About Us</h2>
              <div className="pDiv">
              <p clas>
                    ABC Company is a leading provider of innovative technology solutions for businesses across a variety of industries. With a focus on delivering exceptional service and reliable products, ABC Company has established itself as a trusted partner for many organizations. As the company continues to grow, it is now looking to relocate its headquarters to a larger facility that will better accommodate its expanding team and allow for even greater innovation and collaboration. The new location will provide ample space for state-of-the-art research and development, as well as modern amenities that will enhance the employee experience. With its continued commitment to excellence, ABC Company is well positioned for continued success in the years to come.
                </p>
              </div>
            </div>

        </Section>
    );
}

const Section = styled.section`
margin-bottom:1rem;
margin-top:0.4rem;
display:flex;
align-item:center;
align-content:center;
justify-content:center ;
justify-items:center ;

.title h2{
    text-align:center;
    font-weight: 400;
    font-size:2rem;
    
}
.pDiv{
    background-color:#2656c7 ;

   width:20rem;
    padding:1rem;
    border-radius: 1rem;
    

}
p{
    color:white;
}
/* Full HD media query */
@media only screen and (min-device-width: 1920px) and (max-device-width: 2560px) and (orientation: landscape) {
    .pDiv{
        background-color:#2656c7 ;
    
       width:40rem;
        padding:1rem;
        border-radius: 1rem;
        
    
    }
}

/* HD media query */
@media only screen and (min-device-width: 1280px) and (max-device-width: 1920px) and (orientation: landscape) {
    .pDiv{
        background-color:#2656c7 ;
    
       width:40rem;
        padding:1rem;
        border-radius: 1rem;
        
    
    }}
`;