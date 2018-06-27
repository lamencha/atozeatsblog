import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'
import macho from "../images/macho.png";
import seal from "../images/seal.jpg";
import new1 from "../images/new.png";
import styled from "styled-components";

import Img from "gatsby-image";

import { relative } from 'path';



const PageDiv = styled.div`

margin: 0 auto;
width: 960px;
padding: 0px 1.875rem 1.45rem;
paddng-top: 0;
img {
  width: 220px;
  height: 220px;
  

}
+


`


const ColorBox = styled.div`
  
  display: flex;  
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0;
  
  
`

const LilBox = styled.div`
  
  position: relative;
  justify-content: center;
  display: flex;
  padding: 0;
  

  h3 {
    text-align: center;

    padding: 0;
  }

  img {
    padding: 0;
    
  }

  img:hover {
    opacity: 0.6;
  }

  
`

const InBox = styled.div`
  position: absolute;
    top: 0px;
    text-align: center;
    color: white;
    padding-left: 20px;
    padding-right: 20px;

    h3 {
      text-align: center;
      color: white;
      text-decoration: underline;
      
    }






`

const IndexPage = ({data}) => (
  

  <PageDiv >



 <ColorBox>
 <Link to="/creamhelper">      

 <LilBox>
  <img src={macho} alt="Logo" />
    <InBox>
      <h3>Cream Of The Crop</h3>
    </InBox>
</LilBox>
</Link>

<Link to="/toprated">
  <LilBox>      
  <img src={seal} alt="top rated" />
    <InBox>
      <h3>Top Rated</h3>
    </InBox>
</LilBox>
</Link>

<Link to="/newplaces">
 <LilBox>      
  <img src={new1} alt="new places" />
    <InBox>
      <h3>Newest Places</h3>
    </InBox>
</LilBox>
</Link>
</ColorBox>
<br/>
<br/>

  <h1 style={{
    textAlign: "center"
          }}>Posts</h1>
   <span style={{
    display:"block",
    border:"none",
    color:"white",
    height:"1px",
    background:"black",
    background: "-webkit-gradient(radial, 50% 50%, 0, 50% 50%, 350, from(#000), to(#eff0f4))"
          }}>
    </span>
  <br/>
  <br/>
  {data.allMarkdownRemark.edges.map(({node}) => (
    <PostListing key={node.id} post={node} />
       
  ))}

<br/>
<br/>
<br/>
</PageDiv>


);


export default IndexPage;

export const query = graphql `
query SiteMeta {
  site {
    siteMetadata {
      title
      description
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
    edges {
      node {

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