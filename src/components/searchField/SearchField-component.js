import React from 'react'

const SearchField = (props) => {
  return(
    <form onSubmit={props.getWaether}>
      <input type="text" placeholder="city..." name="city"/>
      <button>get weather</button>
    </form>
  )
}

export default SearchField;