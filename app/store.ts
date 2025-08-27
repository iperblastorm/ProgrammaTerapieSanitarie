import { configureStore } from '@reduxjs/toolkit'
import patologieReducer from './components/patologie/patologieSlice'
import terapieReducer from './components/terapie/terapieSlice'
import visiteReducer from './components/visite/visiteSlice'
import datiPaziente from './components/datiPaziente/datiPazienteSlice'


export const store = configureStore({
  reducer: {
    patologie: patologieReducer,
    terapie: terapieReducer,
    visite: visiteReducer,
    datiPaziente: datiPaziente,
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store