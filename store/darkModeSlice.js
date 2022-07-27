import { createSlice } from '@reduxjs/toolkit'

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        isDarkMode: false,
    },
    reducers: {
        toggleDarkMode(state) {
        state.isDarkMode = !state.isDarkMode
        }
    }
})

export const darkModeActions = darkModeSlice.actions
export default darkModeSlice;
