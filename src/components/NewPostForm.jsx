import React from 'react'

class NewPostForm extends React.Component {
    constructor() {
        super()
        this.state = {
            text: ""
        }
    }

    handleOnChange = event => {
        this.setState({ text: event.target.value })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        console.log(this.state.text)
    }

    render() {
        return (
            <div>
                <h2>New Post Form:</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <textarea
                        placeholder="Post Content..."
                        value={this.state.text}
                        onChange={this.handleOnChange}
                    >
                    </textarea>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default NewPostForm