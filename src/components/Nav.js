import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { colors } from '../styles/theme.js'

const navbar = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    background: ${colors.nav};
    width: 100%;
    height: calc(2em + 2vw);
    padding: 0.25em;
`

const navList = css`
    display: flex;
    z-index: 1000;
    a, li {
        color: ${colors.primary};
    }
    a {
      margin: 0 0.5em;
      text-decoration: none;
      font-weight: bold;
    }
`

const Nav = () => {
    return (
        <div css={navbar} role="navigation">
            <div></div>
            <ul css={navList}>
                <li><Link to="/">home</Link> /</li>
                <li><Link to="/work">work</Link> /</li>
                <li><Link to="/art">art</Link> /</li>
                <li><Link to="/Contact">contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav