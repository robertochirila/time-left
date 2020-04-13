import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


export class Result extends Component {

    constructor(props) {
        super(props)
        this.state = {
            flag: false
        }
    }

    calculate = (e) => {
        const { flag } = this.state
        e.preventDefault()
        this.props.makeCalculation()
        this.setState({ flag: !flag })
    }

    retry = (e) => {
        e.preventDefault()
        this.props.retry()
    }

    render() {
        const { result } = this.props
        const { flag } = this.state
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Result" />
                    <div>
                        {
                            result == "" ?
                                <RaisedButton
                                    style={buttonStyle}
                                    label="Calculate"
                                    primary={true}
                                    onClick={this.calculate}
                                />
                                : ""
                        }

                        {result != "" ?

                            <RaisedButton
                                style={buttonStyle}
                                label="Retry"
                                primary={true}
                                onClick={this.retry}
                            /> : ''}
                    </div>
                    {
                        flag == true ?
                            <label>
                                The result is: {result}
                            </label>
                            :
                            <div></div>
                    }

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const buttonStyle = {
    margin: "2rem"
}

export default Result
