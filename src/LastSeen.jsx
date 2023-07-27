import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types'

function LastSeen (props) {
  LastSeen.propTypes = {
    url: PropTypes.string.isRequired
  }
  useEffect(() => console.log('useEffect'), [props.url])
  const [lastSeenDate, setLastSeenDate] = React.useState('')
  const url = 'https://migration-wp.epfl.ch/chaire-gaz-artificiel/'
  const fetchData = (url) => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data === 404) {
          this.setState({ lastSeen: { username: 'Error 404: This page does not exist', last_modified: '' } })
        } else if (data.data && data.data.status === 404) {
          this.setState({ lastSeen: { username: 'unexpected error: no information available on the API, is the plugin enabled on the website?' } })
        } else {
          this.setState({ lastSeen: data[0] })
        }
      })
      .catch(error => {
        console.log(error)
        this.setState({ lastSeen: { username: 'unexpected error: for unknown reasons no user was found, please contact 1234' } })
      })
  }
  return (
    <>
      <span>
      - Dernière modification le : {props.url}
      </span>
      {/* <span>
        {this.state.lastSeen === undefined || this.state.lastSeen.username === '' ? ' loading' : <><span>{this.state.lastSeen.last_modified} par </span><a href={`https://search.epfl.ch/?filter=people&q=${this.state.lastSeen.username}`}>{this.state.lastSeen.username}</a></>}
      </span> */}
      {/* <span>
        {this.state.lastSeen === undefined || this.state.lastSeen.username === '' ? ' loading' : <><span>{this.state.lastSeen.last_modified} par </span><a href={`https://search.epfl.ch/?filter=people&q=${this.state.lastSeen.username}`}>{this.state.lastSeen.username}</a></>}
      </span> */}
    </>
  )
}

export default LastSeen
