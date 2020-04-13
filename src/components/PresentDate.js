import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class PresentDate extends Component {


    continue = (e) => {

        e.preventDefault()
        this.props.nextStep()

    }
    render() {

        const { presentDate } = this.props

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Calculate how much time you have left on this planet" />
                    <TextField
                        hintText="How old are you ?"
                        floatingLabelText="Your age"
                        onChange={this.props.handleChange("presentDate")}
                        defaultValue={presentDate} />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default PresentDate
