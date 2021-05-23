import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';
import {send} from 'emailjs-com'
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }
    initialState = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }
    
     handleSubmit = (e) => {
        e.preventDefault();
        let templateParams = {
            name:this.state.name,
            from_name: this.state.email,
            to_name: 'vivek.ece18@gmail.com',
            subject: this.state.subject,
            message: this.state.message,
            reply_to:this.state.email
           }
        send(
            // 'gmail',
          'service_*****',
          'template_******',
        //   this.initialState,
        templateParams,
          'user_*******'
        )
          .then((response) => {
            alert('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            alert('FAILED...', err);
          });
      };
    handleReset = () => {
        this.setState(() => this.initialState);
        console.log(this.initialState);

    }
    render() {
        return (
            <Grid className="contact-grid">
                <Cell className="contact-form" col={6}>
                    <h4>Let's have a <span style={{ color: 'red', }}>chat</span> sometime</h4>
                    <hr />
                    <form onSubmit={this.handleSubmit} onReset={this.handleReset} style={{ marginTop: "20px" }}>
                    <div className="txtb">
                            <label>Subject:</label>
                            <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} />
                        </div>
                        <div className="txtb">
                            <label>Name:</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>

                        <div className="txtb">
                            <label>Email:</label>
                            <input name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="txtb">
                            <label>Message:</label>
                            <textarea type="text" name="message" value={this.state.message} onChange={this.handleChange} />
                        </div>

                        <div className="btn">
                            <input type="reset" value="Clear" />
                            <input type="submit" value="Send" /></div>
                    </form>
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
