import React, {useEffect, useState} from 'react';
import Input from "../Input";
import {SearchAlt} from "@styled-icons/boxicons-regular/SearchAlt";
import {Clear} from "@styled-icons/material/Clear";
import styled from "styled-components";
import {clear} from "@testing-library/user-event/dist/clear";
import {isEmpty} from "rxjs";

const SearchIcon = styled(SearchAlt)`
  &:hover {
    cursor: pointer;
    color: #0d8eb9;
  }
  color: white;
  padding-left: 0.5em;
  //margin-bottom: 0.1em;
`

const FormContainer = styled.form`

  height: 4em;
  color: white;
  background: #3a3a3a;
  //border-radius: 20px;
  border-radius: 4px;
  border: 2.5px solid #32a4e7;
  color: rgba(122, 118, 118, 0.84);

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  display: flex;
  align-items: center;
  align-content: center;
`

const ClearIcon =  styled(Clear)`
  font-family: Helvetica;
  color: white;
  margin:  0.25em;

  &:hover {
    color:#32a4e7;
    cursor: pointer;

  }
  //font-weight: bold;
  

`

const SearchBar = () => {
    const [value, setValue] = useState('');
    const [displayClear, setDisplayClear] = useState(false);
    useEffect(() => {

    },[displayClear])

    const handleChange = (e: Event): void => {
        setValue((e.target as HTMLInputElement).value)
        setDisplayClear(value!=='');
    }
    const clearSearch = ():void => {
        setValue('');
        setDisplayClear(false);
    }

    return (
        <FormContainer>
            <label htmlFor="search">
                <SearchIcon size="38" title={"Search"}/>
            </label>
            <Input
                disableCSS={true}
                id={'search'}
                handleChange={handleChange}
                value={value}/>
            {displayClear && <ClearIcon size={'38'} onClick={clearSearch}></ClearIcon>}

        </FormContainer>
    );
};

export default SearchBar;