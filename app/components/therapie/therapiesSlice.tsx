import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface therapieType {
  //Elementi dell array interno
  id: string;
  nome: string;
  tipo: string;
  dataInizio: string;
  dataFine: string;
}

interface therapieState {
  //Elementi della Slice adattata a connettersi a DB
  items: therapieType[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: therapieState = {
  items: [],
  status: 'idle',
  error: null,
};

const terapieSlice = createSlice({
  name: 'terapie',
  initialState,
  reducers: {
    therapyInsert: (state, action: PayloadAction<therapieType>) => {
      state.items.push(action.payload);
    },

    therapyUpdate: (state, action: PayloadAction<therapieType>) => {
      const index = state.items.findIndex(
        (elemento) => elemento.id === action.payload.id
      ); //cerca elemento dentro state non serve if
      if (index !== -1)
        //Immer permette di modificare gli stati anche se sono immutabili, fa tutto lui
        state.items[index] = action.payload;
      },
    
      therapyDelete: (state, action: PayloadAction<string>) => {
          const index = state.items.findIndex((elemento) => elemento.id === action.payload);
          if (index !== -1)
              state.items.splice(index, 1);
    }
  },
});

export const { therapyInsert, therapyUpdate, therapyDelete } = terapieSlice.actions;/** questa riga esporta le azioni e le */

export default terapieSlice.reducer;
