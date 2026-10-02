import React, { useState } from 'react'
import './Calendar.css'

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 9, 1))
  const [selectedDate, setSelectedDate] = useState(null)

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleToday = () => {
    setCurrentDate(new Date())
  }

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const monthName = currentDate.toLocaleDateString('ko-KR', { month: 'long', year: 'numeric' })
  const dayNames = ['일', '월', '화', '수', '목', '금', '토']

  const days = []
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <h1>{monthName}</h1>
          <div className="controls">
            <button onClick={handlePrevMonth} className="btn-nav">◀</button>
            <button onClick={handleToday} className="btn-today">오늘</button>
            <button onClick={handleNextMonth} className="btn-nav">▶</button>
          </div>
        </div>

        <div className="calendar-days-header">
          {dayNames.map((day, index) => (
            <div
              key={index}
              className={`day-header ${index === 0 ? 'sunday' : index === 6 ? 'saturday' : ''}`}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="calendar-grid">
          {days.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${!day ? 'empty' : ''} ${
                selectedDate &&
                day === selectedDate.getDate() &&
                currentDate.getMonth() === selectedDate.getMonth() &&
                currentDate.getFullYear() === selectedDate.getFullYear()
                  ? 'selected'
                  : ''
              } ${
                day && new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString() === new Date().toDateString()
                  ? 'today'
                  : ''
              }`}
              onClick={() => day && handleDateClick(day)}
            >
              {day}
            </div>
          ))}
        </div>

        {selectedDate && (
          <div className="selected-info">
            선택된 날짜: <strong>{selectedDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>
          </div>
        )}
      </div>
    </div>
  )
}

export default Calendar
