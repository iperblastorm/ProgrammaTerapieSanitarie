import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '~/store';
import CalendarCard from './calendarCard';
import { useMemo } from 'react';
import { nextMonth, previousMonth } from './calendarSlice';

interface gridDayType {
  day: number;
  date: number;
  isCurrentMonth: boolean;
}

const Calendar = () => {
  //HOOK
  const currentDateTemp: string = useSelector(
    (state: RootState) => state.calendario.dataOdierna
  );
  const dispatch = useDispatch();

  //VARIABILI
  const currentDate: Date = new Date(currentDateTemp);
  //converto in formato data la stringa iso dataodierna
  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth();

  //OTTENGO ULTIMO GIORNO DEL MESE SCORSO SIA NUMERO CHE DATA
  const startDate: Date = new Date(year, month, 0);

  //POPOLAMENTO CALENDARIO
  const gridDay = useMemo(() => {
    const populatingGrid = () => {
      const finalGrid: gridDayType[] = [];

      for (let element = 0; element < 35; element++) {
        //AGGIORNA LA DATA
        const day = new Date(startDate);
        day.setDate(startDate.getDate() + element);

        //SE È DEL MESE CORRENTE
        const isCurrent = day.getMonth() === month ? true : false;
        //ESTRAPOLO IL GIORNO
        const currentDay = day.getDay() === 0 ? 7 : day.getDay();

        finalGrid.push({
          date: day.getDate(),
          day: currentDay,
          isCurrentMonth: isCurrent,
        });
      }
      return finalGrid;
    };
    return populatingGrid();
  }, [currentDate]);

  return (
    <>
      {/**PARTE SUPERIORE BOTTONI E DATA*/}
      <div className="w-full min-w-[600px]">
        <div className="flex place-content-between ml-70 mr-70 mb-1 bg-cyan-300/35 border-2 rounded-xl">
          <button
            className="m-1 ml-3 p-1 border-1 rounded-xl"
            onClick={() => dispatch(previousMonth())}
          >
            {'< Mese Precendente'}
          </button>
          <div className="flex grow justify-center-safe m-1 p-1">
            <p className="text-xl">
              {month + 1} - {year}
            </p>
          </div>
          <button
            className="m-1 mr-3 p-1 border-1 rounded-xl"
            onClick={() => dispatch(nextMonth())}
          >
            {'Mese Successivo >'}
          </button>
        </div>

        {/**PARTE CALENDARIO */}
        <div className="border-2 rounded-xl flex ">
          <div className={`w-26 h-15 rounded-s-lg bg-blue-500/40 text-center`}>
            <p className="mt-4">Terapia</p>
          </div>
          <div className="flex-1">
            <div className="grid grid-flow-col grid-cols-[repeat(35, minmax(0, 1fr));]">
              {gridDay.map((giorno, index) => (
                <CalendarCard
                  key={index}
                  index={index}
                  giorno={giorno.date}
                  giornoSettimana={giorno.day}
                  isCurrentMonth={giorno.isCurrentMonth}
                />
              ))}
            </div>
            <div className="bg-amber-300/50">
              <p>ggr</p>
              <p>ggr</p>
              <p>ggr</p>
              <p>ggr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
