import React from 'react';
import { Link } from 'react-router-dom';

export const Tag = (props) => {
    const template = <div
        style={{
            background: props.bck,
            fontSize: props.size,
            color: props.color,
            padding: '5px 10px',
            display: 'inline-block',
            fontFamily: 'Righteous',
            ...props.add
        }}
    >
        {props.children}
    </div>

    if (props.link) {
        return (
            <Link to={props.linkto}>
                {template}
            </Link>
        )
    } else {
        return template
    }
}

export const limit = (arr) => {
    let newArr = []

    for (let i = 0; i < 6; i++) {
        newArr.push(arr[i])
    }
    return newArr
}


export const valid = (element) => {
    // let error = [true, '']

    // if (element.validation.require) {
    //     let valid = element.value.trim() !== ''
    //     let message = `${!valid ? 'This Field is Required' : ''}`
    //     error = !valid ? [valid, message] : error
    // }

    // return error
    console.log(element)
}