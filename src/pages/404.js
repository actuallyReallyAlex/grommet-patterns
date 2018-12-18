import React from 'react'
import { Helmet } from 'react-helmet'
import { Box } from 'grommet'

import Layout from '../components/Layout'
import Section from '../components/Section'
import Header from '../components/Header'
import NomNom from '../components/svg/NomNom'

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>404 - Grommet Patterns</title>
        <meta
          name="description"
          content="Oops! This page can not be found. Please try a different address."
        />
        <style type="text/css">{`
        #gremlin {
          animation: slideUp 0.5s ease;
        }
        #chomp-mouth {
          opacity: 0;
          animation: fadeOut 0.5s infinite;
          animation-delay: 0.5s;
        }
        @keyframes fadeOut {
          0% {
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          51% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
          }
          50% {
            transform: translateY(0%);
          }
          80% {
            transform: translateY(2%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        `}</style>
      </Helmet>
      <Section>
        <Box>
          <Header label="404! Page not Found" />
          <Box pad="medium" align="center">
            <NomNom />
          </Box>
        </Box>
      </Section>
    </Layout>
  )
}

export default NotFoundPage
