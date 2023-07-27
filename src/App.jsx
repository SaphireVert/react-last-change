import React, { useState } from 'react'
import LastSeen from './LastSeen'

function App () {
  const [url, setUrl] = useState('default')
  const handleChange = (e) => {
    setUrl(e.target.value)
  }
  return (
    <>
      <select name="choice" onChange={handleChange}>
        <option value="" defaultValue>default</option>
        <option value="https://migration-wp.epfl.ch/chaire-gaz-artificiel/wp-json/epfl/v1/lastchange?url=https://migration-wp.epfl.ch/chaire-gaz-artificiel">Valide</option>
        <option value="https://migration-wp.epfl.ch/chaire-gaz-artificiel/wp-json/epfl/v1/lastchange?url=https://migration-wp.epfl.ch/chaire-gaz-artificiel/abc">N&apos;existe pas</option>
        <option value="https://inside-test.epfl.ch/ae/wp-json/epfl/v1/lastchange?url=https://inside-test.epfl.ch/ae/">AE</option>
      </select>
      <LastSeen url={url}/>
    </>
  )
}

export default App
