import React from 'react';

const ContactLinks = (props) => {
    return (

        <a href={props.href} target={props.target}> {props.children}
            <p>{props.text}</p>

        </a>

    )
};

export default ContactLinks
