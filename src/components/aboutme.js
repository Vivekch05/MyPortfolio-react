import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import profile from '../images/vivek1.jpg'
import resume from '../files/resume.pdf'
export default class AboutMe extends Component {
    render() {
        return (
            <Grid>
                <Cell className="aboutme-grid" col={12}>
                    <img
                        src="https://lh3.googleusercontent.com/EYo5xN-ALewbKQMFAzNwx2AQpURzWlU4Ciw3UTHZhbiaceva7plNGcWTVOTpmuBz_USluJ6dstJhoAHyG1-A1YnEq5hWl7-k6fZINWbRgMD3zPefnRMNRyUOU4DUCqqu78PsqZ3xLqgdjgK87SlmmSAiEAzYrDVAXMuHWPC6ui6Rwl3pRZKk923pzp3O7nmID1X-se6Gj6P2QE5bxQKH2PJe3O1AcdU1ClHWIK7E6yXqV4G3Cbz-iUB2YBePszcTNyn8wSRlQtz8eeFBmF1Uom_4ZSyxhSNWBbpNJW97eGnA8rsCvgiiRMSlu4YzKGr7ug2ZgxvZ3Syj7cjH3wknZWi5Sf2Cn50a9xiL8hU5mAiesNHB7MsCwxEMG-npp6HvUD2qkQ1YogjuXh0P0VzXt5hThsRp0xVDf_xVpQd7k7naqJijPRbqIBmjrn4wwPxK15NZyvnDXyZiuoF9Nt_Qv_kVH_FZ2lWYtDidHzbTf5Y9T09BsZx8GBCsq4Dxgmd_OzIpnFDbutxKtW7nR8O0T-eRShBKVjZBI9NVtpkL0SZPg8FWGYCFRCF8nD8ftjXXaoVAgfvkMRaFsnfQVWA1YpOKur1rFyP4Ww3f8y7T-mpuGQuj3QCFfUnyKabO6_ZRixoCqRZOsT8IFFjHZY8SBynrmxi77funrY76oQ8cG9uN4OGRflkcVlF9h30eyt0=w707-h883-no"
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

                    </div>
                </Cell>
            </Grid>





        )
    }
}