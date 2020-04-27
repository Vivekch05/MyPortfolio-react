import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Home extends Component {
    render() {
        return (
            <div style={{width: "100%", margin:"auto"}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                    <img 
                     src="https://lh3.googleusercontent.com/GYnkEMviCLKYWWGODhovJvRhBlYsD7iseSntQ4fMihd_72ViY5OpbD_5xlcjei7GgsetEfRFzvU1oFK8BekEriITXeGlQumR1IMpii9zr9M4YaIJe390U52f4CEGIQof5ThhL5VyIGH8coMkAMS5mAT76srHePWjdFry99cojpIoKkXZr1txSExWQE5XLIhjCIfXKdEXluTyq4i4THryJK1By7OhF2Kx8MKo6sQ3Zggatrvpcll2ZUChqjLEEsjpMzleEy5Tg32IRfOeuJMf3yl2Fpz5WyFQhSPBOtDTNFvQokEi_qVmOVa3vOkbo6sqTPc4rh2K0XKFY0BADpmcT4iB5iN4OBRb3hxg1_q72MrdZVlxn8cyg6RhEFdY8SZrVmvT1h5LMSuXwHm6htkDhYNtnhFeE4BH1Nb8AgOGsQ5_Pr4eDlGtwOGSU7VA2xuYZ55_GclUc37r6tFs9RVfIM4P6S-SOft89G_VecGkFaXir7XFrcLhSXLqHrYOUczKMq_bkgsJaHERXHzJC4G6qgTRxoNtfTw4oCHureahF7baUO8rRublMzvJztV7azb_A_3dK10w69W6tVru-sFFgymbYFEpteR0AUY5QoaEu9xs2_gCcKd-vw1GK_5LnG5XgOtSNJ420cg0blCbn7M4eWYs35rwFLHGpKkWBhy8uTWJfkNbdwNAgcHdQoZbpf8=s883-no"
                     alt="avater"
                     className="avater-img"
                     />
                     <div className="home-text1">
                         <p>Hey, I am Vivek chaurasia.</p>
                         <p>I love web designing and problem solving.I also love to learn new technology and tools. :)<span>|</span></p>
                     </div>
                     <div className="social-links">
                         {/* Linkedin*/}
                        <a href="https://www.linkedin.com/in/vivekch123/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>

                        {/* GitHub*/}
                        <a href="http://github.com/Vivekch05" rel="noopener noreferrer"  target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true"></i>
                        </a>

                        {/* Facebook*/}
                        <a href="http://www.facebook.com/vivekkch" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        </a>

                        {/* Instagram*/}
                        <a href="http://www.instagram.com/vivek.kch05" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                     </div>
                     </Cell>
                </Grid>
            </div>
        )
    }
}