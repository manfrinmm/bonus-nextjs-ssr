import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;

  h1 {
    margin-bottom: 24px;
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

  header.profile {
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
      border-radius: 4px;
      height: fit-content;
    }
  }

  div.infos {
    display: flex;
    justify-content: space-around;

    margin-bottom: 8px;
  }
`;

export const ReposContainer = styled.div`
  ul {
    list-style: none;
  }
`;

export const Repo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #85877c;

  p {
    color: #292925 !important;
  }

  border-radius: 8px;

  margin-bottom: 16px;

  &:first-child {
    margin-top: 16px;
  }
`;

export default Container;
