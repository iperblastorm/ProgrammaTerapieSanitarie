import { useMemo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";
import StrisciaTerapia from "../terapie/terapieStrip";
import StrisciaVisite from "../visite/visiteStrip";


interface calendarCardProps {
  dataCompleta: string;
  giorno: number;
  isCurrentMonth: boolean;
}

const CalendarCard = ({
  dataCompleta,
  giorno,
  isCurrentMonth,
}: calendarCardProps) => {
  
  const terapie = useSelector((state: RootState) => state.terapie);
  const visite = useSelector((state: RootState) => state.visite);
  const giornoOdierno = new Date().toISOString().split('T')[0];

  const terapieAttive = useMemo(() => 

    terapie.items.filter((terapia) => 
      terapia.dataInizio <= dataCompleta && terapia.dataFine >= dataCompleta
    ), [dataCompleta, terapie])
  
  const visiteAttive = useMemo(() =>

    visite.items.filter((visita) =>
      visita.data == dataCompleta
    )
    , [dataCompleta,visite])


  return (
    <div className={`min-h-20 ${isCurrentMonth === true ? dataCompleta == giornoOdierno ? 'bg-green-300' : 'bg-blue-300' : 'bg-blue-100'}`}>

      <h2>{giorno}</h2>

      {terapieAttive.map((terapia) =>
        <StrisciaTerapia
          key={terapia.id}
          nome={terapia.nome}
          tipo={terapia.tipo}
          ora={terapia.ora} />
      )}

      {visiteAttive.map((visita) =>
        <StrisciaVisite
          key={visita.id}
          nome={visita.impegno}
          tipo={visita.tipo}
          ora={visita.ora}
        />
      )}
    </div>

  );
};

export default CalendarCard;
