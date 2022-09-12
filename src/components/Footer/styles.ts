import styled from "styled-components";

export const FooterContainer = styled.div``;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  svg {
    color: ${(props) => props.theme["base-label"]};
  }
`;
