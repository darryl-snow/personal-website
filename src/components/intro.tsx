import React from 'react'
// @ts-ignore
// import { Watch } from 'scrollmonitor-react'
import styled from 'styled-components'

import Context from '../context/context'

import MetaInfo from './meta-info'
import ProfilePicture from './profile-picture'
import SocialLinks from './social-links'

const PageConsumer = Context.Consumer

const Container = styled.div`
  display: grid;
  grid-column-gap: 0;
  grid-row-gap: var(--spacing);
  grid-template-columns: 1fr;
  grid-template-rows: 200px auto;
  padding-top: 0.5rem;
  text-align: center;
  transition: 0.15s all ease-in-out;
  width: 100%;
  z-index: var(--z-index-page-content);

  h1 {
    transition: 0.15s font-size ease-in-out;
  }

  &.is-fixed {
    grid-template-rows: auto;
    position: fixed;
    top: 0;

    h1 {
      font-size: 1.5em;
    }
  }

  @media (min-width: 55em) {
    grid-column-gap: var(--spacing);
    grid-row-gap: 0;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    text-align: left;
    width: 75%;

    &.is-fixed {
      grid-template-columns: 3fr 5fr;
      position: fixed;
      top: 0;

      h1 {
        font-size: 3em;
      }
    }
  }
`

const ImageContainer = styled.div`
  border-radius: 100%;
  text-align: right;

  .gatsby-image-wrapper {
    margin: 0 auto;
    position: relative;
  }

  .gatsby-image-wrapper::before {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 100%;
    content: '';
    height: 95%;
    left: 3%;
    position: absolute;
    top: 6%;
    width: 95%;
  }

  .is-fixed & {
    display: none;
  }

  @media (min-width: 55em) {
    .gatsby-image-wrapper {
      margin: 0 0 0 auto;
    }

    .is-fixed & {
      display: block;
    }
  }
`

const Tagline = styled.p`
  font-size: 1.25em;
  margin: 0.5rem 0.1em;
  transition: 0.15s opacity ease-in-out;

  @media (min-width: 55em) {
    font-size: 2em;
  }

  .is-fixed & {
    opacity: 0;
    pointer-events: none;
    transition: 0.3s 0.15s opacity ease-in-out;
  }
`
type Props = {
  isFullyInViewport: boolean
}

class Intro extends React.Component<Props> {
  render() {
    const isFixed = this.props.isFullyInViewport ? '' : 'is-fixed'
    const imageStyles = this.props.isFullyInViewport
      ? {
          borderRadius: '100%',
          maxWidth: '200px',
          textAlign: 'right',
          transition: '0.3s all ease-in-out',
        }
      : {
          borderRadius: '100%',
          maxWidth: '80px',
          textAlign: 'right',
          transition: '0.3s all ease-in-out',
        }
    return (
      <PageConsumer>
        {(context: any) => (
          <Container className={isFixed}>
            <ImageContainer>
              <ProfilePicture styles={imageStyles} handleClick={context.actions.toggleModal} />
            </ImageContainer>
            <div>
              <h1>Darryl Snow</h1>
              <Tagline>Digital Product Manager</Tagline>
              <SocialLinks />
              <MetaInfo />
            </div>
          </Container>
        )}
      </PageConsumer>
    )
  }
}

export default Intro
