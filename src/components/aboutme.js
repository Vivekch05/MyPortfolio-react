import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import profile from '../images/vivek1.jpg'
export default class AboutMe extends Component {
    render() {
        return (
            <Grid className="aboutme-grid" >
                <Cell style={{background:'white'}}col={6}>

                    <img
                        src={profile}
                        alt="avatar"
                        style={{
                            margin:'30px',
                            border:'5px groove black',
                            maxWidth: '80%',
                            height: 'auto',
                            width: 'auto\9',
                        }}
                    />
                </Cell>
                <Cell className="aboutme-left-grid" col={6}>
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
                        <a href="https://drive.google.com/drive/u/1/folders/1kJsRCk0MkF055tqPVNpQin-3MwVMeqnp"
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