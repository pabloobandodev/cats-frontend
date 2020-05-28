import React from 'react'

const AuthContext = React.createContext([null, () => {}])
AuthContext.displayName = 'AuthContext'

function AuthProvider(props) {
  const [id, setId] = React.useState(localStorage.getItem('id') || null)
  const value = React.useMemo(() => [id, setId], [id])
  return <AuthContext.Provider value={value} {...props} />
}

function useAuth() {
  return React.useContext(AuthContext)
}

export { AuthProvider, useAuth }
