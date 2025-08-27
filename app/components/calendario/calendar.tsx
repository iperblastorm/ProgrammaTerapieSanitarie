import { Fragment, useMemo, useState } from 'react';
import CalendarCard from './calendarCard';

interface gridDayType {
  dataCompleta: string;
  giorno: number;
  isCurrentMonth: boolean;
}

const Calendar = () => {
  //STATO DATA CORRENTE
  const [dataCorrente, setDataCorrente] = useState(new Date());

  const anno = dataCorrente.getFullYear();
  const mese = dataCorrente.getMonth();

  const grigliaGiorni = useMemo(() => {

    const arrayFinale: gridDayType[] = [];

    const primoGiornoDelMese = new Date(anno, mese, 1);

    const giornoSettimanaInizioMese = primoGiornoDelMese.getDay();
    const offsetInizioGriglia = giornoSettimanaInizioMese === 0 ? 6 : giornoSettimanaInizioMese - 1;

    const dataInizioGriglia = new Date(Date.UTC(anno,mese,1)); //CREO IN UTC SENNO PROBLEMA CON GIORNO TERAPIA
    dataInizioGriglia.setDate(dataInizioGriglia.getDate() - offsetInizioGriglia);

    for (let contatore = 0; contatore < 42; contatore++){
      
      arrayFinale.push({
        //PRENDO IL GIORNO, LO TRASFORMO IN STRINGA LA DIVIDO NELLA T E PRENDO LA PRIMA PARTE [0]  ESEMPIO STRINGA : 'AAA-MM-GG T 00:00:00:000Z'
        dataCompleta: dataInizioGriglia.toISOString().split('T')[0],
        giorno: dataInizioGriglia.getDate(),
        isCurrentMonth: dataInizioGriglia.getMonth() === mese,
      });

      dataInizioGriglia.setDate(dataInizioGriglia.getDate() + 1);
    }

    return arrayFinale;
  }, [dataCorrente]);

  return (
    <div className="flex flex-col min-w-[900px]">
      <div className="bg-blue-300 flex w-full h-15 rounded-xl text-black">
        <button className="border-2 rounded-xl m-3 flex-none">
          Precedente
        </button>
        <label className="grow text-center mt-4 text-2xl">{mese + 1} - {anno} </label>
        <button className="flex-none m-3 border-2 rounded-xl">
          Successivo
        </button>
      </div>
      <div className="border-2 bg-white rounded-xl w-full grid grid-cols-7 text-center text-2xl divide-y-1 divide-x-2 text-zinc-700">
        <Fragment>
          <h1>Lunedi</h1>
          <h1>Martedi</h1>
          <h1>Mercoledi</h1>
          <h1>Giovedi</h1>
          <h1>Venerdi</h1>
          <h1>Sabato</h1>
          <h1>Domenica</h1>
        </Fragment>
        {grigliaGiorni.map((giorni, index) => (
          <CalendarCard
            key={giorni.dataCompleta}
            dataCompleta={giorni.dataCompleta}
            giorno={giorni.giorno}
            isCurrentMonth={giorni.isCurrentMonth}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
