import React, {useState} from 'react';
import styled, {css} from "styled-components";

export interface IInput {
    disableCSS?: boolean
    id: string;

    handleChange(e: Event): void;

    value: string;
}

const InputContainer = styled.input<IInput>`
  font-size: x-large;
  margin-left: 0.5em;
  background: #3a3a3a;
  color: rgba(255, 255, 255, 0.87);


  ${props => props.disableCSS ?
          css`
            border: 0;
            height: 90%;
            width: 100%;

            &:focus {
              border: 0;
              outline: none;
            }
          ` :
          css`
            height: 2em;
            padding: 0.5em 0.5em 0.5em 1em;
            width: 80%;
            border-radius: 20px;
            //border-radius: 2px;
            border: 1px solid #bbb3b3;
            color: rgba(122, 118, 118, 0.84);`
  }
`
const Input = (props: IInput) => {
    // const [value,setValue] = useState(props.value);
    //
    // const handleChange = (e:Event) => {
    //     console.log()
    //     setValue((e.target as HTMLInputElement).value);
    // }

    return (
        <InputContainer
            disableCSS={true}
            id={props.id}
            placeholder={"Search Anything"}
            onChange={props.handleChange}
            type={"text"}
            value={props.value}>
        </InputContainer>
    );
};

export default Input;