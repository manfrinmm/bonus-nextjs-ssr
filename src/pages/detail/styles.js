import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;

  h1 {
    margin-bottom: 24px;
  }

  img {
    border-radius: 4px;
  }

  a {
    margin-top: 32px;
  }
`;

export const Content = styled.div`
  display: flex;

  div {
    margin-left: 16px;

    p {
      font-size: 24px;
      color: #eeeeee;
      margin-bottom: 24px;
    }
  }
`;
