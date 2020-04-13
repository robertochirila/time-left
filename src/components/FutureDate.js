import React, { Component } from 'react'

export class FutureDate extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { futureDate } = this.props
        return (
            <React.Fragment>
                <label>
                    At what age do you expect to die ?
                    <input type="text" placeholder="Years old..." value={futureDate} onChange={this.props.handleChange} name="futureDate"></input>
                </label>
                <button type="submit" name="submit" onClick={this.continue}>Submit</button>
            </React.Fragment>
        )
    }
}

export default FutureDate
