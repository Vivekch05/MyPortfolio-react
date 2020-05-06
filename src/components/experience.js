import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell style={{ marginTop: "-8px" }} col={6}>
                        <h5><b><u>{this.props.companyName}</u></b></h5>
                        <h6><b>{this.props.designation}</b></h6>
                    </Cell>
                    <Cell col={3}>
                        <p>{this.props.jobLocation}</p>
                    </Cell>
                    <Cell col={3}>
                        <p>{this.props.startYear} {this.props.endYear}</p>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell style={{ marginTop: "-30px" }} col={12}>
                        <h6><b>Project Name:</b></h6>
                        <ul align="justify" style={{fontSize:"15px",padding:"5px"}}>
                            <li><b>Allocate:-</b>
                    It is a health care project in which this software works like ensuring the right staff are in the right place,
                     at the right time to meet real patient needs. Greater involvement of staff in rostering process,
                      visibility of schedules and fairness of allocations.<br />
                                <b>Language:-</b> HTML, CSS, JavaScript, React, Redux, Typescript.<br />
                                <b>Operation System:- </b>Window.<br />
                                <b>Responsibilities:</b>
                                <ul>
                                    <li>Evaluated Project Requirements and Specifications and Developed Software Applications that Surpassed Client Expectations.</li>
                                    <li>Follow Agile Mindset.</li>
                                    <li>Design and Developed of the assigned modules.</li>
                                </ul>
                            </li>
                        </ul>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
