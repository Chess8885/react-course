import React, { useState } from 'react';
import styled from 'styled-components';

export default function Counter () {
    const [counter, SetCounter] = useState(0);

    function add(setCounter) {
        setCounter = SetCounter(counter + 1);
    }
    function sub(setCounter) {
        setCounter = SetCounter(counter - 1);
    }
    function mul(setCounter) {
        setCounter = SetCounter(counter * 2);
    }
    function div(setCounter) {
        setCounter = SetCounter(counter / 2);
    }

    return (
        <>
            <Title>Welcome to my counter !</Title>
            <DisplayCounter>Counter is set to : {counter}</DisplayCounter>
            <AddButton onClick={add}>add</AddButton>
            <SubButton onClick={sub}>sub</SubButton>
            <MulButton onClick={mul}>mul</MulButton>
            <DivButton onClick={div}>div</DivButton>
        </>
    );
}

const Title = styled.h1`
    margin-left: auto;
    margin-right: auto;
    width: 800px;
    color: darkolivegreen;
`;

const DisplayCounter = styled.h3`
    margin-left: auto;
    margin-right: auto;
    width: 800px;
    color: olive;
`;

const CounterButton = styled.button`
    margin-left: auto;
    margin-right: auto;
    width: 150px;
    background-color: white;
    color: black;
    border: 2px solid #4caf50; /* Green */
    color: black;
    font-size: 16px;
    border-radius: 4px;
    &:hover {
        background-color: #4caf50; /* Green */
        color: white;
        border-radius: 4px;
        font-size: 16px;
    }
`;

const AddButton = styled(CounterButton)`
    color: black;
    border: 2px solid #4caf50; /* Green */
    color: black;

    &:hover {
        background-color: #4caf50; /* Green */
    }
`;

const SubButton = styled(CounterButton)`
    color: black;
    border: 2px solid #008cba;
    color: black;

    &:hover {
        background-color: #008cba;
    }
`;

const MulButton = styled(CounterButton)`
    color: black;
    border: 2px solid #f44336;
    color: black;

    &:hover {
        background-color: #f44336;
    }
`;

const DivButton = styled(CounterButton)`
    color: black;
    border: 2px solid pink; /* Green */
    color: black;

    &:hover {
        background-color: pink; /* Green */
    }
`;
