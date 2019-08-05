import React from "react"
import { colors } from '../styles/theme.js'
import { css, keyframes } from '@emotion/core'
import Layout from '../components/Layout'
import Stars from '../components/Stars'
import facepaint from 'facepaint'

const animDelay = () => (Math.random() * 2) + 0.25;
const breakpoints = [576, 768, 992, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const astronautAnim = keyframes`
    0%, 100% {
      transform: translateY(-4px);
    }
    50% {
      transform: translateY(4px);
    }
`

const pageContainer = css`
  width: 100%;
  height: 100%;
  background: ${colors.black};
  display: flex;
  position: relative;
`

const textContainer = css`
  align-self: center;
  margin: -15rem auto 0 auto;
  width: 50vw;
  height: 25vw;
  overflow-wrap: normal;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  ${mq({
    margin: ['-20rem auto 0 auto', '-25rem auto 0 auto', '-20rem auto 0 auto', '-10rem auto 0 auto'],
    width: ['70vw', '60vw', '60vw', '50vw']
  })}
`

const h1 = css`
  font-family: 'Poppins', sans-serif;
  font-size: 2.441rem;
  font-weight: 900;
  font-style: normal;
  color: ${colors.textLight};
  letter-spacing: 2px;
  margin-right: -2em;
  margin-bottom: 2rem;
  transform: rotate(-10deg);
  grid-column: span 2;
  grid-row: 1;
  z-index: 500;
  ${mq({
    fontSize: ['1.563rem', '1.563rem', '2.441rem', '2.441rem']
  })}
`
const introText = css`
  grid-row: 2;
  grid-column: span 2;
  font-family: 'Nunito', sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  font-style: normal;
  color: ${colors.textLight};
  line-height: 1.5em;
  letter-spacing: 2px;
  margin: 3rem 0 0 2rem;
  transform: rotate(-5deg);
  z-index: 500;
  ${mq({
    fontSize: ['0.75rem', '1rem', '1.25rem'],
    margin: ['0rem 0 2rem 1.5rem', '1rem 0 0 2rem', '2rem 0 0 2rem']
  })}
`
const largeMoon = css`
  position: absolute;
  width: 20rem;
  bottom: 10vw;
  transform: translateX(-65%);
  z-index: 100;
  ${mq({
    bottom: ['10vw', '20vw', '15vw', '10vw'],
    width: ['60vw', '10rem', '15rem', '20rem']
  })}
`

const smallMoon = css`
  position: absolute;
  right: 5vw;
  top: 10vw;
  width: 4rem;
  z-index: 200;
  ${mq({
    width: ['2rem', '2rem', '4rem', '4rem']
  })}
`

const planet = css`
  position: absolute;
  right: -20vw;
  bottom: -2vw;
  width: 40vw;
  transform: rotate(15deg);
  background: ${colors.black};
  z-index: 200;  
  ${mq({
    width: ['60vw', '60vw', '40vw', '40vw'],
    right: ['-30vw', '-30vw', '-20vw', '-20vw']
  })}
`

const astronaut = css`
  width: 10rem;
  margin-left: -10vw;
  animation: ${astronautAnim} 4s ease-in-out ${animDelay()}s infinite;
  z-index: 200;
  grid-column: 1;
  grid-row: 5;
`

const IndexPage = () => (
  <Layout>
    <div css={pageContainer}>
      <div css={textContainer}>
        <h1 css={h1}>Hi there!<br /> I'm Moniet. A Full Stack Developer.</h1>
        <p css={introText}>
        I am passionate all things design and love transforming design into websites using clean semantic code. I am obsessed with SVG and often use it to create interactive UIs
        </p>
        <img src={ require('../images/astronaut.svg')} css={astronaut} alt="Minimalist illustration of an astronaut"/>
      </div>
        <img src={ require('../images/moon-lg.svg')} css={largeMoon} alt="Illustration of a Moon"/>
        <img src={ require('../images/moon-sm.svg')} css={smallMoon} alt="Illustration of a small Moon at a distance"/>
        <img src={ require('../images/planet.svg')} css={planet} alt="Illustration of a blue planet with orbiting rings" />
      <Stars />
    </div>
  </Layout>
)

export default IndexPage
