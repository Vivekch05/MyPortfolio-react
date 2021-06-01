import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import profile from '../images/vivek1.jpg'
import resume from '../files/resume.pdf'
export default class AboutMe extends Component {
    render() {
        return (
            <Grid className="aboutme-grid" >
                <Cell style={{borderRight:"1px solid black",borderRadius:"20px"}} col={6}>

                    <img
                        src={profile}
                        alt="avatar"
                        style={{
                            margin: '30px',
                            marginTop:"105px",
                            border: '2px groove black',
                            maxWidth: '80%',
                            height: 'auto',
                            width: 'auto',
                        }}
                    />
                </Cell>
                <Cell className="aboutme-left-grid" col={6}>
                    <h2>About <span style={{ color: 'red' }}>Me</span></h2>
                    <hr />
                    <p>I am a software engineer.I have 2.5  years of experience.My primary skill is react js ,redux, javaScript and secondary skill is
                    java, springBoot. I have knowledge of graphql and apollo client also. I always love to learn new technology and tools.
                    I am valuable team player with personable and dedicated nature.
                    I am flexible and adaptable also.I loves programming and problem solving.
                    I completed my btech from 'Jaipur engineering college and research centre'. 
                    I completed my 12th standard from 'R.k.d College patna'.
                    I completed my scholling and 10th standard from my native place 'R.s.high school parasauni farm'.
                    I like traveling and cooking.
                    I am a fitnessfreak also ,i love exercise daily.
                    </p>
                    <div className="aboutme-left-grid-button">
                        <a href={resume}
                            rel="noopener noreferrer" target="_blank" download="vivek-resume"><button><i class="fa fa-download" style={{ color: 'white' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;Grab Resume </i></button></a>
                                <a href="tel:+917062424346" rel="noopener noreferrer" target="_blank" >
                            <button><i class="fa fa-phone" style={{ color: 'white' }}>&nbsp;&nbsp;&nbsp;&nbsp;Contact Me</i></button></a>

                    </div>
                </Cell>
            </Grid>





        )
    }
}