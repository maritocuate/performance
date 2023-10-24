import React, { memo, useState } from 'react'

function Memo () {
  const [name, setName] = useState('')

  const names = [
    'Mark',
    'Eric'
  ]

  const getName = () => {
    const random = Math.floor(Math.random() * names.length)
    return names[random]
  }

  const clearName = () => {
    setName('')
  }

  const obtainName = () => {
    setName(getName())
  }

  return (
    <>
      <h2>Memo</h2>
      <RandomNames name={name} clearName={clearName} />
      <button onClick={obtainName}>
        Obtain Name
      </button>
    </>
  )
}
export default Memo

export const NameComponent = props => {
  return (
    <>
      <h2>{props.name}</h2>
      <button onClick={props.clearName}>
        Clear
      </button>
    </>
  )
}

function NamesAreEqual (prevProps, nextProps) {
  console.log('Checking memoization')
  return prevProps.name === nextProps.name
}

export const RandomNames = memo(NameComponent, NamesAreEqual)
