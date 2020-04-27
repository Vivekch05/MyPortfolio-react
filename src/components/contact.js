import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
export default class Contact extends Component {
    render() {
        return (
            <Grid>
                <Cell className="contact-left-grid" col={6}>
                    <h2>Vivek Chaurasia</h2>
                    <img
                        src="https://lh3.googleusercontent.com/GYnkEMviCLKYWWGODhovJvRhBlYsD7iseSntQ4fMihd_72ViY5OpbD_5xlcjei7GgsetEfRFzvU1oFK8BekEriITXeGlQumR1IMpii9zr9M4YaIJe390U52f4CEGIQof5ThhL5VyIGH8coMkAMS5mAT76srHePWjdFry99cojpIoKkXZr1txSExWQE5XLIhjCIfXKdEXluTyq4i4THryJK1By7OhF2Kx8MKo6sQ3Zggatrvpcll2ZUChqjLEEsjpMzleEy5Tg32IRfOeuJMf3yl2Fpz5WyFQhSPBOtDTNFvQokEi_qVmOVa3vOkbo6sqTPc4rh2K0XKFY0BADpmcT4iB5iN4OBRb3hxg1_q72MrdZVlxn8cyg6RhEFdY8SZrVmvT1h5LMSuXwHm6htkDhYNtnhFeE4BH1Nb8AgOGsQ5_Pr4eDlGtwOGSU7VA2xuYZ55_GclUc37r6tFs9RVfIM4P6S-SOft89G_VecGkFaXir7XFrcLhSXLqHrYOUczKMq_bkgsJaHERXHzJC4G6qgTRxoNtfTw4oCHureahF7baUO8rRublMzvJztV7azb_A_3dK10w69W6tVru-sFFgymbYFEpteR0AUY5QoaEu9xs2_gCcKd-vw1GK_5LnG5XgOtSNJ420cg0blCbn7M4eWYs35rwFLHGpKkWBhy8uTWJfkNbdwNAgcHdQoZbpf8=s883-no"
                        alt="avatar"
                        style={{ height: "300px",width:"300px",borderRadius:'100%',border:'1px solid black' }}
                     />
                    <p align="justify" style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                    I am a software engineer of GlobalLogic.It is a Digital Product Engineering Services company. 
                    I completed my btech from 'Jaipur engineering college and research centre'. 
                    I completed my 12th standard from 'R.k.d College patna'. 
                    I completed my scholling and 10th standard from my native place 'R.s.high school parasauni farm'.
                     I love learning new Things and Tools every day. I loves programming and problem solving. 
                     I am aValuable Team Player with Personable and Dedicated Nature. My hobbies are traveling and cooking.
                      I am a fitnessfreak also i love exercise daily.
                        </p>
                </Cell>
                <Cell className="contact-right-grid" col={6}>
                    <h2>Contact Me</h2>
                    <hr />
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{ fontSize: "25px", fontFamily: 'Anton' }}>
                                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                                    (+91)-7062424346</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: "25px", fontFamily: 'Anton' }}>
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    vivek.kch05@gmail.com</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: "25px", fontFamily: 'Anton' }}>
                                    <i class="fa fa-skype" aria-hidden="true"></i>
                                    MyskypeId</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: "25px", fontFamily: 'Anton' }}>
                                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                                    (+91)-7062424346</ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </Cell>
            </Grid>
        )
    }
}
