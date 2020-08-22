import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';
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
    }
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
                <Cell className="contact-list-group" col={6}>
                    <List>
                        <h4>Let's <span style={{ color: "red" }} >Connect</span></h4>
                        <hr />
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
                            <i class="fa fa-github fa-fw" style={{ background: '#2C3539' }}></i>
                            <a href="http://github.com/Vivekch05" style={{ background: '#2C3539' }} target="_blank" rel="noopener noreferrer">github.com/Vivekch05/</a>
                        </ListItem>

                        <ListItem className="contact-list-item">
                            <i class="fa fa-instagram fa-fw" style={{ background: '#F6358A' }}></i>
                            <a href="http://www.instagram.com/vivek.kch05" style={{ background: '#F6358A' }} target="_blank" rel="noopener noreferrer">instagram.com/vivek.kch05/</a>
                        </ListItem>
                    </List>
                </Cell>
            </Grid>
        )
    }
}
