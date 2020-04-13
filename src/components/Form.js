import React, { Component } from 'react'
import { PresentDate } from './PresentDate'
import { FutureDate } from './FutureDate'

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

    handleChange = (e) => {


        e.preventDefault()
        console.log(e.target.name)
        this.setState({ [e.target.name]: e.target.value })


    }

    handleSubmit = (e) => {

        e.preventDefault()
        const { presentDate, futureDate } = this.state

        const result = futureDate - presentDate
        console.log(result)

        console.log(e.target.name)

    }

    nextStep = (e) => {

        const { step } = this.state

        e.preventDefault()
        this.setState({ step: step + 1 })

    }


    render() {
        const { step } = this.state

        switch (step) {
            case 1:
                return (
                    <React.Fragment>
                        <PresentDate
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}

                        />
                    </React.Fragment>
                )
            case 2:
                return (
                    <FutureDate />
                )
        }
    }
}

export default Form
