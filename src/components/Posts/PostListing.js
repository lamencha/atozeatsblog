import React from 'react'
import Link from 'gatsby-link'


const PostListing = ({post}) => (
  
<article>
<h4>  {post.frontmatter.date} </h4>
  <h2>  {post.frontmatter.title} </h2>
    <p>{post.excerpt} </p>
    <h5>
    <Link to={post.fields.slug} >
     Read More 
    </Link>
    </h5>
</article>

);
export default PostListing; 