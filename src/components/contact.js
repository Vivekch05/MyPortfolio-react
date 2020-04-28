import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';
export default class Contact extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();

    }
    render() {
        return (
            <Grid>
                <Cell className="contact-right-grid" col={6}>
                    <h4>Let's have a <span style={{color:'red'}}>chat</span> sometime</h4>
                    <hr />
                    <div className="contact-form-head">
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <label><b>Name:</b>
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></label>
                            <label><b>Email:</b>
                                <input name="email" value={this.state.email} onChange={this.handleChange} /></label>
                            <label><b>Message:</b>
                                <textarea type="text" name="message" value={this.state.message} onChange={this.handleChange} /></label>
                            <span><input type="reset" value="Clear" />
                                <input type="submit" value="Send Message" /></span>
                        </form>
                    </div>
                </Cell>
                <Cell className="contact-right-grid" col={6}>
                    <h4>Let's <span style={{ color: 'red' }}>Connect</span></h4>
                    <hr />
                    <List className="contact-list-group">
                        <ListItem className="contact-list-item">
                            <i class="fa fa-envelope fa-fw" style={{ background: 'green' }}></i>
                            <a href="https://mail.google.com/" style={{ background: 'green' }} target="_blank" rel="noopener noreferrer">vivek.kch05@gmail.com</a>
                        </ListItem>

                        <ListItem className="contact-list-item">
                            <i class="fa fa-facebook fa-fw" style={{ background: 'blue' }}></i>
                            <a href="http://www.facebook.com/vivekkch" style={{ background: 'blue' }} target="_blank" rel="noopener noreferrer">facebook.com/vivekkch</a>
                        </ListItem>

                        <ListItem className="contact-list-item">
                            <i class="fa fa-linkedin fa-fw" style={{ background: '#0e76a8' }}></i>
                            <a href="https://www.linkedin.com/in/vivekch123/" style={{ background: '#0e76a8' }} target="_blank" rel="noopener noreferrer">linkedin.com/in/vivekch123/</a>
                        </ListItem>

                        <ListItem className="contact-list-item">
                            <i class="fa fa-github fa-fw" style={{ background: 'grey' }}></i>
                            <a href="http://github.com/Vivekch05" style={{ background: 'grey' }} target="_blank" rel="noopener noreferrer">github.com/Vivekch05/</a>
                        </ListItem>

                        <ListItem className="contact-list-item">
                            <i class="fa fa-instagram fa-fw" style={{ background: 'red' }}></i>
                            <a href="http://www.instagram.com/vivek.kch05" style={{ background: 'red' }} target="_blank" rel="noopener noreferrer">instagram.com/vivek.kch05/</a>
                        </ListItem>
                    </List>
                </Cell>
            </Grid>
        )
    }
}
