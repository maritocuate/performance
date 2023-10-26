import React, { useMemo, useCallback, useState } from 'react'

function HookMemo () {
  const [name, setName] = useState('')

  const names = [
    'Mark',
    'Eric'
  ]

  const getName = useCallback(() => {
    const random = Math.floor(Math.random() * names.length)
    return names[random]
  }, [names])

  const clearName = useCallback(() => {
    setName('')
  }, [])

  const obtainName = () => {
    setName(getName())
  }

  return (
    <>
      <h2>useMemo</h2>
      {
        useMemo(() => {
          console.log('Rendering memo')
          return <h2>{name}</h2>
        }, [name])
      }
      <button onClick={clearName}>
        Clear
        </button>
      <button onClick={obtainName}>
        Obtain Name
      </button>
    </>
  )
}
export default HookMemo
