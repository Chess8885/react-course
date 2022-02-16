import React from 'react';

export default function Employee(props) {
    const { name, id } = props;
    return (
        <p>
            {name} {id}
        </p>
    );
}
