
interface strisciaProps {
    nome: string,
    tipo: string,
    ora: string
}

const StrisciaTerapia = (terapia: strisciaProps) => {
    return (
        <div className={`${terapia.tipo} border-t-1 border-b-1`}>
            <p className="text-base font-bold">{terapia.nome} - {terapia.ora}</p>
        </div>
        
    );
}

export default StrisciaTerapia;