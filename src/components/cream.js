import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";


import logo from "../images/logoWO.png";

const FooterWrapper = styled.div`
  background: #524763;
  margin-top: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? "40vh" : "40vh")};
  h1 {
    img {
      height: 180px;
    }
  }
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;


export default class Footer extends Component {
  
  render() {
    const { data, location } = this.props;
    return (
      <FooterWrapper>
       
        <FooterContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/creamhelper"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
            Cream Of The Crop
            </Link>
          </h1>

              

         
        </FooterContainer>
       
      </FooterWrapper>
    );
  }
}
