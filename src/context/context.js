import React, { useState } from 'react'
import sublinks from '../constants/links'

// Set up context in react
const GatsbyContext = React.createContext()

// Provider, Consuner

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [links, setLinks] = useState(sublinks)

  // show sidebar
  const showSidebar = () => {
    setIsSidebarOpen(true)
  }

  // hide sidebar
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    // set object witch will share across all application
    // ex: if the property name = variable that holds the value line 28 = line 10
    <GatsbyContext.Provider
      value={{
        isSidebarOpen,
        links,
        showSidebar,
        hideSidebar,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
