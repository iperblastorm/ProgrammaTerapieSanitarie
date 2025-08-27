import React, { useState } from 'react';

// --- DATI DI ESEMPIO ---
// Questo simula il "modello" della checklist
const MODELLO_CHECKLIST = {
  titolo: 'CHECK LIST TRACHEOSTOMIA',
  fasi: [
    {
      titoloFase: '1) PREPARAZIONE MATERIALE',
      items: [
        { id: 'mat_1', testo: 'arcella' }, { id: 'mat_2', testo: 'contenitore per controcannula' },
        { id: 'mat_3', testo: 'acqua ossigenata' }, { id: 'mat_4', testo: 'soluzione fisiologica/bidistillata' },
        { id: 'mat_5', testo: 'antisettico' }, { id: 'mat_6', testo: 'materiale di pulizia (spazzolini, scovolini)' },
        { id: 'mat_7', testo: 'controcannula di sostituzione' }, { id: 'mat_8', testo: 'garze sterili' },
        { id: 'mat_9', testo: 'guanti monouso' }, { id: 'mat_10', testo: 'mascherina e occhialini protettiva' },
        { id: 'mat_11', testo: 'medicazione per tracheostomia' }, { id: 'mat_12', testo: 'fissatracheo' },
        { id: 'mat_13', testo: 'traversa monouso' }, { id: 'mat_14', testo: 'contenitore smaltimento rifiuti' },
      ],
    },
    {
      titoloFase: '2) LAVAGGIO DELLE MANI',
      items: [{ id: 'lav_1', testo: 'lavaggio antisettico delle mani' }],
    },
    // ... Aggiungi le altre fasi qui
  ],
};

// Questo simula lo storico delle checklist prese dalla slice Redux
const STORICO_ESEMPIO = [
  {
    id: 'comp_1',
    dataCompilazione: '2025-08-25',
    oraCompilazione: '10:30',
    risposte: { 'mat_1': true, 'mat_2': true, 'mat_3': false, 'lav_1': true }
  },
  {
    id: 'comp_2',
    dataCompilazione: '2025-08-24',
    oraCompilazione: '09:15',
    risposte: { 'mat_1': true, 'mat_2': false, 'mat_3': true, 'lav_1': true }
  },
];
// --- FINE DATI DI ESEMPIO ---


const PaginaChecklistCompleta = () => {
  const [checklistSelezionata, setChecklistSelezionata] = useState(STORICO_ESEMPIO[0]);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 font-sans min-w-[600px]">

      {/* --- SEZIONE 1: FORM DELLA NUOVA CHECKLIST --- */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold  mb-2">{MODELLO_CHECKLIST.titolo}</h1>
        <p className="text-lg  mb-6">Compila la checklist per la procedura odierna.</p>

        {/* Input Data e Ora */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 border rounded-lg">
            <div className="flex-1">
                <label htmlFor="data-checklist" className="block text-sm font-medium  mb-1">Data</label>
                <input id="data-checklist" type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div className="flex-1">
                <label htmlFor="ora-checklist" className="block text-sm font-medium  mb-1">Ora</label>
                <input id="ora-checklist" type="time" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            </div>
        </div>
        
        {/* Corpo della Checklist da Compilare */}
        <div className="space-y-8">
            {MODELLO_CHECKLIST.fasi.map(fase => (
                <div key={fase.titoloFase}>
                    <h2 className="text-xl font-semibold  border-b-2 border-blue-500 pb-2 mb-4">{fase.titoloFase}</h2>
                    <div className="space-y-3">
                        {fase.items.map(item => (
                            <div key={item.id} className="flex items-center p-2 rounded-md transition-colors duration-200 hover:bg-blue-50">
                                <input id={item.id} type="checkbox" className="h-5 w-5 rounded border-gray-400 text-blue-600 focus:ring-blue-500 mr-4"/>
                                <label htmlFor={item.id} className="flex-grow cursor-pointer select-none ">
                                    {item.testo}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-8 flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
                Salva Checklist
            </button>
        </div>
      </div>


      {/* --- SEZIONE 2: STORICO DELLE CHECKLIST PASSATE --- */}
      <div className="mt-16 pt-8 border-t-2 border-gray-200">
        <h2 className="text-3xl font-bold  mb-6">Storico CheckList</h2>

        <div className="flex flex-col md:flex-row gap-8">

            {/* Colonna Sinistra: Elenco selezionabile */}
            <div className="md:w-1/3">
                <h3 className="text-lg font-semibold  mb-2">Seleziona una checklist</h3>
                <div className="space-y-2">
                    {STORICO_ESEMPIO.map(checklist => (
                        <button 
                            key={checklist.id}
                            onClick={() => setChecklistSelezionata(checklist)}
                            className={`w-full text-left p-3 rounded-md transition-colors duration-200 ${
                                checklistSelezionata.id === checklist.id 
                                ? 'bg-blue-500 shadow' 
                                : ' hover:bg-gray-200 '
                            }`}
                        >
                            Compilazione del {checklist.dataCompilazione} - {checklist.oraCompilazione}
                        </button>
                    ))}
                </div>
            </div>

            {/* Colonna Destra: Dettaglio della checklist selezionata */}
            <div className="md:w-2/3">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Dettaglio del {checklistSelezionata.dataCompilazione}
                </h3>
                <div className="border rounded-lg p-4 space-y-3  bg-white">
                    {MODELLO_CHECKLIST.fasi.flatMap(fase => fase.items).map(item => (
                        <div key={item.id} className="flex items-center">
                            <input 
                                type="checkbox" 
                                readOnly 
                                checked={checklistSelezionata.risposte[item.id] || false} 
                                className="h-5 w-5 rounded border-gray-400 text-blue-600 focus:ring-blue-500 mr-4 disabled:opacity-75"
                                disabled
                            />
                            <span className="text-gray-700">{item.testo}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>

    </div>
  );
};

export default PaginaChecklistCompleta;