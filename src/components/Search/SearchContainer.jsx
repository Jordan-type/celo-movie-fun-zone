import React from 'react'
import Search from './Search'
import ExitButton from '../Button/ExitButton'

function SearchContainer(props) {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
      <form 
       className={`search-container ${props.open ? 'open' : ''}`}
       onSubmit={handleSubmit}>
    <div className='search-container__box'>
        <input
         className='search-container__input'
         type='text'
         placeholder='Search...'
         aria-label='Search movies'/>
        <Search className={'search-container__search-button'} />
    </div>
    <ExitButton 
       className={'search-container__exit-button'} 
       close={props.close} />
    </form>
  )
}

export default SearchContainer