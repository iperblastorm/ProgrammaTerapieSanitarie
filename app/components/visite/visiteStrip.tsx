
interface visiteStripProp {
    nome: string,
    tipo: string,
    ora: string,
}

const StrisciaVisite = (visite: visiteStripProp) => {

    return (
        <div className={`${visite.tipo}`}>
            <p className="text-base font-bold">{visite.nome} - {visite.ora}</p>
        </div>
        
    );
}

export default StrisciaVisite;