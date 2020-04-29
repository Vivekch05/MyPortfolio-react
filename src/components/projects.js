import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategory() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/*Project 1 */}
                    <Card shaddow={10} style={{ height: '450px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                        <CardTitle style={{
                            fontWeight: "bold", color: "black", height: "200px", background:
                                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png) center/cover'
                        }}>
                            React Project #1</CardTitle>
                        <CardText align="justify" className="card-text" border><span style={{ color: "black", fontSize: "15px" }}><u>Book Store –React Redux-Application</u></span>--
it is a simple ecommerce type application. Where users can experience add item to cart, remove item from cart, checkout, place order this type of functionality.
Admin can modify the book which is available and which is not available.
All the data of this application is handle through own created json server.
                        </CardText>
                        <CardActions border>
                            <div className="card-button">
                                <a href="https://github.com/Vivekch05/Book-Store/tree/book-store" rel="noopener noreferrer" target="_blank">
                                    <Button>GitHub</Button>
                                </a>
                                <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                                    <Button>Live Demo</Button>
                                </a>
                            </div>
                        </CardActions>

                        <a href="mailto:?subject=book store application &body=just testing" rel="noopener noreferrer" target="_blank">
                            <CardMenu style={{ color: "red" }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </a>

                    </Card>

                    {/*Project 2 */}
                    <Card shaddow={10} style={{ height: '450px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                        <CardTitle style={{
                            fontWeight: "bold", color: "black", height: "200px", background:
                                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png) center/cover'
                        }}>
                            React Project #2</CardTitle>
                        <CardText align="justify" className="card-text" border><span style={{ color: "black", fontSize: "15px" }}><u>MyPortfolio react</u></span>--
                                This is totaly based on react,html,css, and java script.in this project
                                i had design about me section,project section,contact section and i also design the resume through code.
                                in this project i designed one chat form .and add somer social media account through you can connect me directly.</CardText>
                        <CardActions border>
                                <div className="card-button">
                                    <a href="https://github.com/Vivekch05/MyPortfolio-react" rel="noopener noreferrer" target="_blank">
                                        <Button>GitHub</Button>
                                    </a>
                                    <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                                        <Button>Live Demo</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <CardMenu style={{ color: "red" }}>
                                <IconButton name="share" />
                            </CardMenu>
                    </Card>

                        {/*Project 3 */}
                        <Card shaddow={10} style={{ height: '450px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                            <CardTitle style={{
                                fontWeight: "bold", color: "black", height: "200px", background:
                                    'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png) center/cover'
                            }}>
                                React Project #3</CardTitle>
                            <CardText className="card-text" border>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book.industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book.
                        </CardText>
                            <CardActions border>
                                <div className="card-button">
                                    <a href="http://github.com/Vivekch05" rel="noopener noreferrer" target="_blank">
                                        <Button>GitHub</Button>
                                    </a>
                                    <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                                        <Button>Live Demo</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <CardMenu style={{ color: "red" }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                    <div className="projects-grid">
                        {/*Project 1 */}
                        <Card shaddow={10} style={{ height: '400px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                            <CardTitle style={{
                                fontWeight: "bold", color: "black", height: "200px", background:
                                    'url(https://vectorified.com/images/angular-material-icon-set-18.png) center/cover'
                            }}>
                                Angular Project #1</CardTitle>
                            <CardText className="card-text" border>
                                Coming Soon................................................
                    </CardText>
                            <CardActions border>
                                <div className="card-button">
                                    <a href="http://github.com/Vivekch05" rel="noopener noreferrer" target="_blank">
                                        <Button>GitHub</Button>
                                    </a>
                                    <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                                        <Button>Live Demo</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <CardMenu style={{ color: "white" }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                    <div className="projects-grid">
                        {/*Project 1 */}
                        <Card shaddow={10} style={{ height: '400px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                            <CardTitle style={{
                                fontWeight: "bold", color: "black", height: "200px", background:
                                    'url(https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/Java.png) center/cover'
                            }}>
                                Java Project #1</CardTitle>
                            <CardText className="card-text" border>
                                Coming Soon................................................
                    </CardText>
                            <CardActions border>
                                <div className="card-button">
                                    <a href="http://github.com/Vivekch05" rel="noopener noreferrer" target="_blank">
                                        <Button>GitHub</Button>
                                    </a>
                                    <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                                        <Button>Live Demo</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <CardMenu style={{ color: "white" }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                    <div className="projects-grid">
                        {/*Project 1 */}
                        <Card shaddow={10} style={{ height: '400px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                            <CardTitle style={{
                                fontWeight: "bold", color: "black", height: "200px", background:
                                    'url(https://beehosting.pro/wp-content/uploads/2019/02/html-i-css..jpg) center/cover'
                            }}>
                                Html/Css Project #1</CardTitle>
                            <CardText className="card-text" border>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book.
                        </CardText>
                            <CardActions border>
                                <div className="card-button">
                                    <a href="http://github.com/Vivekch05" rel="noopener noreferrer" target="_blank">
                                        <Button>GitHub</Button>
                                    </a>
                                    <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                                        <Button>Live Demo</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <CardMenu style={{ color: "white" }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
            )
        }

    }
    render() {
        return (
                    <div className="category-tabs">
                        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                            <Tab style={{ color: 'white' }}>React</Tab>
                            <Tab style={{ color: 'white' }}>Angular</Tab>
                            <Tab style={{ color: 'white' }}>Java</Tab>
                            <Tab style={{ color: 'white' }}>Html/Css</Tab>
                        </Tabs>

                        <Grid>
                            <Cell col={12}>
                                <div className="content"> {this.toggleCategory()}
                                </div>
                            </Cell>
                        </Grid>
                    </div>
        )
    }
}
