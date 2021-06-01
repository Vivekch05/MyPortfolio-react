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
                <Grid>
                    {/* Project 1 */}
                    <Cell col={4} style={{ display: "flex", flexWrap: "wrap" }}>
                        <Card style={{ border: "2px solid darkorange", borderRadius: "20px", margin: 'auto', marginTop: "30px" }}>
                            <CardTitle style={{ color: 'black', height: '250px', background: `url(${reactPic}) center / cover` }}>React Project #1</CardTitle>
                            <CardText style={{ height: "160px" }} align="justify" className="card-text" border><span style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}><u>Click-Media</u></span>--
                            This project is basically a social media type project. In this project, the first page is a landing page
                            that shows profile pic and name of everybody who uses this platform. When we click on any of
                            the then it opens a profile page in which all information will show about them including address
                            on the map. On this page, the chat section is also there who shows how many people are active
                            how many people are no active. You can open chat box on click on any of it. On top of it, profile
                            pic was showing, when you click on it then it will show a panel in which it displays profile pic in
                            bigger size and how many people login into it till now. When you click any of them then that will
                            logging and will show the data regarding its. After that post section and gallery section is also
                            there. After that post section and gallery section is also there which is on To-do phase.
                            </CardText>
                            <CardActions border>
                                <div className="card-button">
                                    <a href="https://github.com/Vivekch05/click-media" rel="noopener noreferrer" target="_blank">
                                        <Button>GitHub</Button>
                                    </a>
                                    <a href="https://vivekch05.github.io/click-media/#/" rel="noopener noreferrer" target="_blank">
                                        <Button>Live Demo</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <a href="mailto:?subject=book store application &body=https://vivekch05.github.io/click-media/#/" rel="noopener noreferrer" target="_blank">
                                <CardMenu style={{ color: "red" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </a>
                        </Card>
                    </Cell>

                    {/* Project 2 */}
                    <Cell col={4} style={{ display: "flex", flexWrap: "wrap" }}>
                        <Card style={{ border: "2px solid darkorange", borderRadius: "20px", margin: 'auto', marginTop: "30px" }}>
                            <CardTitle style={{ color: 'black', height: '250px', background: `url(${reactPic}) center / cover` }}>React Project #2</CardTitle>
                            <CardText style={{ height: "160px" }} align="justify" className="card-text" border><span style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}><u>E-Book Reader</u></span>--
                            This project is basically for reading books online. In this project, the user can experience seeing the
                             all book list. Each book has the option to add to cart. When the user adds it into the cart then users are
                             able to view and read this book. Users can delete a book from the cart also. I created JSON Server for this project
                             through this I am displaying all data in the All Book Section.

                            </CardText>
                            <CardActions border>
                                <div className="card-button">
                                    <a href="https://github.com/Vivekch05/e-book-reader" rel="noopener noreferrer" target="_blank">
                                        <Button>GitHub</Button>
                                    </a>
                                    <a href="https://vivekch05.github.io/e-book-reader/#/" rel="noopener noreferrer" target="_blank">
                                        <Button>Live Demo</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <a href="mailto:?subject=book store application &body=https://vivekch05.github.io/e-book-reader/#/" rel="noopener noreferrer" target="_blank">
                                <CardMenu style={{ color: "red" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </a>
                        </Card>
                    </Cell>
                    {/* Project 3 */}
                    <Cell col={4} style={{ display: "flex", flexWrap: "wrap" }}>

                        <Card style={{ border: "2px solid darkorange", borderRadius: "20px", margin: 'auto', marginTop: "30px" }}>
                            <CardTitle style={{ color: 'black', height: '250px', background: `url(${reactPic}) center / cover` }}>React Project #3</CardTitle>
                            <CardText style={{ height: "160px" }} align="justify" className="card-text" border><span style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}><u>MyPortfolio react</u></span>--
                                This is totaly based on react,html,css, and java script.in this project
                                i had design about me section,project section,contact section and i also design the resume through code.
                                in this project i designed one chat form .and add somer social media account through you can connect me directly.

                                        </CardText>
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
                            <a href="mailto:?subject=book store application &body=http://www.vivekch.com/" rel="noopener noreferrer" target="_blank">
                                <CardMenu style={{ color: "red" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </a>
                        </Card>
                    </Cell>

                    {/*Project 4 */}
                    <Cell col={4} style={{ display: "flex", flexWrap: "wrap" }}>
                        <Card style={{ border: "2px solid darkorange", borderRadius: "20px", margin: 'auto', marginTop: "30px" }}>
                            <CardTitle style={{ color: 'black', height: '250px', background: `url(${reactPic}) center / cover` }}>
                                React Project #4</CardTitle>
                            <CardText style={{ height: "160px" }} align="justify" className="card-text" border><span style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}><u>Movie-series-info</u></span>--
                                 This project works for movie, series info.when we search any movie and series then
                                 it gives the information about all movies and series related to search .when we click on details button then it shows all
                                 details about movie story and its imdb ratings and all.
                                 It is totaly based on react js,redux,html,css,javascript.and integrated with external movies data Api <a href="http://www.omdbapi.com/" rel="noopener noreferrer" target="_blank">Omdbi &nbsp;</a> </CardText>
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
                            <a href="mailto:?subject=book store application &body=https://vivekch05.github.io/movie-series-info/#/" rel="noopener noreferrer" target="_blank">
                                <CardMenu style={{ color: "red" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </a>
                        </Card>
                    </Cell>

                    {/*Project 5 */}
                    <Cell col={4} style={{ display: "flex", flexWrap: "wrap" }}>
                        <Card style={{ border: "2px solid darkorange", borderRadius: "20px", margin: 'auto', marginTop: "30px" }}>
                            <CardTitle style={{ color: 'black', height: '250px', background: `url(${reactPic}) center / cover` }}>
                                React Project #5</CardTitle>
                            <CardText style={{ height: "160px" }} align="justify" className="card-text" border><span style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}><u>Book Store –React Redux-Application</u></span>--
                            it is a simple ecommerce type application. Where users can experience add item to cart, remove item from cart, checkout, place order this type of functionality.
                            Admin can modify the book which is available and which is not available.
                            All the data of this application is handle through own created json server.
                        </CardText>
                            <CardActions border>
                                <div className="card-button">
                                    <a href="https://github.com/Vivekch05/Book-Store/tree/book-store" rel="noopener noreferrer" target="_blank">
                                        <Button>GitHub</Button>
                                    </a>
                                    <a href="https://Vivekch05.github.io/Book-Store" rel="noopener noreferrer" target="_blank">
                                        <Button>Live Demo</Button>
                                    </a>
                                </div>
                            </CardActions>
                            <a href="mailto:?subject=book store application &body=https://github.com/Vivekch05/Book-Store/tree/book-store" rel="noopener noreferrer" target="_blank">
                                <CardMenu style={{ color: "red" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </a>

                        </Card>
                    </Cell>


                    {/*Project 6 */}
                    <Cell col={4} style={{ display: "flex", flexWrap: "wrap" }}>
                        <Card style={{ border: "2px solid darkorange", borderRadius: "20px", margin: 'auto', marginTop: "30px" }}>
                            <CardTitle style={{ color: 'black', height: '250px', background: `url(${reactPic}) center / cover` }}>
                                React Project #6</CardTitle>
                            <CardText style={{ height: "160px" }} align="justify" className="card-text" border><span style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}><u>Contact-List</u></span>--
                            This project basically for the contact list. In this project, it will show the contact list with profile
                            pic, name, and company. On the top of this contact list, one button is there, when you click on it
                           then it opens a form in which you put the information and mobile no and you can save it. When
                           you save it, then it will show in the contact list. When you click on any of this contact list, then it
                           will show all details about that in the side panel in which two-button will be there one for edit and
                           one for delete. When you click on edit then you can edit it. When you click on delete then it will
                          delete. These all crud operation is handled through my own created JSON server.
                        </CardText>
                            <CardActions border>
                                <div className="card-button">
                                    <a href="https://github.com/Vivekch05/contact-list" rel="noopener noreferrer" target="_blank">
                                        <Button>GitHub</Button>
                                    </a>
                                    <a href="https://github.com/Vivekch05/contact-list" rel="noopener noreferrer" target="_blank">
                                        <Button>Live Demo</Button>
                                    </a>
                                </div>
                            </CardActions>

                            <a href="mailto:?subject=book store application &body=https://github.com/Vivekch05/contact-list" rel="noopener noreferrer" target="_blank">
                                <CardMenu style={{ color: "red" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </a>

                        </Card>
                    </Cell>



                    {/* Project 7*/}

                    <Cell col={4} style={{ display: "flex", flexWrap: "wrap" }}>
                        <Card style={{ border: "2px solid darkorange", borderRadius: "20px", margin: 'auto', marginTop: "30px" }}>
                            <CardTitle style={{ color: 'black', height: '250px', background: `url(${reactPic}) center / cover` }}>
                                React Project #7</CardTitle>
                            <CardText style={{ height: "160px" }} align="justify" className="card-text" border><span style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}><u>Tetris Game</u></span>--
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
                            <a href="mailto:?subject=book store application &body=https://vivekch05.github.io/Tetris-Game/" rel="noopener noreferrer" target="_blank">
                                <CardMenu style={{ color: "red" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </a>
                        </Card>
                    </Cell>
                </Grid>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <Grid>

                    {/*Project 1 */}
                    <Cell col={4} style={{ display: "flex", flexWrap: "wrap" }}>
                        <Card style={{ border: "2px solid darkorange", borderRadius: "20px", margin: 'auto', marginTop: "30px" }}>
                            <CardTitle style={{
                                color: 'black', height: '250px', background:
                                    `url(${reactnativePic}) center/cover`
                            }}>
                                ReactNative Project 1</CardTitle>
                            <CardText style={{ height: "160px" }} align="justify" className="card-text" border><span style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}><u>News-App</u></span>--
                                  This is a news app project.there are three sections in this project General,Business,Technology.
                                  each section contains section related news.it is based on react-native.it is plateform independent we can
                                  used it  in ios or android both.it is light weight app.i used <a href="https://newsapi.org/" rel="noopener noreferrer" target="_blank">NewsApi &nbsp;</a>api key.</CardText>
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
                            <a href="mailto:?subject=book store application &body=It will be shareable very soon :)" rel="noopener noreferrer" target="_blank">
                                <CardMenu style={{ color: "white" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </a>
                        </Card>
                    </Cell>
                </Grid>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <Grid>
                    {/*Project 1 */}
                    <Cell col={4} style={{ display: "flex", flexWrap: "wrap" }}>
                        <Card style={{ border: "2px solid darkorange", borderRadius: "20px", margin: 'auto', marginTop: "30px" }}>
                            <CardTitle style={{
                                color: 'black', height: '250px', background:
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
                            <a href="mailto:?subject=book store application &body=It will be shareable very soon :)" rel="noopener noreferrer" target="_blank">
                                <CardMenu style={{ color: "white" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </a>
                        </Card>
                    </Cell>
                </Grid>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <Grid>
                    {/*Project 1 */}
                    <Cell col={4} style={{ display: "flex", flexWrap: "wrap" }}>
                        <Card style={{ border: "2px solid darkorange", borderRadius: "20px", margin: 'auto', marginTop: "30px" }}>
                            <CardTitle style={{
                                color: 'black', height: '250px', background:
                                    `url(${htmlPic}) center/cover`
                            }}>
                                Html/Css Project #1</CardTitle>
                            <CardText style={{ height: "160px" }} align="justify" className="card-text" border>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
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
                            <a href="mailto:?subject=book store application &body=It will be shareable very soon :)" rel="noopener noreferrer" target="_blank">
                                <CardMenu style={{ color: "white" }}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </a>
                        </Card>
                    </Cell>
                </Grid>
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
