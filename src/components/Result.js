import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


export class Result extends Component {

    calculate = (e) => {
        e.preventDefault()
        this.props.makeCalculation()
    }

    retry = (e) => {
        e.preventDefault()
        this.props.retry()
    }

    render() {
        const { result } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Result" />
                    {
                        result == "" ?
                            <RaisedButton
                                label="Calculate"
                                primary={true}
                                onClick={this.calculate}
                            />
                            : ""
                    }

                    {result != "" ?

                        <RaisedButton
                            label="Retry"
                            primary={true}
                            onClick={this.retry}
                        /> : ''}

                    <label>
                        The result is: {result}
                    </label>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Result
