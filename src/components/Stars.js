import React from 'react'
import { css } from '@emotion/core'

const roundStarColor = '#E7F280'

const roundStarsNum = 20
const diamondStarsNum = 5

const left = () => Math.floor(Math.random() * 26 + 4)
const right = () => Math.floor(Math.random() * 30 + 70)
const posLeft = () => left() % 2 === 0 ? left() : right()   
const posTop = () =>  Math.floor(Math.random() * 80 + 5)
const roundStarWidthHeight = () =>    Math.random() * 3 + 1
const diamondStarWidthHeight = () =>    Math.random() * 15 + 5

const diamondStar = css`
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 19 25' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='bevel' stroke-miterlimit='1.5'%3E%3Cg fill='%23fff'%3E%3Cpath d='M.325 12.369c5.317 2.114 9.141 5.213 9.033 12.045-.234-6.592 4.039-9.659 9.034-12.045H.325z'/%3E%3Cpath d='M.325 12.369C6.531 10.745 9.287 6.505 9.358.325c-.357 7.155 3.393 10.37 9.034 12.044-5.938.468-11.942.567-18.067 0z'/%3E%3C/g%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    z-index: 0;
`

const roundStar = css`
    position: absolute;
    background: ${roundStarColor};
    border-radius: 50%;
    z-index: 0;
`

const stars = css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
`

const Stars = () => {
    return  (
    
        <div css={stars}>
            { 
                Array(roundStarsNum).fill('').map((star, i) => { 
                    const widthHeight1 = roundStarWidthHeight()
                    const widthHeight2 = diamondStarWidthHeight()
                    return  (
                        <>
                            <div css={css`
                                ${roundStar} 
                                width: ${widthHeight1}px; 
                                height: ${widthHeight1}px;
                                left: ${posLeft()}vw;
                                top: ${posTop()}vh;
                                `
                            }></div>
                            { 
                                i < diamondStarsNum
                                ?  <div css={css`
                                    ${diamondStar} 
                                    width: ${widthHeight2}px; 
                                    height: ${widthHeight2}px;
                                    left: ${posLeft()}vw;
                                    top: ${posTop()}vh;
                                    `
                                }></div> 
                                : ''
                            }
                        </>
                    )
                }) 
            }
        </div> 
    
    )
}

export default Stars