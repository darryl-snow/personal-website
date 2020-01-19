import React from 'react'
import styled from 'styled-components'

import Context from './context'

import Intro from '../components/Intro'
import Layout from '../templates/layout'
import Modal from '../components/modal'
import SEO from '../components/seo'
import Snowfall from '../components/snowfall'

const PageProvider = Context.Provider

const VisionSection = styled.section`
  background: #74ebd5;
  background: -webkit-linear-gradient(to right, #74ebd5, #acb6e5);
  background: linear-gradient(to right, #74ebd5, #acb6e5);
  position: relative;

  &::before {
    background: rgb(250, 250, 250);
    background: linear-gradient(180deg, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0) 100%);
    content: '';
    height: 50%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const StrategySection = styled.section`
  background: #74ebd5;
  background: -webkit-linear-gradient(to right, #74ebd5, #acb6e5);
  background: linear-gradient(to right, #74ebd5, #acb6e5);
  position: relative;
`

class IndexPage extends React.Component {
  state = {
    page: {
      modalOpen: false,
    },
  }

  render() {
    return (
      <Layout>
        <SEO title="Darryl Snow: Digital Product Manager" />
        <PageProvider
          value={{
            state: this.state.page,
            actions: {
              toggleModal: () => {
                this.setState(() => ({
                  page: {
                    modalOpen: !this.state.page.modalOpen,
                  },
                }))
              },
            },
          }}
        >
          <section className="o-section">
            <Snowfall />
            <Intro />
          </section>
          <VisionSection className="o-section" />
          <StrategySection className="o-section" />
          <Modal isOpen={this.state.page.modalOpen} />
        </PageProvider>
      </Layout>
    )
  }
}

export default IndexPage
