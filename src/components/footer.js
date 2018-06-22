import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";

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

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        &:hover {
          border-bottom: 3px solid #f69064;
        }
      }
    }
  }
`;

const BanTxt = styled.div`
  ul {
    margin: 0 auto;
    list-style: none;
    display: block;
    text-align: center;
    color: #fff;
    li{
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
 Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      h1 {
        text-decoration: none;
        text-align: center;
        }
      }
    }
  }

`;

export default class Footer extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === "/") {
        this.wrapper.animate([{ height: "40vh" }, { height: "40vh" }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        });
      } else {
        this.wrapper.animate([{ height: "40vh" }, { height: "40vh" }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        });
      }
    }
  };

  render() {
    const { data, location } = this.props;
    return (
      <FooterWrapper
        isHome={location.pathname === "/"}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <FooterContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
             
            </Link>
          </h1>

              <BanTxt>
            <ul>
              <li>
                <h2>Social Media</h2>
              </li>
          
            </ul>
          </BanTxt>

          <MainNav>
            <ul>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/about">Instagram</Link>
              </li>
            </ul>
          </MainNav>
        </FooterContainer>
        <Img
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            
          }}
          sizes={data.footer.sizes}
        />
      </FooterWrapper>
    );
  }
}
