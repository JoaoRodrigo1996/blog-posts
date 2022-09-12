import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  margin-top: 0.75rem;
  margin-bottom: 3rem;

  input {
    width: 100%;
    padding: 12px 16px;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 8px;
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
