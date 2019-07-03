import React, {Component} from 'react'

export default class FilterType extends Component {


    state = {
        type: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.type)
    }

    handleChange = (event) => {
        this.setState({
            type: event.target.value
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input onChange={this.handleChange} type="text" value={this.state.type}/>
                    Filter By Class:
                </label>
            </form>
        )
    }
}