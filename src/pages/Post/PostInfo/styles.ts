import styled from "styled-components";

export const PostInfoContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -5rem;

  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    padding: 0.25rem 0;

    span,
    svg {
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
    }

    &:hover {
      transition: border-bottom 0.2s;
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const MainContent = styled.main`
  margin-top: 1.25rem;
  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const FooterContainer = styled.footer`
  margin-top: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;
