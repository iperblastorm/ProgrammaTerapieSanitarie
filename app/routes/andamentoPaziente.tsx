import GraficoAndamento from "~/components/datiPaziente/graficoAndamento";
import { selezionaTuttiIParamentri } from "~/components/datiPaziente/datiPazienteSlice";
import { useSelector } from "react-redux";


const andamentoPaziente = () => {

    const datiGrafico = useSelector(selezionaTuttiIParamentri);

    return (
        <div className="h-full w-full min-w-[900px]">
            {datiGrafico.map((elemento) =>
                <GraficoAndamento
                    key={elemento.id}
                    titolo={elemento.nome}
                    dati={elemento.letture} />
            )}
        </div>
    )
}

export default andamentoPaziente;