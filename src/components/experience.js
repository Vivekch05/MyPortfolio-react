import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell style={{marginTop:"-8px"}} col={6}>
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
                    <Cell style={{marginTop:"-30px"}} col={12}>
                        <h6><b>Company OverView:</b></h6>
                        <p align="justify">{this.props.descreption}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
