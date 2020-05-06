import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'
import profile from "../images/vivek.jpg";

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid className="resume-grid">
                    <Cell className="resume-left-col" col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={profile}
                                alt="avatar"
                                style={{ height: "auto", width: "18%", borderRadius: '100%', border: '1px solid white', minWidth: "240px", margin: "auto" }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em', color: "white" }}>Vivek Chaurasia</h2>
                        <h4 style={{ color: 'lightgrey' }}>Software Engineer</h4>
                        <hr style={{ borderTop: '3px solid white', width: '70%', minWidth: "200px" }} />
                        <ul>
                            <li>Software Engineer with more than 1 Year of Experience.</li>
                            <li>Experience in UI Development.</li>
                            <li> Valuable Team Player with Personable and Dedicated Nature.</li>
                            <li>Love Learning New Things and Tools Every Day. If I don’t know something I will learn it</li>
                        </ul>
                        <hr style={{ borderTop: '3px solid white', width: '70%' }} />
                        <h5>Address</h5>
                        <p>J-120,Sector-41,Noida-201306,India</p>
                        <h5>Phone</h5>
                        <p>+91-7062424346</p>
                        <h5>Email</h5>
                        <p>vivek.kch05@gmail.com</p>
                        <h5>Skype</h5>
                        <p>MySkype id</p>
                        <hr style={{ borderTop: '3px solid white', width: '70%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            degree="B.Tech-ECE"
                            schoolName="JECRC-Jaipur"
                            marks="71.06%"
                            startYear={"2014-"}
                            endYear={2018}
                        />
                        <Education
                            degree="Standard 10th"
                            schoolName="R.S.H School-Bagaha"
                            marks="71.4%"
                            startYear={"2014"}
                            endYear={""}
                        />
                        <Education
                            degree="B.Tech-ECE"
                            schoolName="JECRC-Jaipur"
                            marks="73.2%"
                            startYear={"2011"}
                            endYear={" "}
                        />
                        <hr style={{ borderTop: '3px solid grey' }} />

                        <h2>Work Experience</h2>
                        <Experience
                            companyName="GlobalLogic"
                            designation="Software Engineer"
                            jobLocation="Noida, India"
                            startYear={"December 2018 –"}
                            endYear={"Present"}
                            descreption= {""}
                        />
                        <hr style={{ borderTop: '3px solid grey' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Java"
                            progress={80}
                        />
                        <Skills
                            skill="Data Structure"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={70}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={50}
                        />
                        <Skills
                            skill="Html/Css"
                            progress={80}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}
