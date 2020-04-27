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
                    <Card shaddow={10} style={{ height: '400px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                        <CardTitle style={{
                            fontWeight: "bold", color: "black", height: "200px", background:
                                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png) center/cover'
                        }}>
                            React Project #1</CardTitle>
                        <CardText className="card-text" border>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                        </CardText>
                        <CardActions border>
                            <div className="card-button">
                                <Button onclick="window.location.href='https://github.com/Vivekch05'">GitHub</Button>
                                <Button>Live Demo</Button>
                            </div>
                        </CardActions>
                        <CardMenu style={{ color: "red" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2 */}
                    <Card shaddow={10} style={{ height: '400px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                        <CardTitle style={{
                            fontWeight: "bold", color: "black", height: "200px", background:
                                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png) center/cover'
                        }}>
                            React Project #2</CardTitle>
                        <CardText className="card-text" border>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                        </CardText>
                        <CardActions border>
                            <div className="card-button">
                                <Button>GitHub</Button>
                                <Button>Live Demo</Button>
                            </div>
                        </CardActions>
                        <CardMenu style={{ color: "red" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 3 */}
                    <Card shaddow={10} style={{ height: '400px', margin: 'auto', border: '1px solid red', borderRadius: '20px' }}>
                        <CardTitle style={{
                            fontWeight: "bold", color: "black", height: "200px", background:
                                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png) center/cover'
                        }}>
                            React Project #3</CardTitle>
                        <CardText className="card-text" border>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                        </CardText>
                        <CardActions border>
                            <div className="card-button">
                                <Button>GitHub</Button>
                                <Button>Live Demo</Button>
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
                        fontWeight: "bold", color: "white", height: "200px", background:
                            'url(https://vectorified.com/images/angular-material-icon-set-18.png) center/cover'
                    }}>
                        Angular Project #1</CardTitle>
                    <CardText className="card-text" border>
                        Coming Soon................................................
                    </CardText>
                    <CardActions border>
                        <div className="card-button">
                            <Button>GitHub</Button>
                            <Button>Live Demo</Button>
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
                            <Button>GitHub</Button>
                            <Button>Live Demo</Button>
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
                            fontWeight: "bold", color: "white", height: "200px", background:
                                'url(https://beehosting.pro/wp-content/uploads/2019/02/html-i-css..jpg) center/cover'
                        }}>
                            Html/Css Project #1</CardTitle>
                        <CardText className="card-text" border>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                        </CardText>
                        <CardActions border>
                            <div className="card-button">
                                <Button>GitHub</Button>
                                <Button>Live Demo</Button>
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
