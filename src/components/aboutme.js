import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
export default class AboutMe extends Component {
    render() {
        return (
            <Grid className="aboutme-grid" >
                <Cell style={{borderRight:'1px solid white'}}col={4}>
                    <img
                        src="https://lh3.googleusercontent.com/n5tt8DkgthjgBJIuNrIkxHI_ehj8ZvaDwWLV_LcA1a4ykyTWS_7SPDP4vamuID4mXyhTL66qKtQYxaLwdvfQPS331NCiWg84MQjSrpQUm9Ee67xnJpzBglW2-xH6drkvrDEWSYM-gRbzPvd8kjSm-UhM5XtZVYvX8J_Et3XbRzBZw4jzd-pW9pe6odt65tNEUqRs8Ik-olEXs3dxG6JoIAytgRGOPIeFz3d0pXWJlSfSMAcTdtHbwhfMC4WfJB5xlqpMXSNsFPnRay3L5hip0OMY3dDnoQYJxUqWp3-3p18ayPOvLusp0hR9FdrndSgKA6IEb-mQX7a79viOG4BFihzOpp0EiTru125HY-GGwpbyiw1ObBBJ-jdqANe35iFbpc3CGSHygjPe79f-NSM3SIjQOu3VJU21wgI0ipnBYhU7gWhOdcWWD83nWHwGsso9fbDjcGOysZDMFCEWXDLsNbNpLvnyDXgjF9ArDUuXAUBeATvIPTgDWWCAGLXXFSBVTxrLhSpwSjBmoJzy-R1rssJmrLBlPERYwOsyXwYfJ1SMNkhnCJpN4ySRpXroupB5n9faXMjSEJo2lowCrbY2JtBVS9Pvvmk5yHT50xEjoPXWQraG_a_OlMBlHrPCiA0nhnEVFQAM5ue9WRdvBlMXU0XyB2GH2c5MYc-iMUgII5s2YBe8tyXdO1WiwgisL_I=s943-no"
                        alt="avatar"
                        style={{
                            height: "450px", width: "380px", margin: '160px 70px 30px 50px',
                            borderRadius: '10px', boxShadow: '5px 5px white', border: "1px solid white" 
                        }}
                    />
                </Cell>
                <Cell className="aboutme-left-grid" col={8}>
                    <h2>Vivek <span style={{ color: 'red' }}>Chaurasia</span></h2>
                    <hr />
                    <p>I am a software engineer of GlobalLogic.It is a Digital Product Engineering Services company.
                    I am working here from more than 1 year as a react developer.
                    I completed my btech from 'Jaipur engineering college and research centre'. I completed my 12th standard from
                    'R.k.d College patna'.
                    I completed my scholling and 10th standard from my native place 'R.s.high school parasauni farm'.
                    I love learning new Things and Tools every day.
                    I loves programming and problem solving.
                    I am aValuable Team Player with Personable and Dedicated Nature.
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