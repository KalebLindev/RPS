import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userPicks: ["rock", "paper", "scissors", "spock", "lizard"]
}

const pickSlice = createSlice({
    name: 'picks',
    initialState,
})

// export const {} = pickSlice.actions
export default pickSlice.reducer