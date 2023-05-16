import styled from "styled-components";
import { useState } from "react";

import { GlobalStyles } from "./components/Globals";

import ErrorImage from "./assets/icon-error.svg";

import InputComponent from "./components/Input";

function App() {
  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [emailError, setEmailNameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const inputs = [
    {
      placeholder: "First Name",
      value: firstName,
      setValue: setFirstName,
      error: firstNameError,
      errorImage: ErrorImage,
    },
    {
      placeholder: "Last Name",
      value: lastName,
      setValue: setLastName,
      error: lastNameError,
      errorImage: ErrorImage,
    },
    {
      placeholder: "Email Address",
      value: email,
      setValue: setEmail,
      error: emailError,
      errorImage: ErrorImage,
    },
    {
      placeholder: "Password",
      value: password,
      setValue: setPassword,
      error: passwordError,
      errorImage: ErrorImage,
    },
  ];

  function validate() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
    {
      firstName === "" ? setFirstNameError(true) : setFirstNameError(false);
    }
    {
      lastName === "" ? setLastNameError(true) : setLastNameError(false);
    }
    if (!emailRegex.test(email)) {
      setEmailNameError(true);
      setEmail("");
    } else {
      setEmailNameError(false);
    }
    {
      password === "" ? setPasswordError(true) : setPasswordError(false);
    }
  }

  return (
    <>
      <GlobalStyles />
      <Header>
        <Title>Learn to code by watching others</Title>
        <HeaderText>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.{" "}
        </HeaderText>
      </Header>

      <Main>
        <TryText>then $20/mo. thereafter</TryText>

        <Form>
          {inputs.map((element, index) => {
            return (
              <InputComponent
                placeholder={element.placeholder}
                value={element.value}
                setValue={element.setValue}
                error={element.error}
                errorImage={element.errorImage}
                key={index}
              />
            );
          })}

          <Claim
            onClick={(event) => {
              event.preventDefault();
              validate();
            }}
          >
            CLAIM YOUR FREE TRIAL
          </Claim>
          <Terms>By clicking the button, you are agreeing to our</Terms>
        </Form>
      </Main>
    </>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  color: #ffffff;
  text-align: center;
  width: 32.7rem;

  @media (min-width: 90em) {
    text-align: left;
    align-items: flex-start;
    width: 52.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  line-height: 1.3em;
  font-weight: 700;
  width: 15ch;

  @media (min-width: 90em) {
    font-size: 5rem;
  }
`;

const HeaderText = styled.p`
  font-size: 1.6rem;
  line-height: 1.625em;
  font-weight: 500;
  width: 32ch;

  @media (min-width: 90em) {
    width: 50ch;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 32.7rem;

  @media (min-width: 90em) {
    width: 54rem;
  }
`;

const TryText = styled.p`
  width: 100%;
  padding: 1.8rem 6.6rem 1.8rem 6.7rem;
  font-size: 1.5rem;
  line-height: 1.7em;
  color: #ffffff;
  text-align: center;
  font-weight: 400;
  background: #5e54a4;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;

  &::before {
    content: "Try it free 7 days ";
    font-weight: 700;
  }
`;

const Form = styled.form`
  width: 100%;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  background: #ffffff;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
`;

const Claim = styled.button`
  width: 100%;
  min-height: 5.6rem;
  letter-spacing: 1px;
  color: #ffffff;
  background: #38cc8b;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
  font-size: 1.5rem;
  line-height: 2.6rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: #77e2b3;
  }
`;

const Terms = styled.p`
  font-size: 1.1rem;
  line-height: 1.9em;
  color: #bab7d4;
  font-weight: 600;
  text-align: center;
  margin-top: -0.8rem;
  width: 37ch;

  &::after {
    content: " Terms and Services";
    color: #ff7979;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default App;
