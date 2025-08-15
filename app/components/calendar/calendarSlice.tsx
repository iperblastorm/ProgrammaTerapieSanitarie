import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface calendarSlice {
    dataOdierna: string;
}

const initialState: calendarSlice = {
    dataOdierna: new Date().toISOString()
};

const calendarSlice = createSlice({
    name: 'calendario',
    initialState,
    reducers: {
        nextMonth: (state) => {
            const newDate = new Date(state.dataOdierna);
            newDate.setMonth(newDate.getMonth() + 1);
            state.dataOdierna = newDate.toISOString();
        },

        previousMonth: (state) => {
            const newDate = new Date(state.dataOdierna);
            newDate.setMonth(newDate.getMonth() - 1);
            state.dataOdierna = newDate.toISOString();
        }
        
    }
})

export const { nextMonth, previousMonth } = calendarSlice.actions;

export default calendarSlice.reducer;