import { habitsActions } from "../redux/reducers/habitsReducer";
import { useDispatch } from "react-redux";



export default function HabitForm({showHabitForm, toggleHabitForm, habitName, setHabitName, habitFrequency, setHabitFrequency}) {
    const dispatch = useDispatch();
    

    function handleHabitNameChange(e) {
        setHabitName(e.target.value);
    }

    function handleHabitFrequencyChange(e) {
        setHabitFrequency(e.target.value);
    }

    function handleaddHabit() {
        dispatch(habitsActions.addHabit({title:habitName, frequency: habitFrequency}));
        toggleHabitForm();
        setHabitName("");
        setHabitFrequency('');
    }


    
  
    return (
      <>
        <div id="habitForm" className={`${showHabitForm ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center`}>
          <div className="bg-white p-4 rounded shadow-md">
            <label htmlFor="habitName" className="mb-2 block text-gray-800">Habit Name:</label>
            <input type="text" id="habitName" placeholder="Enter habit name" className="w-full p-2 mb-2 border rounded" value={habitName} onChange={(e)=>{handleHabitNameChange(e)}}/>
  
            <label htmlFor="habitFrequency" className="mb-2 block text-gray-800">Frequency Per Week:</label>
            <input type="number" id="habitFrequency" placeholder="Enter frequency" className="w-full p-2 mb-4 border rounded" value={habitFrequency} onChange={(e)=>{handleHabitFrequencyChange(e)}}/>
  
            <button className="bg-blue-500 text-white p-2 rounded" onClick={handleaddHabit}>Add Habit</button>
  
            <button onClick={toggleHabitForm} className="bg-gray-500 text-white p-2 rounded ml-2">Cancel</button>
          </div>
        </div>
      </>
    );
  }
  