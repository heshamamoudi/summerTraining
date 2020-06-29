import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {

    render() { 
        return ( 
<div style={{width:'100%', margin: 'auto'}}>
    
<Grid className="landing">
<Cell col={12}>
<img 
src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
alt="avatar"
className="avatar"

/>
<div className="avatar-text">
    <h1>Software And Network Engineer</h1>

    <hr/>
    <p><br/>Java netBeans | JavaScript | CSS | Swift IOS </p>
</div>
</Cell>


</Grid>



</div>
         );
    }
}
 
export default Landing;