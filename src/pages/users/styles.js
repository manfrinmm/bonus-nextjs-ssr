import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  padding: 24px;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    list-style: none;
  }
`;

export const Content = styled.div`
  background: #eee;

  border-radius: 8px;
  margin-bottom: 16px;

  img {
    border-radius: 50%;
    margin: 16px;
    border: 4px solid #7159c1;
    height: 150px;
  }

  a {
    color: #fd951f !important;
    font-size: 16px;

    abbr {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
