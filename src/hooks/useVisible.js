import React from 'react'

function useVisible(initialValue) {
  const [visible, setVisible] = React.useState(initialValue)
  const toggleVisible = () => setVisible(!visible)
  return [visible, toggleVisible]
}

export { useVisible }
