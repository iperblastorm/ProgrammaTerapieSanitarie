import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface visiteType {
    id: number,
    impegno: string,
    data: string,
    tipo: string,
    ora: string
}

interface visitState {
    items: visiteType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: visitState = {
    items: [{
        id: 2,
        impegno: ' Visita elettrocardiogramma',
        tipo: 'bg-red-200',
        data: '2025-08-16',
        ora: '18:30'
    }],
    status: 'idle',
    error: null,
};

const visiteSlice = createSlice({
    name: 'visite',
    initialState,
    reducers: {
        inserisciImpegno: (state, action: PayloadAction<visiteType>) => {
            state.items.push(action.payload);
        },

        modificaImpegno: (state, action: PayloadAction<visiteType>) => {
            const index = state.items.findIndex(
                (elemento) => elemento.id === action.payload.id
            );
            if (index !== -1)
                state.items[index] = action.payload;
        },

        eliminaImpegno: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex((elemento) => elemento.id === action.payload);
            if (index !== -1)
                state.items.splice(index, 1);
        }
    }
})

const { inserisciImpegno, modificaImpegno, eliminaImpegno } = visiteSlice.actions;

export default visiteSlice.reducer;