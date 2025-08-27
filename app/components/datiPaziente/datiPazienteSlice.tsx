import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { data } from 'react-router';

interface lettureType {
  data: string;
  ora: string;
  valore: number;
}

interface datiType {
  id: string;
  nome: string;
  unita: string;
  letture: lettureType[];
}

interface modificaPayload {
  id: string;
  lettura: lettureType;
}

interface removePayload {
  id: string;
  data: string;
  ora: string;
}

const initialState: datiType[] = [
  {
    id: '1',
    nome: 'BATTITO',
    unita: 'bpm',
    letture: [
      { data: '2025-08-24', ora: '12:30', valore: 2 },
      { data: '2025-08-24', ora: '12:37', valore: 5 },
      { data: '2025-08-25', ora: '12:30', valore: 8 },
      { data: '2025-08-26', ora: '12:30', valore: 2 },
      { data: '2025-08-27', ora: '12:30', valore: 6 },
    ],
  },
  {
    id: '2',
    nome: 'RESPIRAZIONE',
    unita: 'bpm',
    letture: [
      { data: '2025-08-24', ora: '12:30', valore: 2 },
      { data: '2025-08-24', ora: '12:37', valore: 5 },
      { data: '2025-08-25', ora: '12:30', valore: 8 },
      { data: '2025-08-26', ora: '12:30', valore: 2 },
      { data: '2025-08-27', ora: '12:30', valore: 6 },
    ],
  },
  {
    id: '3',
    nome: 'GLICEMIA',
    unita: 'bpm',
    letture: [
      { data: '2025-08-24', ora: '12:30', valore: 2 },
      { data: '2025-08-24', ora: '12:37', valore: 5 },
      { data: '2025-08-25', ora: '12:30', valore: 8 },
      { data: '2025-08-26', ora: '12:30', valore: 2 },
      { data: '2025-08-27', ora: '12:30', valore: 6 },
    ],
  },
];

const datiPazienteSlice = createSlice({
  name: 'datiPaziente',
  initialState,
  reducers: {
    aggiungiLettura: (state, action: PayloadAction<modificaPayload>) => {
      const nuovaLettura = action.payload.lettura;
      const dati = state.find((elemento) => elemento.id === action.payload.id);

      if (dati !== undefined) {
        dati.letture.push(nuovaLettura);
      }
    },

    rimuoviLettura: (state, action: PayloadAction<removePayload>) => {
      const dati = state.find((elemento) => elemento.id === action.payload.id);

      if (dati !== undefined) {
        const index = dati.letture.findIndex(
          (elemento) =>
            elemento.data === action.payload.data &&
            elemento.ora === action.payload.ora
        );
        if (index !== -1) {
          dati.letture.splice(index, 1);
        }
      }
    },
  },
});

export const selezionaTuttiIParamentri = (state: RootState) => state.datiPaziente;

const { aggiungiLettura, rimuoviLettura } = datiPazienteSlice.actions;

export default datiPazienteSlice.reducer;
