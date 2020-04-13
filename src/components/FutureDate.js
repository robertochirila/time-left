import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FutureDate extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    previous = (e) => {
        e.preventDefault()
        this.props.previousStep()
    }

    render() {
        const { futureDate } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Calculate how much time you have left on this planet" />
                    <TextField
                        hintText="Till what age you want to live ?"
                        floatingLabelText="Future age"
                        onChange={this.props.handleChange("futureDate")}
                        defaultValue={futureDate} />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Previous"
                        primary={true}
                        onClick={this.previous}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FutureDate
