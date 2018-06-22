import React, { Component } from 'react'

export default ({ frontmatter: { title, date } }) => (
    <div>
      <h3>
        {title} <span>— {date}</span>
      </h3>
      
    </div>

  );

export const creamFrag = graphql`
fragment CreamFragment on MarkdownRemark {
   
            frontmatter{
              title
              date(formatString: "MMMM DD YYYY")
            }
        }
`;
