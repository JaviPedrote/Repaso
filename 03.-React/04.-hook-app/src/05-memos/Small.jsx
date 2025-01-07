/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log(' Me volví a dibujar :( ');

    return (
        <small>{ value }</small>
    )
})
