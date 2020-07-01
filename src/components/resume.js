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
                                style={{ }}
                            />
                        </div>
                        <h2 style={{ color: "black" }}>Vivek Chaurasia</h2>
                        <u><h4 style={{ paddingBottom: '1em', color: 'gray', textAlign: 'center' }}>Software Engineer</h4></u>

                        <i class="fa fa-address-book fa-3x" style={{ color: 'darkorange' }}>&nbsp;&nbsp;Personal info</i>
                        <hr style={{ borderTop: '3px solid black', width: '100%' }} />
                        <p><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Place:&nbsp;&nbsp;</span><span>Bibi Bankatwa,West Champaran,Bihar-845101</span></p>
                        <p><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Date of birth:&nbsp;&nbsp;</span><span>25/03/1996</span></p>
                        <p><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Web:&nbsp;&nbsp;</span><span>www.vivekch.com</span></p>
                        <p><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Mobile number:&nbsp;&nbsp;</span><span>+91-7062424346,+91-9588078913</span></p>
                        <p><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Email:&nbsp;&nbsp;</span><span>vivek.kch05@gmail.com</span></p>

                        <i class="fa fa-user-circle fa-3x" style={{ color: 'darkorange' }}>&nbsp;&nbsp;Profile</i>
                        <hr style={{ borderTop: '3px solid black', width: '100%' }} />
                        <p align="justify"> Software Engineer with more than 1 Year of Experience.Experience in UI Development.
                        Valuable Team Player with Personable and Dedicated Nature.Love Learning New Things and Tools Every Day. If I don’t know something I will learn it</p>

                        <i class="fa fa-briefcase fa-3x" style={{ color: 'darkorange' }}>&nbsp;Work Experience</i>
                        <hr style={{ borderTop: '3px solid black', width: '100%' }} />
                        <Experience
                            companyName="GlobalLogic"
                            designation="Software Engineer"
                            jobLocation="Noida, India"
                            startYear={"Dec 2018 –"}
                            endYear={"Present"}
                            descreption={""}
                        />
                        <i class="fa fa-laptop fa-3x" style={{ color: 'darkorange' }}>&nbsp;&nbsp;Skills</i>
                        <hr style={{ borderTop: '3px solid black', width: '100%' }} />

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
                            skill="Redux"
                            progress={70}
                        />
                        <Skills
                            skill="React-Native"
                            progress={50}
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
                    <Cell className="resume-right-col" col={8}>
                        <i class="fa fa-tasks fa-3x" style={{ color: 'darkorange' }}>&nbsp;Projects</i>
                        <hr style={{ borderTop: '3px solid black', width: '100%' }} />
                        <h5 ><b>Self-Motivated-Projects:</b></h5>
                        <ul>
                            <li><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Book Store –React Redux-Application:-</span>
                                <ul><li>Book store application is a simple ecommerce type application. Where users can experience add item to cart,
                                remove item from cart, checkout, place order this type of functionality. Admin can modify the book which is available and which is not available.
                                 All the data comes from own created json server.</li>
                                    <li><span style={{ fontSize: '15px' }}>Language:-&nbsp;&nbsp;</span>React js,Redux,JavaScript,Html,Css</li>
                                    <li><span style={{ fontSize: '15px' }}>Git-Link:-&nbsp;&nbsp;</span>
                                        <a href="https://github.com/Vivekch05/Book-Store" rel="noopener noreferrer" target="_blank">https://github.com/Vivekch05/Book-Store</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul>
                            <li><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Portfolio application:- React js -Application:-</span>
                                <ul>
                                    <li>This is a portfolio project .in this portfolio there is four section. Each section contains different things.</li>
                                    <li><span style={{ fontSize: '15px' }}>Language:-&nbsp;&nbsp;</span>React js,JavaScript,Html,Css</li>
                                    <li><span style={{ fontSize: '15px' }}>Live-On:-&nbsp;&nbsp;</span>
                                        <a href="http://www.vivekch.com/" rel="noopener noreferrer" target="_blank">http://www.vivekch.com/</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul>
                            <li><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Movie-series-info:- React Redux Application:-</span>
                                <ul>
                                    <li>This project works for movie, series info. When we search any movie and series then it gives the
                                    information about all movies and series related to search and I integrated it with external movies
                                         data Api <a href="http://www.omdbapi.com/" rel="noopener noreferrer" target="_blank">Omdbi</a>.</li>
                                    <li><span style={{ fontSize: '15px' }}>Language:-&nbsp;&nbsp;</span>React Js, Redux Js,JavaScript, Html,Css.</li>
                                    <li><span style={{ fontSize: '15px' }}>Live-On:-&nbsp;&nbsp;</span>
                                        <a href="https://vivekch05.github.io/movie-series-info/#/" rel="noopener noreferrer" target="_blank">https://vivekch05.github.io/movie-series-info/#/</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Tetris Game:- React Hooks-Application:-</span>
                                <ul>
                                    <li>This is a gaming project.in this project You can play this game using keypad using all four
                                    arrow key, you can rotate the player using upper arrow key. In the side panel your score and
                                    level will be visible. When you complete you rows then it will counted and it will be visible
                                        also in side panel.</li>
                                    <li><span style={{ fontSize: '15px' }}>Language:-&nbsp;&nbsp;</span>React js, Hooks, Styled Components and some Gaming Concepts.</li>
                                    <li><span style={{ fontSize: '15px' }}>Live-On:-&nbsp;&nbsp;</span>
                                        <a href="https://vivekch05.github.io/Tetris-Game/" rel="noopener noreferrer" target="_blank">https://vivekch05.github.io/Tetris-Game/</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul>
                            <li><span style={{ fontSize: '15px', fontWeight: 'bold' }}>News-App:- React-Native-Application:-</span>
                                <ul>
                                    <li>This is a news app .In this app there are three section. General, Business and Technology each
                                        section contains section related news. I used <a href="https://newsapi.org/" rel="noopener noreferrer" target="_blank">https://newsapi.org/</a>&nbsp;api key for this application.</li>
                                    <li><span style={{ fontSize: '15px' }}>Language:-&nbsp;&nbsp;</span>React-Native.</li>
                                    <li><span style={{ fontSize: '15px' }}>Git-Link:-&nbsp;&nbsp;</span>
                                        <a href="https://github.com/Vivekch05/News-App" rel="noopener noreferrer" target="_blank">https://github.com/Vivekch05/News-App</a></li>
                                </ul>
                            </li>
                        </ul>

                        <h5 ><b>B.Tech-Projects:</b></h5>
                        <ul>
                            <li><span style={{ fontSize: '15px', fontWeight: 'bold' }}>IOT & Arduino Application:-</span>
                                <ul>
                                    <li>This application works for detecting the child.</li>
                                    <li>We use gps module in which we attached a sim which gives the location of the child.</li>
                                    <li>This module also send the location of child automatically to parent when child goes 500m from parents.</li>
                                </ul>
                            </li>
                        </ul>

                        <ul>
                            <li><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Quadcopter Drone –Arduino Application:-</span>
                                <ul>
                                    <li>In this project we design the frame and board of quadcopter.</li>
                                    <li>We use four brushless motor and four propellers.</li>
                                    <li>We use Turnigy six channel remote and lipo battery.</li>
                                </ul>
                            </li>
                        </ul>


                        <i class="fa fa-university fa-3x" style={{ color: 'darkorange' }}>&nbsp;Educations</i>
                        <hr style={{ borderTop: '3px solid black', width: '100%' }} />
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
                        <i class="fa fa-certificate fa-3x" style={{ color: 'darkorange' }}>&nbsp;Certifications</i>
                        <hr style={{ borderTop: '3px solid black', width: '100%' }} />
                        <Grid>
                            <Cell style={{ fontSize: '20px', fontWeight: 'bold' }} col={6}>Data Structure and Algorithm</Cell>
                            <Cell col={3}>Udemy</Cell>
                            <Cell col={3}>April-2020</Cell>
                        </Grid>
                        <Grid>
                            <Cell style={{ fontSize: '20px', fontWeight: 'bold' }} col={3}>Java</Cell>
                            <Cell col={3}>Abc Technology</Cell>
                            <Cell col={3}>Bangalore</Cell>
                            <Cell col={3}>December-2018</Cell>
                        </Grid>
                        <i class="fa fa-trophy fa-3x" style={{ color: 'darkorange' }}>&nbsp;Achievements</i>
                        <hr style={{ borderTop: '3px solid black', width: '100%' }} />
                        <ul>
                            <li>Promoted to Software Engineer on basis of performance in GlobalLogic in Jan 2020.</li>
                            <li>Runner up in Game of Drones Competition in inter college contest Renaissance 2018.</li>
                            <li>Winner in Drone Racing Competition in inter college contest Renaissance 2017.</li>
                        </ul>
                        <i class="fa fa-plus-square fa-3x" style={{ color: 'darkorange' }}>&nbsp;Strengths</i>
                        <hr style={{ borderTop: '3px solid black', width: '100%' }} />
                        <Grid>
                            <Cell style={{ border: '1px solid black', width: '200px', height: '50px', textAlign: 'center', paddingTop: '15px', margin: '15px' }} col={4}>TeamWorker</Cell>
                            <Cell style={{ border: '1px solid black', width: '200px', height: '50px', textAlign: 'center', paddingTop: '15px', margin: '15px' }} col={4}>Responsible</Cell>
                            <Cell style={{ border: '1px solid black', width: '200px', height: '50px', textAlign: 'center', paddingTop: '15px', margin: '15px' }} col={4}>Adaptable</Cell>
                        </Grid>
                        <Grid>
                            <Cell style={{ border: '1px solid black', width: '200px', height: '50px', textAlign: 'center', paddingTop: '15px', margin: '15px' }} col={4}>Dedicated</Cell>
                            <Cell style={{ border: '1px solid black', width: '200px', height: '50px', textAlign: 'center', paddingTop: '15px', margin: '15px' }} col={4}>Punctual</Cell>
                            <Cell style={{ border: '1px solid black', width: '200px', height: '50px', textAlign: 'center', paddingTop: '15px', margin: '15px' }} col={4}>Flexible</Cell>
                        </Grid>


                        <i class="fa fa-heart fa-3x" style={{ color: 'darkorange' }}>&nbsp;Hobbies</i>
                        <hr style={{ borderTop: '3px solid black', width: '100%' }} />
                        <i class="fa fa-plane fa-2x" style={{ color: 'black',margin:'40px' }}>&nbsp;&nbsp;Travelling</i>
                        <i class="fa fa-spoon fa-2x" style={{ color: 'black',margin:'40px' }}>&nbsp;&nbsp;Cooking</i>


                    </Cell>
                </Grid>
            </div>
        )
    }
}
