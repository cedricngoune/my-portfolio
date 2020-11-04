import React from "react"
import { Stacks } from "./stacks"
import { Projects } from "./projects"
import wallpaper from "../../assets/images/wallpaper.jpg"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import "./main.scss"

const Main = () => {
    return (
        <section className="section">
            <div className="container-hero">
                <div className="container-fluid">
                    <div className="hero ">
                        <h1 className="title-hero">Projets & Compétences</h1>
                    </div>
                </div>
            </div>

            <div className="skills-hero">
                <h2>
                    <b>Mes</b> environnements de dev 🖥
                </h2>
                <div className="wrapper-skills">
                    <div className="content">
                        {Stacks.map((stack, index) => {
                            return (
                                <Grid
                                    key={index}
                                    container
                                    spacing={3}
                                    className="gridList"
                                >
                                    <Grid item xs className="grid-item">
                                        <Paper className={stack.class}>
                                            {stack.name}
                                        </Paper>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="wrapper-projects">
                <h2>
                    <b>Mes</b> projets 😎
                </h2>
                <div className="container-project">
                    {Projects.map((project) => {
                        return (
                            <div key={project.id} className="card-project">
                                <div className="card-title-project">
                                    <h3>{project.title}</h3>
                                </div>
                                <div className="card-content">
                                    <img
                                        className="img"
                                        alt="wait..."
                                        src={project.screen}
                                    />
                                    <p>{project.description} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Main
