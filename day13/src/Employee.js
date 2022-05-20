import React from 'react';

export default function Employee(props) {
    const { name, id } = props;
    return (
        <div>
        <p>
            {`NAME is ${name}, ID is ${id}`}
        </p>
        </div>
    );
}
