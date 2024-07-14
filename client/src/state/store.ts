import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/state/api";


export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer},
  middleware: (getDefault) => getDefault().concat(api.middleware)
})
