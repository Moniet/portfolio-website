import React from 'react'
import { css } from '@emotion/core'
import { colors } from '../styles/theme.js'

const footer = css`
    display: flex;
    width: 100vw;
    height: calc(2rem + 5vw);
    background: ${colors.footer};
    align-items: center;
    z-index:1000;
    align-self: flex-end;
`

const ul = css`
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 100%;
    li a {
        color: ${colors.primary};
        text-decoration: none;
        letter-spacing: 2px;
        font-weight: bold;
    }
`

const Footer = () => {
    return (
        <footer role="footer" css={footer}>
            <ul css={ul}>
                <li><a href="https://github.com/moniet">Github</a></li>
                <li><a href="https://codepen.io/moniet">Codepen</a></li>
                <li><a href="https://twitter.com/__moniet">Twitter</a></li>
            </ul>
        </footer>
    )
}

export default Footer