import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper>
      <p>
        Built with
        <a href="https://reactjs.org"> React</a> /
        <a href="https://gatsbyjs.com"> Gatsby</a> /
        <a href="https://graphql.org"> GraphQL</a> /
        <a href="https://algolia.com"> Algolia API</a> 
      </p>
      <p>
        &copy; {new Date().getFullYear()} <span>Design. </span>All rights
        reserved.
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  height: 5rem;
  display: grid;
  place-items: center;
  background: var(--clr-black);
  text-align: center;
  align-content: center;
  p {
    color: var(--clr-white);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
  a {
    color: var(--clr-primary-3);
  }
`
export default Footer
