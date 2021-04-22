import React from 'react'
import PostCard from './PostCard'
import NewPostForm from './NewPostForm'
import { connect } from 'react-redux'

const PostsContainer = (props) => {
    return (
        <div>
            <NewPostForm />
            <h2>Posts:</h2>
            {props.posts.map(post => {
                return <PostCard post={post} key={post.id} />
            }
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsContainer)