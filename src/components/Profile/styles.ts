import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 212px;
  max-width: 1120px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 2rem 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -5rem;

  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const ProfileInfo = styled.div`
  margin-left: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.5rem;
      color: ${(props) => props.theme["base-title"]};
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: transparent;
      border: 0;
      border-bottom: 2px solid transparent;
      text-decoration: none;

      svg,
      span {
        font-size: 0.75rem;
        color: ${(props) => props.theme.blue};
      }

      &:hover {
        transition: border-bottom 0.2s;
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  p {
    margin-top: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const FooterContainer = styled.footer`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
