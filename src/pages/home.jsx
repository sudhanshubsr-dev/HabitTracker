import SideBar from "../components/SideBar"
import HabitForm from "../components/HabitForm"
import { useState } from "react";
import Illustration from "../components/Illustration";
export default function Home() {


    const [showHabitForm, setShowHabitForm] = useState(false);
    const [showEditHabitForm, setShowEditHabitForm] = useState(false); 

    const [habitName, setHabitName] = useState("");
    const [habitFrequency, setHabitFrequency] = useState('');


    
    const toggleHabitForm = () => {
        // Your toggleHabitForm logic here
        console.log("toggleHabitForm");
        setShowHabitForm(!showHabitForm);
      };
    

  return (
    <>
    <Illustration />
    <SideBar showHabitForm={showHabitForm} setShowHabitForm={setShowHabitForm} toggleHabitForm={toggleHabitForm} showEditHabitForm={showEditHabitForm} setShowEditHabitForm={setShowEditHabitForm} />

    <HabitForm showHabitForm={showHabitForm} setShowHabitForm={setShowHabitForm} toggleHabitForm={toggleHabitForm} habitName={habitName} setHabitName={setHabitName} habitFrequency={habitFrequency} setHabitFrequency={setHabitFrequency}/>
    
   
    
    
    </>
    
  )
}
