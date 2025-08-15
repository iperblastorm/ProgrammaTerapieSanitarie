import React from "react";
import { index } from "@react-router/dev/routes";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import type { RootState } from '../store';
import { isCheck } from '../slice/patologieSlice';


const InserisciDati = () => {
    const patologie = useSelector((state: RootState) => state.patologie);
    const dispatch = useDispatch();
    const ceckPatologie = (index: number) => {
        dispatch(isCheck(index));
    }


  return (
    <div>
        <form className="border-blue-600/20 bg-blue-400/30 mb-3">
            <div className="flex justify-center">
            <h1 className="text-2xl mb-2">Dati Personali</h1>
        </div>
            <div className="flex justify-center">
                <label className="pr-2 m-1 w-11" htmlFor="nome">Nome</label>
                <input type="text" id="nome" className="bg-blue-400/20 m-1 mr-3 w-30"></input>
                  
                <label className="pr-2 m-1" htmlFor="cognome">Cognome</label>
                <input type="text" id="cognome" className="bg-blue-400/20 m-1 w-45 mr-3"></input>
                
                <label className="pr-2 m-1" htmlFor="indirizzo">Indirizzo</label>
                <input type="text" id="indirizzo" className="bg-blue-400/20 m-1 mr-3"></input>
                
                <label className="pr-2 m-1" htmlFor="codicefiscale">Codice Fiscale</label>
                <input type="text" id="codicefiscale" className="bg-blue-400/20 m-1 mr-3"></input>
            </div>
          </form>

          <div className="flex">
          <form className="border-blue-600/20 bg-blue-400/30 mr-3">
              <div>
                  <label className="text-xl">Patologie</label>
              </div>
              <div className="flex flex-col pr-2">
                  {patologie.map((patologia, index) => (
                      <label key={index}>
                          <input className="m-2" type="checkbox" checked={patologia.selezionato}
                              onChange={() => ceckPatologie(index)}
                          />
                          {patologia.nome}
                      </label>
                  ))}
              </div>
          </form>
          
          <form className="flex flex-col border-blue-600/20 bg-blue-400/30">
              <h1 className="text-xl">Registrazione Valori</h1>
              
                <div className=" flex-1">
                    <label className="pr-2 m-1" htmlFor="pressione">Pressione</label>
                    <input type="text" id="pressione" className="bg-blue-400/20 m-1"></input>
              </div>
                <div className=" flex-2">
                    <label className="pr-4 m-1" htmlFor="glicemia">Glicemia</label>
                    <input type="text" id="glicemia" className="bg-blue-400/20 m-1"></input>
                </div>
              </form>
              </div>
          
    </div>
  );
};

export default InserisciDati;
