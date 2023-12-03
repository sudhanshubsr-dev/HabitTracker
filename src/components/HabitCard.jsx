import { MdEdit, MdDelete } from "react-icons/md";
import { habitsActions } from "../redux/reducers/habitsReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import EditHabitForm from "./EditHabitForm";
import Calendar from "./Calendar";
export default function HabitCard({habit}) {

    const [edit, setEdit] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    const dispatch = useDispatch();

    function handleDeleteHabit() {
        dispatch(habitsActions.deleteHabit(habit.id));
    }

    function handleCalendar(){
        setShowCalendar(!showCalendar);
    }

    function handleEditHabit() {
        setEdit(!edit);
    }

  return (
    <>
        <div className='habitCardContainer flex justify-between border items-center w-[500px]  min-h-[45px] h-[auto] flex-wrap break-words bg-slate-400 rounded-md px-2 mt-2 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-100'>
            <div className="habitCardLeft">
                <div className="habitCardTitle flex-wrap break-words w-[200px]" onClick={handleCalendar} style={{cursor:"pointer"}}>
                    <h1 className="text-l font-poppins">{habit.title}</h1>
                </div>
            </div>
            <div className="habitCardCenter ">
                <div className="habitCardFrequency ">
                    <h1 className="text-l font-poppins">{habit.frequency}</h1>
                </div>
            </div>
            <div className="habitCardRight flex">
                <div className="editHabitButton mx-3">
                    <button onClick={()=>{handleEditHabit()}}><MdEdit /></button>
                </div>
                <div className="deleteHabitButton">
                    <button onClick={()=>handleDeleteHabit()}><MdDelete /></button>
                </div>
                </div>
        </div>
        {edit === true ? <EditHabitForm habit={habit} setEdit={setEdit}/> : null}
        {showCalendar ? <Calendar habit={habit} /> : null}
    </>
  )
}
