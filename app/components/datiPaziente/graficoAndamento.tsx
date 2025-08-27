import { useMemo } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface graficoProps {
  titolo: string;
  dati: dati[];
}

interface dati {
  data: string;
  ora: string;
  valore: number;
}

interface datiGrafico {
  etichetta: string;
  valoreMisurato: number;
}

const GraficoAndamento = ({ titolo, dati }: graficoProps) => {
  const valoriGrafico = useMemo(() => {
    const arrayFinale: datiGrafico[] = [];
    dati.map((elemento) => {
      arrayFinale.push({
        etichetta: `${elemento.data} ${elemento.ora}`,
        valoreMisurato: elemento.valore,
      });
    });
    return arrayFinale;
  }, [dati]);

  return (
    <>
        <div className="mb-2 font-bold text-center">
          <h1>{titolo}</h1>
        </div>
          <ResponsiveContainer width="100%" height="100%" className={"mb-5"}>
          <LineChart
            width={500}
            height={300}
            data={valoriGrafico}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="etichetta" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="valoreMisurato"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
    </>
  );
};

export default GraficoAndamento;
