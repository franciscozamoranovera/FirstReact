import React from 'react'

const FooterLinks = (props) => {
    return (
    
            <a href={props.href} target={props.target} >{props.children}</a>

    )
}

export default FooterLinks
