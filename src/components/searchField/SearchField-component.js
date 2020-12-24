import React from 'react'

const SearchField = (props) => {
  return(
    <form onSubmit={props.getWaether}>
      <input type="text" placeholder="city..." name="city"/>
      <input type="text" placeholder="country..." name="country"/>
      <button>get weather</button>
    </form>
  )
}

export default SearchField;