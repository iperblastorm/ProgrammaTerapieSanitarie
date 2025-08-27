import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Risposte {
  domandaId: string;
  risposta: boolean;
}

interface CheckListCompilata {
  id: string;
  modelloId: string;
  dataCompilazione: string;
  oraCompilazione: string;
  risposte: Risposte[];
}

const initialState: CheckListCompilata [] = [ {
  id: '2025-08-26',
  modelloId: 'tracheostomia',
  dataCompilazione: '2025-08-25',
  oraCompilazione: '10:30',
  risposte: [
    { domandaId: 'tracheostomia_1', risposta: false },
    { domandaId: 'tracheostomia_2', risposta: true },
    { domandaId: 'tracheostomia_3', risposta: true },
    { domandaId: 'tracheostomia_4', risposta: false },
    { domandaId: 'tracheostomia_5', risposta: true },
    { domandaId: 'tracheostomia_6', risposta: true },
  ],
}];

const checkListSlice = createSlice({
    name: 'check',
    initialState,
    reducers: {
        aggiungiCheck: (state, action: PayloadAction<CheckListCompilata>) => {
            state.push(action.payload)
        }
    }
})
