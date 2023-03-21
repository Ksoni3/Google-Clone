import React from 'react'
import GoogleImage from "../assets/google-logo.png"
import {AiFillSetting} from "react-icons/ai"
import SearchInput from './SearchInput'
import ProfileIcon from './ProfileIcon'

const SearchResultHeader = () => {
  return (
    <div className='flex justify-between items-center h-[100px] pl-8 pr-6 '>
    <div><img className='h-10' src={GoogleImage} /></div>
    
    <div>
    <SearchInput />
    </div>
    <div className='flex items-center gap-5'>
    <span className='h-8 w-8 rounded-full cursor-pointer hover:bg-black/[0.1]' >
    <AiFillSetting size={30} color="grey" />
    </span>
    <ProfileIcon />
    </div>
    </div>

  )
}

export default SearchResultHeader