/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from "../styles/globalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import Curtain from "./Curtain"
import Header from "./header"
import Sidebar from "./Sidebar"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Curtain />
        <GlobalStyle />
        <Sidebar />

        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
