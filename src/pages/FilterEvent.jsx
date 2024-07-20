import React, { useCallback, useState } from 'react'
import Navbar from '../Components/Navbar'
import FilterBox from '../Components/FilterBox'
import SearchEventList from '../Components/SearchEventList'

export default function FilterEvent() {
    const [monthYear,setMonthYear]=useState({
        selectedMonth:null,
        selectedYear:null
    })
    const getMonthYear=useCallback((selectedMonth,selectedYear)=>{
        setMonthYear({selectedMonth,selectedYear})
    },[])
  return (
    <div>
      <Navbar/>
      <FilterBox getMonthYear={getMonthYear}/>
      <SearchEventList monthYear={monthYear}/>
    </div>
  )
}
