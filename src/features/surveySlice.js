import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    country: '',
    temperature: '',
    email: '',
    color: '',
}

const surveySlice = createSlice({
    name: "survey",
    initialState,
    reducers: {

        updateForm: (state, { payload }) => {
            state.name = payload.userName;
            state.country = payload.country;
            state.temperature = payload.temperature;
            state.email = payload.email;
            state.color = payload.color;

        },
        reset: (state, { payload }) => {
            state.name = payload.name;
            state.country = payload.country;
            state.temperature = payload.temperature;
            state.email = payload.email;
            state.color = payload.color;
        }
    }
});

export const { updateForm, reset } = surveySlice.actions;
export default surveySlice.reducer;