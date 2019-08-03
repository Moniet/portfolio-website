import React from 'react'
import { Global, css } from "@emotion/core"
import Nav from './Nav'
import Footer from './Footer'

const container = css`
    display: flex;
    flex-flow: row wrap;
    position: relative;
    width: 100vw;
    height: 100vh;
`

const Layout = ({ children }) => {
    return (
        <div css={ container }>
            <Nav />
                { children }
            <Footer />
        </div>
    )
}

export default Layout
