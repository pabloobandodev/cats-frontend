import React from 'react'

function useRandomId() {
  const [id, setId] = React.useState(0)
  React.useEffect(() => setId(parseInt(Date.now())), [])
  return id
}

export { useRandomId }
