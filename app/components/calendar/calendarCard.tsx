interface calendarCardProps {
  giorno: number;
  isCurrentMonth: boolean;
  index: number;
  giornoSettimana: number;
}

const CalendarCard = ({
  index,
  giorno,
  giornoSettimana,
  isCurrentMonth,
}: calendarCardProps) => {
  const getDayName = (giornoSettimana: number) => {
    switch (giornoSettimana) {
      case 1:
        return 'LUN';
      case 2:
        return 'MAR';
      case 3:
        return 'MER';
      case 4:
        return 'GIO';
      case 5:
        return 'VEN';
      case 6:
        return 'SAB';
      case 7:
        return 'DOM';
      default:
        return '';
    }
  };

  return (
    <div className="border-l-1">
      <div
        className={`${index === 34 ? 'rounded-e-lg ' : ''} ${isCurrentMonth ? 'bg-blue-500' : 'bg-blue-500/40'} pr-1 pl-1 h-15 text-center`}
      >
        <p className="text-sm">{getDayName(giornoSettimana)}</p>{' '}
        {/**Calcola il giorno della settimana */}
        <p className="text-base">{giorno}</p>
      </div>
    </div>
  );
};

export default CalendarCard;
