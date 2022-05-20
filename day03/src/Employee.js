import React from 'react';
import styled from 'styled-components';

export default function Employee(props) {
    //destructuring
    const { name, surname, age, location } = props;
    return (
        <p>
            name is {props.name} and surname is {surname}
        </p>
    );
}
