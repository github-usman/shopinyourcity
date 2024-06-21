'use client'
import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";

const SearchBox = () => {
  const [input, setInput] = useState('');


  const addInputHadler = (e:any) => {
    e.preventDefault()
    setInput('');
  }
  return (
    <>
      <form onSubmit={addInputHadler} className={'search-box'}>
        <input type='text' value={input} className={'inputBtn'} placeholder='Search for products' onChange={e => setInput(e.target.value)} required />
        <button type='submit' className={'searchBtn'} onClick={addInputHadler}><GoSearch className={'searchIncon'} /></button>
      </form>
    </>
  )
}

export default SearchBox