import styled, { css } from "styled-components";

interface IProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  errorImage: string;
}

export default function InputComponent(props: IProps) {
  return (
    <InputContainer>
      <Input
        error={props.error.toString()}
        placeholder={
          props.error && props.placeholder === "Email Address"
            ? "email@example/com"
            : props.placeholder
        }
        value={props.value}
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
      ></Input>
      {props.error ? <ErrorIcon src={props.errorImage}></ErrorIcon> : null}
      {props.error ? <Error>First Name cannot be empty</Error> : null}
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-end;
  position: relative;
  width: 100%;
`;

type TInput = {
  error: string;
  placeholder: string;
};

const Input = styled.input<TInput>`
  ${(props) => css`
    width: 100%;
    height: 5.6rem;
    background: #ffffff;
    border: 1px solid #dedede;
    border-radius: 5px;
    padding: 1.5rem 6rem 1.5rem 1.9rem;
    font-size: 1.4rem;
    line-height: 1.9em;
    letter-spacing: 0.025rem;
    color: #3d3b48;
    font-weight: 600;
    caret-color: #5e54a4;
    outline: none;

    &::placeholder {
      opacity: 0.75;
      color: ${props.error === "true" &&
      props.placeholder === "email@example/com"
        ? "#FF7979"
        : "#3d3b48"};
    }
  `}
`;

const ErrorIcon = styled.img`
  position: absolute;
  top: 1.6rem;
  right: 2.7rem;
`;

const Error = styled.p`
  font-size: 1.1rem;
  line-height: 1.5em;
  font-weight: 600;
  color: #ff7979;
  font-style: italic;
`;
