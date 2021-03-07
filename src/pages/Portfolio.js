import React from "react";
import Project from "./Projects.json";

class Portfolio extends React.Component {
    state ={
        Project 
    }
    render(){
        console.log(this.state.Project)
  return (<div className="d-flex justify-content container-fluid text-dark">
  {this.state.Project.map((proj,key) => (
                  <div className="card m-3 p-2" key={key}>
                    <img src={proj.screenshot} className="card-img-top" alt={proj.app} />
                    <div className="card-body">
                        {proj.description} {proj.app}
                            <h5 className="card-title">{proj.app}</h5>
                            <p className="card-text">
                            {proj.description}
                            </p>
                            <a href={proj.github} className="btn btn-primary">
                            Github
                            </a>
                            <a href={proj.live} className="btn btn-primary">
                            Live
                            </a>
                    </div>
                </div>
  ))}

  
  </div>  )}
}

export default Portfolio;
