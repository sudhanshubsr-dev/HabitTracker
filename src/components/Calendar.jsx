
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import HabitStatus from './HabitStatus'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from 'date-fns'
import { useState } from 'react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({habit}) {

  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let [habitStatusMenu, setHabitStatusMenu] = useState(false)


  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function handleButtonClick(day){
    console.log("day", format(day, 'dd-MM-yyyy'));
    console.log("selectedDay", selectedDay);
    // console.log("DateTime:", format(day, 'yyyy-MM-dd'));
    if (day > today){
      alert("You can't mark a day in the future!")
      return 
    }
    else if(selectedDay === today || selectedDay < today){
      setHabitStatusMenu(!habitStatusMenu)
    }
    setSelectedDay(day);
  }
// console.log(habit.habitStatus);
// console.log('habitStatus:', habitStatus);
// console.log('habitDay:', habitDay);
// console.log('selectedDay:', selectedDay);
// console.log('formattedSelectedDay:', format(selectedDay, 'dd-MM-yyyy'));
// console.log('isEqual:', isEqual(habitDay, format(selectedDay, 'dd-MM-yyyy')));


  return (
    <div className="pt-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => {handleButtonClick(day)}}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-red-500',
                       isToday(day) && ' text-red-600',
                      //  console.log('insideday', day),
                      
                      //  habitStatus === "Done" && format(day,'dd-MM-yyyy') === habitDay && 'bg-green-100 text-green-600',
          
                habit.habitStatus.some(
                  (habitStatus) =>
                    habitStatus.day === format(day, 'dd-MM-yyyy') &&
                    habitStatus.status === 'Done'
                ) &&
                'bg-green-100 text-green-600',
                habit.habitStatus.some(
                  (habitStatus) =>
                    habitStatus.day === format(day, 'dd-MM-yyyy') &&
                    habitStatus.status === 'Not Done'
                ) && 'bg-red-100 text-red-600',



                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                    
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )} 
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')} 
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {habitStatusMenu ? <HabitStatus habit={habit} selectedDay={format(selectedDay, 'dd-MM-yyy')}/> : null}
    
    </div>
    
  )
}



let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]
