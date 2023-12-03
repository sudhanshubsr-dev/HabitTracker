import { IoMdAddCircle } from "react-icons/io";
import HabitCard from "./HabitCard";
import { habitsSelector } from "../redux/reducers/habitsReducer";
import { useSelector } from "react-redux";
export default function SideBar({toggleHabitForm}) {

    const habits = useSelector(habitsSelector)
  return (
    <>
        <div className='sideBarContainer mt-24 ml-12 flex flex-col  w-fit i'>
            <div className='header flex justify-between items-center w-[460px] mb-10'>
                <div className='headerLeft ml-10' >
                    <h1 className='text-2xl font-poppins'>Habits</h1>
                </div>
                <div className='headerRight flex '>
                    <div className="addHabitText">
                        <h1 className="text-l font-poppins">Add Habit</h1>
                    </div>
                    <div className="addHabitButton">
                        <button onClick={toggleHabitForm}><IoMdAddCircle size={25} /></button>
                    </div>
                    
                </div>
            </div>
            <div className='habitList '>
                {habits.map((habit)=>{
                    return <HabitCard key={habit.id} habit={habit}/>
                })}
                
            </div>
        </div>
    </>
  )
}
