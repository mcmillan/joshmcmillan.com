import styled from "styled-components";

export default styled.div`
  font-family: "GT Eesti", sans-serif;
  font-size: 1.25rem;
  line-height: 1.5;
  color: #999;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    font-size: inherit;
    font-weight: bold;
    margin-top: 1rem;

    &:first-child {
      margin-top: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
`;
