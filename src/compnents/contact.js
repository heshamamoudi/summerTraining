import React, { Component } from 'react';
import { Grid, Cell,List,ListItem,ListItemContent } from 'react-mdl';

class Contact extends Component {
    
    render() { 
        return ( 
<div className="contactb">
<Grid className="contactG">
<Cell className="firstHalf" col={6}>
    <h2>Hesham Amoudi</h2>
    <img 
    src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
    alt="Avatar"
    style={{height:'250px'}}
    
    />
    <p style={{width: '75%',margin: 'auto',paddingTop:'1em'}}>
    Highly motivated person especially when it comes to technological  work
    and helping people. A quick learner with communication, organization,   
    and computer skills, and always looking for new and innovative ways toimprove
    my self. A team player with a primary target set to detect areas of improvements
                    and optimization.  
    </p>
    </Cell>
<Cell className="2ndHalf" style = {{paddingRight: '10rem'}}col={6}>
    <h2>Contact me</h2>
    <hr/>
    <div className="list" style={{color:'black'}}>
    <List  style={{paddingLeft: '10rem'}}>
  <ListItem c>
    <ListItemContent icon="person" style={{fontSize:"22px" ,margin:'auto'}}>Hesham amoudi</ListItemContent>
 
  </ListItem>
  <ListItem>
    <ListItemContent icon="Number"style={{fontSize:"22px",margin:'auto'}}>+966597477814</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent icon="Email"style={{fontSize:"22px",margin:'auto'}}>Hamoudi@stu.kau.edu.sa</ListItemContent>
  </ListItem>
</List>
</div>

    </Cell>
</Grid>
</div>
         );
    }
}
 
export default Contact;