import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'


const IndexPage = ({data}) => (
  
  <div style={{
    /*borderStyle: "double",
  borderColor: "white" */
  }}>
<br/>
<br/>
<br/>
<br/>
    <h1 style={{
    textAlign: "center"
          }}>Top Rated</h1>
   <span style={{
    display:"block",
    border:"none",
    color:"white",
    height:"1px",
    background:"black",
    background: "-webkit-gradient(radial, 50% 50%, 0, 50% 50%, 350, from(#000), to(#cccc))"
          }}></span>

  <br/>
  <br/>
  {data.allMarkdownRemark.edges.map(({node}) => (
    <PostListing key={node.id} post={node} />
       
  ))}

<br/>

  </div>



);


export default IndexPage;

export const query = graphql `
query TopMeta {
  site {
    siteMetadata {
      title
      description
    }
  }
  allMarkdownRemark(filter: { frontmatter: { top: {eq: 'true' } } } ) {
    edges {
      node {
        ...CreamFragment
        frontmatter {
          title
          date(formatString: "MMMM DD YYYY")
        }
        fields {
          slug
        }
        html
        excerpt(pruneLength: 280)
      }
    }
  }
}
`;