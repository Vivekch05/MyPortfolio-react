import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import profile from '../images/vivek.jpg'
export default class AboutMe extends Component {
    render() {
        return (
            <Grid className="aboutme-grid" >
                <Cell col={4}>
                    <div className="aboutme-right-grid">
                    <h2>Vivek <span style={{ color: 'red' }}>&nbsp;Chaurasia</span></h2>
                    <hr/>
                    </div>
                    <img
                        src={profile}
                        alt="avatar"
                        style={{
                            width: "80%",
                            height: "60%", margin: '50px 40px 80px 50px',
                            borderRadius: '10px', boxShadow: '5px 5px 5px grey', border: "1px solid white",minWidth:"240px"
                        }}
                    />
                </Cell>
                <Cell className="aboutme-left-grid" col={8}>
                    <h2>About <span style={{ color: 'red' }}>Me</span></h2>
                    <hr />
                    <p>I am a software engineer of GlobalLogic.It is a Digital Product Engineering Services company.
                    I am working here from more than 1 year as a react developer.
                    I completed my btech from 'Jaipur engineering college and research centre'. I completed my 12th standard from
                    'R.k.d College patna'.
                    I completed my scholling and 10th standard from my native place 'R.s.high school parasauni farm'.
                    I love learning new Things and Tools every day.
                    I loves programming and problem solving.
                    I am valuable team player with personable and dedicated nature.
                    My hobbies are traveling and cooking.
                    I am a fitnessfreak also i love exercise daily.
                    </p>
                    <div className="aboutme-left-grid-button">
                        <a href="https://doc-0k-0o-docs.googleusercontent.com/docs/securesc/i9t5s1bfr5vmrsa9h6sesheo0fj5a9n4/q0s06lv7p2rso87bmopu1icrodgegbvm/1588080825000/07376574442765908574/07376574442765908574/1MB0pivCebxWxgdnx2jFRSSpebY9AWvYR?e=download&authuser=1&nonce=jce52k4md614s&user=07376574442765908574&hash=n1rceeocah1d95uovn4tp9e0ma84cr9d"
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