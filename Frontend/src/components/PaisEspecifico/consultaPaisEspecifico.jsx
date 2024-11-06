import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import listaPaisesService from "../services/listaPaisesService"
import { Link } from "react-router-dom";
import PopulationChart from "../services/graficoPoblacion.jsx"
import './consultarPaisEspecifico.css'

export const PaisEspecifico = () => {

    const[pais, setPais] = useState();
    const navigate = useNavigate()
    const { state } = useLocation()

    useEffect(() => {console.log("Cargando los datos")
        listaPaisesService.getPais(state.cadena, state.codigo).then((pais) => setPais(pais))
    }, [state.cadena, state.codigo])
    
    const onVolver = () => {
        navigate("/");
    };

    const años = pais?.info?.data?.populationCountstos?.map((item) => item.year)
    const poblacion = pais?.info?.data?.populationCounts?.map((item) => item.value)

    return (
        <div>
        {pais ? (
            <>
                <div className="contenedor_info_pais">
                <img className= "imagen_pais" src={pais.flag.data.flag} alt="Bandera" />
                <h2>{pais.countryInfo.commonName}</h2>

                <h4>Paises limitrofes</h4>
                <div className="contenedor_paises_lim">
                {pais.countryInfo.borders.map((borde) => (
                    <Link className="si" key={borde.countryCode} to={`/consultaPaisEspecifico`} state={{codigo: borde.countryCode, cadena: borde.commonName}}>{borde.commonName}</Link>
                ))}
                <h3>Grafico de la poblacion</h3>
                <PopulationChart years={años} population={poblacion} />
                </div>
                <button className="form-button bg-success" onClick={onVolver}>Volver</button>
                </div>
            </>
        ) : (
            <div>Loading...</div>
        )}
        </div>
    )

}