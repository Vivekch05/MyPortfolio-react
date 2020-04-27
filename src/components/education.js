import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Education extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={3}>
                        {this.props.degree}
                    </Cell>
                    <Cell col={3}>
                        {this.props.schoolName}
                    </Cell>
                    <Cell col={3}>
                        {this.props.marks}
                    </Cell>
                    <Cell col={3}>
                        {this.props.startYear}{this.props.endYear}
                    </Cell>
                </Grid>
            </div>
        )
    }
}
