import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
  name: "ai",
  initialState: {
    showAiSearch: false,
  },
  reducers: {
    toggleAISearchView: (state) => {
      state.showAiSearch = !state.showAiSearch;
    },
  },
});

export const { toggleAISearchView } = aiSlice.actions;
export default aiSlice.reducer;
