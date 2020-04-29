import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid className="resume-grid">
                    <Cell className="resume-left-col" col={4}>
                        <div style={{ textAlign: 'center' }}>
                        <img
                        src="https://lh3.googleusercontent.com/n5tt8DkgthjgBJIuNrIkxHI_ehj8ZvaDwWLV_LcA1a4ykyTWS_7SPDP4vamuID4mXyhTL66qKtQYxaLwdvfQPS331NCiWg84MQjSrpQUm9Ee67xnJpzBglW2-xH6drkvrDEWSYM-gRbzPvd8kjSm-UhM5XtZVYvX8J_Et3XbRzBZw4jzd-pW9pe6odt65tNEUqRs8Ik-olEXs3dxG6JoIAytgRGOPIeFz3d0pXWJlSfSMAcTdtHbwhfMC4WfJB5xlqpMXSNsFPnRay3L5hip0OMY3dDnoQYJxUqWp3-3p18ayPOvLusp0hR9FdrndSgKA6IEb-mQX7a79viOG4BFihzOpp0EiTru125HY-GGwpbyiw1ObBBJ-jdqANe35iFbpc3CGSHygjPe79f-NSM3SIjQOu3VJU21wgI0ipnBYhU7gWhOdcWWD83nWHwGsso9fbDjcGOysZDMFCEWXDLsNbNpLvnyDXgjF9ArDUuXAUBeATvIPTgDWWCAGLXXFSBVTxrLhSpwSjBmoJzy-R1rssJmrLBlPERYwOsyXwYfJ1SMNkhnCJpN4ySRpXroupB5n9faXMjSEJo2lowCrbY2JtBVS9Pvvmk5yHT50xEjoPXWQraG_a_OlMBlHrPCiA0nhnEVFQAM5ue9WRdvBlMXU0XyB2GH2c5MYc-iMUgII5s2YBe8tyXdO1WiwgisL_I=s943-no"
                        alt="avatar"
                        style={{ height: "auto",width:"20%",borderRadius:'100%',border:'1px solid white',minWidth:"250px",margin:"auto" }}
                    />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Vivek Chaurasia</h2>
                        <h4 style={{ color: 'grey' }}>Software Engineer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '70%',minWidth:"200px" }} />
                        <p align="justify"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply 
                        dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>J-120,Sector-41,Noida-201306,India</p>
                        <h5>Phone</h5>
                        <p>+91-7062424346</p>
                        <h5>Email</h5>
                        <p>vivek.kch05@gmail.com</p>
                        <h5>Skype</h5>
                        <p>MySkype id</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
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
                            descreption="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy 
                            text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"


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
