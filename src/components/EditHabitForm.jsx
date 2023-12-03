import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { habitsActions } from '../redux/reducers/habitsReducer';

export default function EditHabitForm({habit, setEdit}) {

    console.log(habit)
    const [newHabitName, setNewHabitName] = useState(habit.title);
    const [newHabitFrequency, setNewHabitFrequency] = useState(habit.frequency);

    let newHabit = {
        "id": habit.id,
        "title": newHabitName,
        "frequency": newHabitFrequency
    }

    const dispatch = useDispatch();

    function handleEditHabit() {
        dispatch(habitsActions.updateHabit(newHabit))
        setEdit(false);

    }



  return (
    <>
        <div id="habitForm" className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md">
            <label htmlFor="habitName" className="mb-2 block text-gray-800">Habit Name:</label>
            <input type="text" id="habitName" placeholder="Enter habit name" className="w-full p-2 mb-2 border rounded" defaultValue={habit.title} value={newHabitName} onChange={(e)=>{setNewHabitName(e.target.value)}} />
  
            <label htmlFor="habitFrequency" className="mb-2 block text-gray-800">Frequency Per Week:</label>
            <input type="text" id="habitFrequency" placeholder="Enter frequency" className="w-full p-2 mb-4 border rounded" defaultValue={habit.frequency} value={newHabitFrequency} onChange={(e)=>{setNewHabitFrequency(e.target.value)}}/>
  
            <button className="bg-blue-500 text-white p-2 rounded" onClick={()=>{handleEditHabit()}} >Update Habit</button>
  
            <button  className="bg-gray-500 text-white p-2 rounded ml-2" onClick={()=>{setEdit(false)}}>Cancel</button>
          </div>
        </div>
      </>
  )
}
