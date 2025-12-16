import React from 'react'
import userContext from './UserContext'
import Profile from './Profile'
function App() {
  const value="suhas"
  return (
    <userContext.Provider value="suhas">
      <Profile/>
    </userContext.Provider>
  )
}

export default App