import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import listaPaisesService from "../services/listaPaisesService"
import { Link } from "react-router-dom";

import './consultaListaPaises.css';


export const ListaPaises = () => {

    const[paises, setPaises] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {

        listaPaisesService
        .getPaises()
        .then((data) => setPaises(data))

    }, []);


    return (
        <main>
            <h1>Lista de paises disponibles</h1>
            <div className="consultaLista_contenedor">
                {paises.map((pais) => (
                    <Link className="si" key={pais.countryCode} to={`/consultaPaisEspecifico`} state={{codigo: pais.countryCode, cadena: pais.name}}>{pais.name}</Link>
                ))}
            </div>
        </main>
    );
}