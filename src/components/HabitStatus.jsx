import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { habitsActions } from '../redux/reducers/habitsReducer';
export default function HabitStatus({ habit, selectedDay }) {
    const [habitStatus, setHabitStatus] = useState(null);
    const dispatch = useDispatch();

    function handleHabitStatus(e) {
        const selectedValue = e.target.value;
        setHabitStatus(selectedValue);
        dispatch(habitsActions.updateHabitStatus({id:habit.id, day:selectedDay, status:selectedValue}));
    }

    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select
                id="habitStatus"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 relative bottom-[395px] left-72"
                onChange={handleHabitStatus}
                value={habitStatus}
            >
                <option selected >Select Habit Status</option>
                <option value="Done">Done</option>
                <option value="Not Done">Not Done</option>
            </select>
        </>
    );
}
