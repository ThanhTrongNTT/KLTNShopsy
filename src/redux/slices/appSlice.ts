// Don't add any asynchronous logic or other "side effects" in reducer
// For example, logging a value to the console, ajax
// Just keep it simple
import { createSlice } from "@reduxjs/toolkit";
export interface AppState {
  initialState: boolean;
}
const initialState: AppState = {
  initialState: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export default appSlice.reducer;
