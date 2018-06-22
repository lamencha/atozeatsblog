import React from 'react'
import Link from 'gatsby-link'


const CreamListing = ({cream}) => (
<article>
<h4>  {cream.frontmatter.date} </h4>
  <h2>  {cream.frontmatter.title} </h2>
    <p>{cream.excerpt} </p>
    <h5>
    <Link to={cream.fields.slug} >
     Read More 
    </Link>
    </h5>
</article>

);
export default CreamListing; 