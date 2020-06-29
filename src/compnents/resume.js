import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="background">
        <Grid>
          <Cell col={4} style={{background:'white',border:"2px solid black", margin:'auto'}}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
                alt="avatar"
                className="avatar"
                style={{marginTop:'-2rem', marginLeft:'-20rem'}}
              />
            </div>
            <h2 style={{ textAlign: "left" ,marginLeft:'0.5rem'}}>Hesham amoudi</h2>
            <h4 style={{ color: "grey", opacity: "0.8" ,marginLeft:'1rem'}}>information tech</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

            <p style={{ fontSize: '15px',marginLeft:'0.5rem'}}>
              To pursue a career in the information tech. field where
              team-work and patients service excellence is number one 
              priority,and where the environment is challenging and 
              would contribute to my daily knowledge also allows me 
              to contribute my information technology services .
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p style={{ fontSize: '15px',marginLeft:'0.5rem'}}>Adress: alsafa 2, jeddah<br/>
                Phone:0597477814<br/>
                E-mail: Hamoudi@stu.kau.edu.sa
            
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" ,marginTop:'16rem',marginBottom:'0'}} />
          </Cell>
          <Cell className="RsRight" col={8} style={{background:'black',border:"2px solid #833fb2",marginTop:'-0.01rem',marginBottom:'-0.01rem'}}>
            <h1 style={{fontSize: '20px',marginLeft:'0.5rem'}}>
                Education:
            </h1>
            <h2 style={{fontSize:'18px',marginLeft:'0.5rem',marginTop:'-2rem'}}>king abdulaziz university: currently involved.</h2>
            
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
