import React from 'react';
import styled, {css} from "styled-components";
import {IBtn} from "./Button.interface";
import {BtnCssType} from "./ButtonCssType.enum";

const StyledButton = styled.button<IBtn>`
  //font-size: medium;
  padding: 0.75em 1.25em;
  border-radius: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  outline: none;
  border: none;
  background: ${props => props.btnStyle === BtnCssType.primary && '#0e9cea'}
  ${props => props.btnStyle === BtnCssType.secondary && 'green'}
  ${props => props.btnStyle === BtnCssType.warning && 'yellow'}
  ${props => props.btnStyle === BtnCssType.error && 'red'};
  color: white;

  &:hover:enabled {
    cursor: pointer;
  }

  &:disabled {
   background: gray; 
  }
`
const Button = (props: IBtn) => {
    const {btnStyle, btnType, title, disabled} = props;
    return (
        <StyledButton
            type={btnType}
            disabled={disabled}
            btnStyle={btnStyle}
        >
            {title}
        </StyledButton>
    );
};

export default Button;