import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  width: 100%;
  font-size: 1.5rem;
  line-height: 1.5;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 98%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #bfbfdc;
    border-radius: 0.1rem;
    &:focus {
      outline: 0;
      border-color: #8f91a3;
    }
  }
  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      margin-bottom: 30px;
      content: "";
      display: block;
      background-color: #ffffff;
      background-image: linear-gradient(
        to right,
        #f6f6f6 0%,
        #f0f0f0 50%,
        #ebebeb 100%
      );
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export { Form };
