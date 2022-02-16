import React from 'react';

export default function Employee(props) {
    const { name, key } = props;
    return (
        <p>
            {name} {key}
        </p>
    );
}
