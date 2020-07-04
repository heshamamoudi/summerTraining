import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardAction,
  CardMenu,
  Button,
  IconButton,
  CardText,
  CardActions,
} from "react-mdl";
class Projects extends Component {
  state = {};
  render() {
    return (
      <div className>
        {/* where the problem starts */}
        <Grid className="cardDiv">
          <Cell row={12}>
            <div className="cards ">
              {/*-- card 1 --*/}
              <Card shadow={0} style={{ width: "512px", margin: "10px " }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
                  }}
                >
                  Welcome
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                  <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              {/* --------------- */}
              {/*-- Card 2 --*/}
              <Card shadow={0} style={{ width: "512px", marginRight: "35px " }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
                  }}
                >
                  Welcome
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                  <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              {/* ----------------- */}
            </div>
          </Cell>
        </Grid>
        {/* ends */}
      </div>
    );
  }
}

export default Projects;
