import React, { useState } from 'react'

const Drop = () => {
  const years=[2000,2001,2002,2003,2004,2005]
  const months=['January','Feburary', 'March','April','May','June','July','August'
  ,'September','October','November','December']
  const[selectedYear,setSelectedYear]=useState([]);
  const[selectedMonth,setSelectedMonth]=useState([]);
  const handleYearChange=(e)=>{
    const year = e.target.value;
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter((y) => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
    }
  }
  const handleMonthChange=(e)=>{
      setSelectedMonth(e.target.value)
  }
  return (
    <div>
      <h2>Select a Year:</h2>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">Select Year</option>
        {years.map((year) => (
          <label key={year}>
          <input
            type="checkbox"
            value={year}
            checked={selectedYears.includes(year)}
            onChange={handleYearChange}
          />
          {year}
          </label>
        ))}
      </select>
      <h2>Select a Month:</h2>
      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value="">Select Month</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Drop
