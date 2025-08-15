import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface patologiaState {
    nome: string;
    selezionato: boolean;
}
    
const initialState: patologiaState[] = [
    { nome: 'pressioneAlta', selezionato: false },
    { nome: 'diabete', selezionato: false }
];
    
const patologieSlice = createSlice({
    name: 'patologie',
    initialState,
    reducers: {
        isCheck: (state , action: PayloadAction<number>) => {
            const index = action.payload;
            if (state[index]) {
                state[index].selezionato = !state[index].selezionato;
            }
        }
    }
})

export const { isCheck } = patologieSlice.actions;

export default patologieSlice.reducer;