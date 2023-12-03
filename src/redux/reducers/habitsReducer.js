import {createSlice, current } from '@reduxjs/toolkit';
const INITIAL_STATE = {
    habits: [
        {id: 1,
        title: 'Drink Water',
        frequency: 'Daily',
        habitStatus : [
            {
            day : '03-12-2023',
            status : 'Done'
        }
    ]
        },
        {
            id: 2,
            title: 'Eat Healthy',
            frequency: 'Daily',
            habitStatus : [
                {
                day : '03-12-2023',
                status : 'Done'
            }
        ]
        }
    ],
};



const habitsSlice = createSlice({
    name: 'habits',
    initialState: INITIAL_STATE,
    reducers:{
        addHabit: (state, action)=>{
            const {title, frequency} = action.payload;
            const newHabit = {
                id: new Date().getTime().toString(),
                title,
                frequency,
                createdOn: new Date().toDateString(),
                habitStatus:[]
            }
            // console.log('before', current(state));
            state.habits.push(newHabit);
            console.log('after', current(state)); //proxy object is displayed in the console log instead of the actual state object.
        },
        deleteHabit: (state, action)=>{
            state.habits = state.habits.filter((habit)=>habit.id !== action.payload);
        },
        updateHabit: (state,action)=>{
            const {id, title, frequency} = action.payload;
            const index = state.habits.findIndex((habit)=>habit.id === id);
            if(index !== -1){
                state.habits[index].title = title;
                state.habits[index].frequency = frequency;
            }
        },
        updateHabitStatus: (state, action) => {
            const { id, status, day } = action.payload;
            const index = state.habits.findIndex((habit) => habit.id === id);
            
            if (index !== -1) {
                // Check if there's already a status for the given day
                const existingDayIndex = state.habits[index].habitStatus.findIndex((habitStatus) => habitStatus.day === day);
        
                if (existingDayIndex !== -1) {
                    // Update existing status for the day
                    state.habits[index].habitStatus[existingDayIndex].status = status;
                } else {
                    // Add a new status object for the day
                    state.habits[index].habitStatus.push({ day, status });
                }
            }
            console.log('after', current(state)); //proxy object is displayed in the console log instead of the actual state object.
        },


    }
});

// Exporting the reducer and actions
export const habitsReducer = habitsSlice.reducer;
export const habitsActions = habitsSlice.actions;

// Exporting the selector
export const habitsSelector = (state) => state.habitsReducer.habits;
