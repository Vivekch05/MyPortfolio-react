import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Home extends Component {
    render() {


        var TxtRotate = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtRotate.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 300 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        };

        window.onload = function () {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-rotate');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtRotate(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
            document.body.appendChild(css);
        };




        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                            src="https://lh3.googleusercontent.com/n5tt8DkgthjgBJIuNrIkxHI_ehj8ZvaDwWLV_LcA1a4ykyTWS_7SPDP4vamuID4mXyhTL66qKtQYxaLwdvfQPS331NCiWg84MQjSrpQUm9Ee67xnJpzBglW2-xH6drkvrDEWSYM-gRbzPvd8kjSm-UhM5XtZVYvX8J_Et3XbRzBZw4jzd-pW9pe6odt65tNEUqRs8Ik-olEXs3dxG6JoIAytgRGOPIeFz3d0pXWJlSfSMAcTdtHbwhfMC4WfJB5xlqpMXSNsFPnRay3L5hip0OMY3dDnoQYJxUqWp3-3p18ayPOvLusp0hR9FdrndSgKA6IEb-mQX7a79viOG4BFihzOpp0EiTru125HY-GGwpbyiw1ObBBJ-jdqANe35iFbpc3CGSHygjPe79f-NSM3SIjQOu3VJU21wgI0ipnBYhU7gWhOdcWWD83nWHwGsso9fbDjcGOysZDMFCEWXDLsNbNpLvnyDXgjF9ArDUuXAUBeATvIPTgDWWCAGLXXFSBVTxrLhSpwSjBmoJzy-R1rssJmrLBlPERYwOsyXwYfJ1SMNkhnCJpN4ySRpXroupB5n9faXMjSEJo2lowCrbY2JtBVS9Pvvmk5yHT50xEjoPXWQraG_a_OlMBlHrPCiA0nhnEVFQAM5ue9WRdvBlMXU0XyB2GH2c5MYc-iMUgII5s2YBe8tyXdO1WiwgisL_I=s943-no"
                            alt="avater"
                            className="avater-img"
                        />
                        {/* <div className="home-text1">
                         <p>Hello there! I'm <span style={{color:'red',fontSize:'30px',fontWeight:'bold'}}>'Vivek Chaurasia'.</span></p>
                         
                         <p>I love web designing and problem solving.I also love to learn new technology and tools. :)<label>|</label></p>
                     </div> */}
                        <div className="home-text1">
                            <p>Hello there!</p>
                            <p>i'm <span style={{ color: "blue",fontSize:"30px"}}>'Vivek Chaurasia'</span></p>
                            <p>i love&nbsp;
                            <span style={{ color: "orangered",fontSize:"30px" }}
                                    class="txt-rotate"
                                    data-period="2000"
                                    data-rotate='[ "web development", "coding", "technology", "traveling", "cooking" ]'></span>
                            </p>
                        </div>


                        <div className="social-links">
                            {/* Linkedin*/}
                            <a href="https://www.linkedin.com/in/vivekch123/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                            {/* GitHub*/}
                            <a href="http://github.com/Vivekch05" rel="noopener noreferrer" target="_blank">
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