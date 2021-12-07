/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { GatsbyContext } from '../context/context'

const Layout = ({ children }) => {
  // getting the object from context
  const { isSidebarOpen } = useContext(GatsbyContext)
  // console.log(data)

  return (
    <>
      <Navbar />
      {/* show me the sidebar only if isSidebarOpen is true */}
      {isSidebarOpen && <Sidebar />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
