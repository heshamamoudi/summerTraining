import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Contact extends Component {
  render() {
    return (
      <div className="contactb">
        <Grid className="contactG">
          {/* content of the first half of the contact page  */}
          <Cell className="firstHalf" col={6}>
            <h2>Hesham Amoudi</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
              alt="Avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Highly motivated person especially when it comes to technological
               work
              and helping people. A quick learner with communication, organization, 
              and computer skills, and always looking for new and innovative ways toimprove
              my self. A team player with a primary target set to detect areas of improvements
               and optimization.
            </p>
          </Cell>
          {/* --------------------------------------------------- */}
          <Cell className="2ndHalf" style={{ paddingRight: "10rem" }} col={6}>
            <h2>Contact me</h2>
            <hr />
            <div className="list" style={{ color: "black" }}>
              {/*------------ contact info ---------------- */}
              <List style={{ paddingLeft: "10rem" }}>
                <ListItem c>
                  <ListItemContent
                    icon="person"
                    style={{ fontSize: "22px", margin: "auto" }}
                  >
                    Hesham Amoudi
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    icon="Number"
                    style={{ fontSize: "22px", margin: "auto" }}
                  >
                    +966597477814
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    icon="Email"
                    style={{ fontSize: "22px", margin: "auto" }}
                  >
                    Hamoudi@stu.kau.edu.sa
                  </ListItemContent>
                </ListItem>
                {/* -------------------------------------------- */}
                {/* google maps starts from here */}
                <ListItem>
                  <ListItemContent>
                    <h1 className="location" style={{ fontSize: "15px" }}>
                      Location:
                    </h1>
                    <div className="map">
                      <Map
                        google={this.props.google}
                        zoom={14}
                        initialCenter={{ lat: "21.578712", lng: "39.201868" }}
                      >
                        <Marker
                          onClick={this.onMarkerClick}
                          name={"Current location"}
                        />


                      </Map>
                    </div>
                  </ListItemContent>
                </ListItem>
                {/* ends here  */}
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAHn2GQqp9-YChnDrIVf6v7-McoZqZPaAo",
})(Contact);
