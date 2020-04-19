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
    text-align: center;
    width: 800px;

    margin-left: 16px;

    p {
      font-size: 24px;
      color: #eeeeee;

      white-space: pre-line;
    }

    p.bio {
      margin: 24px 0;
    }
  }

  div.infos {
    display: flex;
    justify-content: space-around;

    margin-bottom: 8px;
  }
`;
