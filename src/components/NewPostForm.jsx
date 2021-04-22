import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../redux/actions'
import { v4 as uuidv4 } from 'uuid'

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
        this.props.addPost({ text: this.state.text, id: uuidv4() })
        this.setState({ text: "" })
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

const mapDispatchToProps = dispatch => {
    return {
        addPost: post => dispatch(addPost(post))
    }
}

export default connect(null, mapDispatchToProps)(NewPostForm)