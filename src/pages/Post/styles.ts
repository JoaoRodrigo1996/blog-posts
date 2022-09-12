import styled from "styled-components";

export const PostContainer = styled.div``;

export const PostContent = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  margin-top: 2.5rem;

  padding: 2.5rem 2rem;
`;

export const TextContent = styled.div`
  p {
    line-height: 1.6;
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 2rem;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    display: inline-block;
    margin-bottom: 1rem;
  }
`;

export const CodeContent = styled.div`
  background: ${(props) => props.theme["base-post"]};
  border-radius: 4px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
`;
