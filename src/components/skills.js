import React, { Component } from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell style={{marginTop:"-5px"}} col={2}>
                        <div style={{ display: 'flex'}}>
                            <p><b>{this.props.skill}</b></p>
                        </div>
                    </Cell>
                    <Cell col={10}>
                        <div style={{ display: 'flex' }}>
                            <ProgressBar style={{ margin: 'auto', width: "75%" }}
                                progress={this.props.progress}
                            />
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
