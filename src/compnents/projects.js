import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardMenu,
  Button,
  IconButton,
  CardText,
  CardActions,
} from "react-mdl";

class Projects extends Component {
  state = {};

  // instead of duplicating code use Array
  projects = [
    {
      name: "React",
      description: "a website that shows your resume and projects",
      image:
        "https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png",
      url: "https://github.com/heshamamoudi/summerTraining",
    },
    {
      name: "swift ios",
      description: "Description",
      image: "https://miro.medium.com/max/730/1*ND2d6CvH-Cz0dp5I_tYalQ.png",
    },
    {
      name: "JavaScript ",
      description: "Description",
      image:
        "https://lh3.googleusercontent.com/proxy/Zn9NLiHKjckq-wsmx6fpMc6fcHZtVuGp2xhpmsVVuTcypFSSV5UJeZ1IikRVqb4hwWb2w-j3-_PzGQCSz_S3oAqdkEJ_IcRS1M7nJs3RPKleDWWW3m4UKFiE",
    },
  ];
  
  render() {
    return (
      <div className="cardDiv">
        {/*creat fun to return grid for all projects more : https://reactjs.org/docs/lists-and-keys.html*/}
        <ProjectList projects={this.projects} />
      </div>
    );
  }
}
// this function will list the projects(will order projects) and give them same css so there is no Repetition
function ProjectList(props) {
  const projects = props.projects;

  const projectItems = projects.map((project, i) => (
    
    <Cell col={2} key={i}>
      <Card shadow={0} style={{ marginLeft: "10px", width: "auto" }}>
        <CardTitle
          style={{
            color: "white",
            height: "176px",
            background: `url(${project.image}) center / cover`,
          }}
        >
          {project.name}
        </CardTitle>
        <CardText style={{ color: "black" }}>{project.description}</CardText>
        <CardActions border>
          <a href={project.url} target="_blank">
            <Button colored>Source Code</Button>
          </a>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" style={{ color: "black" }} />
        </CardMenu>
      </Card>
    </Cell>
  ));
  //will return the items listed and with order
  return (
    <Grid style={{ marginTop: "60px" }} noSpacing={false}>
      {projectItems}
    </Grid>
  );
}
//-------------------------------

export default Projects;
