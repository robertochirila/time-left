import React, { Component } from 'react'
import { PresentDate } from './PresentDate'
import { FutureDate } from './FutureDate'
import { Result } from './Result'

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            presentDate: "",
            futureDate: "",
            result: ""
        }
    }

    retry = () => {
        this.setState({
            step: 1,
            presentDate: "",
            futureDate: ""
        })
    }

    handleChange = input => e => {

        e.preventDefault()
        console.log(e.target.name)
        this.setState({ [input]: e.target.value })

    }

    previousStep = () => {

        const { step } = this.state
        this.setState({ step: step - 1 })

    }

    nextStep = () => {

        const { step } = this.state
        this.setState({ step: step + 1 })

    }

    makeCalculation = () => {
        const { presentDate, futureDate } = this.state
        const result = futureDate - presentDate
        this.setState({ result: result })
    }


    render() {
        const { step, presentDate, futureDate, result } = this.state


        switch (step) {
            case 1:
                return (
                    <React.Fragment>
                        <PresentDate
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            presentDate={presentDate}
                        />
                    </React.Fragment>
                )
            case 2:
                return (
                    <FutureDate
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        handleChange={this.handleChange}
                        futureDate={futureDate}
                    />
                )
            case 3:
                return (
                    <Result
                        makeCalculation={this.makeCalculation}
                        result={result}
                        retry={this.retry}
                    />
                )
        }
    }
}

export default Form
