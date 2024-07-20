import React, { useState,useEffect } from 'react'

export default function FilterBox({getMonthYear}) {
    const [selectedMonth,setSelectedMonth]=useState('January')
    const [selectedYear,setSelectedYear]=useState(2023)
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
    const renderMonth=()=>{
      return months.map((month,index)=>{
        return(<option className='p-2 font-bold m-6' key={index} value={month}>{month}</option>)
      })
    }
    const years=[2023,2024]
    const renderYear=()=>{
        return years.map((year,index)=>{
            return(<option className='p-2 font-bold m-6' key={index} value={year}>{year}</option>)
        })
    }
    useEffect(()=>{
      getMonthYear(selectedMonth,selectedYear)
    },[selectedMonth,selectedYear,getMonthYear])
  return (
    <div>
      <form className='flex flex-row justify-center space-x-11 align-center shadow-2xl mb-11 p-10'>
        <label className='font-extrabold text-4xl mr-11' htmlFor='month'>Month:
            <select value={selectedMonth}
            onChange={(e)=>setSelectedMonth(e.target.value)} className='font-bold ml-3 align-center text-lg'>{renderMonth()}</select>
        </label>
        <label className='font-extrabold text-4xl' htmlFor='year'>Year:
            <select value={selectedYear}
            onChange={(e)=>setSelectedYear(e.target.value)} className='font-bold ml-3 align-center text-lg'>{renderYear()}</select>
        </label>
      </form>
    </div>
  )
}
