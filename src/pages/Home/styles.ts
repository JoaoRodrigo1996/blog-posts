import styled from "styled-components";

export const HomeContainer = styled.div``;

export const Divider = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 4.75rem;

  p {
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  margin-bottom: 4rem;
`;

export const PostContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const PostCard = styled.a`
  width: 100%;
  height: 260px;
  background: ${(props) => props.theme["base-post"]};
  border: 3px solid transparent;
  border-radius: 10px;
  padding: 2rem;
  overflow: hidden;

  text-decoration: none;

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.25rem;
      line-height: 1.6;
      color: ${(props) => props.theme["base-title"]};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6;
    margin-top: 1.25rem;
  }

  &:hover {
    transition: border 0.2s;
    border: 3px solid ${(props) => props.theme["base-border"]};
  }
`;
