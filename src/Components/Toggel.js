import React from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { toggleAction } from "../Store/actions";
import styled from "styled-components";

export default function Toggel() {
  const CvsF = useSelector((state) => state.CvsF);
  const dispatch = useDispatch();

  return (
    <Container>
      <div id="inline-radio">
        <Form.Check
          inline
          label="Celcius"
          type="radio"
          id="1"
          name="temp"
          onClick={CvsF ? null : () => dispatch(toggleAction())}
        />
        <Form.Check
          inline
          label="Fahrenheit"
          type="radio"
          id="2"
          name="temp"
          onClick={!CvsF ? null : () => dispatch(toggleAction())}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 70%;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  .form-check {
    margin-right: 13rem !important;
    margin-left: 10rem !important;
  }

  #inline-radio {
    width: 100%;
    font-size: 35px;
    color: #196090;
    font-weight: 20rem;
  }
  input[type="radio"] {
    transform: scale(2.5);
    margin-right: 25px;
  }
  // Medium devices (tablets, 768px and up)
  @media (max-width: 575.98px) {
    #inline-radio {
      margin-left: -9rem;
    }
  }
`;
