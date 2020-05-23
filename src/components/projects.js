import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import reactPic from "../images/react.png"
import javaPic from "../images/Java.png"
import htmlPic from "../images/html.jpg"
import reactnativePic from "../images/react-native.png"

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
                    <Card  style={{boxShadow:"5px 5px lightblue",  height: '450px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                        <CardTitle style={{
                            fontWeight: "bold", color: "black", height: "200px", background:
                                `url(${reactPic}) center/cover`
                        }}>
                            React Project #1</CardTitle>
                        <CardText align="justify" className="card-text" border><span style={{ color: "black", fontSize: "15px",fontWeight:"bold" }}><u>Book Store –React Redux-Application</u></span>--
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
                    <Card  style={{boxShadow:"5px 5px lightblue",  height: '450px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                        <CardTitle style={{
                            fontWeight: "bold", color: "black", height: "200px", background:
                            `url(${reactPic}) center/cover`
                        }}>
                            React Project #2</CardTitle>
                        <CardText align="justify" className="card-text" border><span style={{ color: "black", fontSize: "15px",fontWeight:"bold"}}><u>MyPortfolio react</u></span>--
                                This is totaly based on react,html,css, and java script.in this project
                                i had design about me section,project section,contact section and i also design the resume through code.
                                in this project i designed one chat form .and add somer social media account through you can connect me directly.</CardText>
                        <CardActions border>
                                <div className="card-button">
                                    <a href="https://github.com/Vivekch05/MyPortfolio-react" rel="noopener noreferrer" target="_blank">
                                        <Button>GitHub</Button>
                                    </a>
                                    <a href="http://www.vivekch.com/" rel="noopener noreferrer" target="_blank">
                                        <Button>Live Demo</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <CardMenu style={{ color: "red" }}>
                                <IconButton name="share" />
                            </CardMenu>
                    </Card>

                        {/*Project 3 */}
                        <Card align="justify" style={{boxShadow:"5px 5px lightblue",  height: '450px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                            <CardTitle style={{
                                fontWeight: "bold", color: "black", height: "200px", background:
                                `url(${reactPic}) center/cover`
                            }}>
                                React Project #3</CardTitle>
                            <CardText className="card-text" border>
                            <span style={{ color: "black", fontSize: "15px",fontWeight:"bold" }}><u>Movie-series-info</u></span>--
                                This project works for movie, series info.when we search any movie and series then
                                 it gives the information about all movies and series related to search .when we click on details button then it shows all 
                                 details about movie story and its imdb ratings and all.
                                 It is totaly based on react js,redux,html,css,javascript.and integrated with external movies data Api <a href="http://www.omdbapi.com/"rel="noopener noreferrer" target="_blank">Omdbi &nbsp;</a> </CardText>
                            <CardActions border>
                                <div className="card-button">
                                    <a href="https://github.com/Vivekch05/movie-series-info" rel="noopener noreferrer" target="_blank">
                                        <Button>GitHub</Button>
                                    </a>
                                    <a href="https://vivekch05.github.io/movie-series-info/#/" rel="noopener noreferrer" target="_blank">
                                        <Button>Live Demo</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <CardMenu style={{ color: "red" }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card  style={{boxShadow:"5px 5px lightblue",  height: '450px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                            <CardTitle style={{
                                fontWeight: "bold", color: "black", height: "200px", background:
                                `url(${reactPic}) center/cover`
                            }}>
                                React Project #4</CardTitle>
                            <CardText align="justify" className="card-text" border>
                            <span style={{ color: "black", fontSize: "15px",fontWeight:"bold" }}><u>Tetris Game</u></span>--
                                This is a gaming project.in this project i used react js,hooks,styled components and some gaming concepts.
                                you can play this game using keypad using all four arrow key ,you can rotate the player using upper arrow key .
                                in the side panel your score will be visible and level also.there is four level in this game.
                                when yoou complete you rows then it will counted and it will be visible also in side panel.   </CardText>
                            <CardActions border>
                                <div className="card-button">
                                    <a href="https://github.com/Vivekch05/Tetris-Game" rel="noopener noreferrer" target="_blank">
                                        <Button>GitHub</Button>
                                    </a>
                                    <a href="https://vivekch05.github.io/Tetris-Game/" rel="noopener noreferrer" target="_blank">
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
                        <Card  style={{boxShadow:"5px 5px lightblue",  height: '400px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                            <CardTitle style={{
                                fontWeight: "bold", color: "black", height: "200px", background:
                                `url(${reactnativePic}) center/cover`
                            }}>
                                ReactNative Project 1</CardTitle>
                                <CardText align="justify" className="card-text" border>
                            <span style={{ color: "black", fontSize: "15px",fontWeight:"bold" }}><u>News-App</u></span>--
                                  This is a news app project.there are three sections in this project General,Business,Technology.
                                  each section contains section related news.it is based on react-native.it is plateform independent we can 
                                  used it  in ios or android both.it is light weight app.i used <a href="https://newsapi.org/"rel="noopener noreferrer" target="_blank">NewsApi &nbsp;</a>api key.</CardText>
                            <CardActions border>
                                <div className="card-button">
                                    <a href="https://github.com/Vivekch05/News-App" rel="noopener noreferrer" target="_blank">
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
                        <Card  style={{boxShadow:"5px 5px lightblue",  height: '400px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                            <CardTitle style={{
                                fontWeight: "bold", color: "black", height: "200px", background:
                                `url(${javaPic}) center/cover`
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
                        <Card  style={{boxShadow:"5px 5px lightblue",  height: '400px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                            <CardTitle style={{
                                fontWeight: "bold", color: "white", height: "200px", background:
                                `url(${htmlPic}) center/cover`
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
                            <Tab style={{ color: 'white' }}>React-Native</Tab>
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
