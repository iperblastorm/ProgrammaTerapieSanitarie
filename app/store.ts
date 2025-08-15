import { configureStore } from '@reduxjs/toolkit'
import patologieReducer from './slice/patologieSlice'
import calendarReducer from './components/calendar/calendarSlice'


export const store = configureStore({
  reducer: {
    patologie: patologieReducer,
    calendario: calendarReducer ,
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store