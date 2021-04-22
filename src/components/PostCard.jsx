import React from 'react'

export default function NewPostForm({ post }) {
    return (
        <div>
            <h3>Post:</h3>
            {post.text}
        </div>
    )
}