import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import SearchResultHeader from './SearchResultHeader'
import Footer from './Footer'
import SearchedImageItemTemplate from './SearchedImageItemTemplate'
import SearchedItemtemplate from './SearchedItemTemplate'


const SearchResult = () => {
  return (
    <div className='flex flex-col min-h-[100vh]'>
        <SearchResultHeader />
        <main className='grow p-[12px] pb-0 md:pr-5 md:pl-20'>

        </main>
        <Footer/>
    </div>
  )
}

export default SearchResult