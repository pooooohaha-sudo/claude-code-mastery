import React, { useState } from 'react'

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

  const isToday = (day) => {
    if (!day) return false
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString() === new Date().toDateString()
  }

  const isSelected = (day) => {
    if (!day || !selectedDate) return false
    return (
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    )
  }

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{monthName}</h1>
          <div className="flex gap-3 justify-center">
            <button
              onClick={handlePrevMonth}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 hover:bg-gray-300 transition-all hover:scale-105 text-lg font-semibold text-gray-700"
            >
              ◀
            </button>
            <button
              onClick={handleToday}
              className="px-5 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-all hover:scale-105 font-semibold"
            >
              오늘
            </button>
            <button
              onClick={handleNextMonth}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 hover:bg-gray-300 transition-all hover:scale-105 text-lg font-semibold text-gray-700"
            >
              ▶
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((day, index) => (
            <div
              key={index}
              className={`text-center font-bold text-xs p-2 ${
                index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : 'text-gray-600'
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 mb-6">
          {days.map((day, index) => (
            <div
              key={index}
              className={`aspect-square flex items-center justify-center rounded-lg font-semibold text-sm transition-all ${
                !day
                  ? 'cursor-default'
                  : isSelected(day)
                    ? 'bg-purple-500 text-white scale-110'
                    : isToday(day)
                      ? 'bg-yellow-300 text-gray-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:scale-105 cursor-pointer'
              }`}
              onClick={() => day && handleDateClick(day)}
            >
              {day}
            </div>
          ))}
        </div>

        {selectedDate && (
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <p className="text-gray-700 text-sm">선택된 날짜:</p>
            <p className="text-purple-600 font-bold text-lg">
              {selectedDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Calendar
