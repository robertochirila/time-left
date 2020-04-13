import React, { Component } from 'react'
import { Result } from './FutureDate'

export class PresentDate extends Component {


    continue = (e) => {

        e.preventDefault()
        this.props.nextStep()

    }
    render() {

        const { presentDate } = this.props

        return (
            <div>
                <label>
                    What is your current age ?
                    <input type="text" placeholder="Years old..." value={presentDate} onChange={this.props.handleChange} name="presentDate"></input>
                </label>
                <button type="Submit" onClick={this.continue}> Submit </button>
            </div>
        )
    }
}

export default PresentDate
