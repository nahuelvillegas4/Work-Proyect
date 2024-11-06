import axios from "axios";
import { baseUrl } from "./baseService";

const getPaises = async () => {
    const response = await axios.get(`${baseUrl}/api/AvailableCountries`)

    return response.data;
}

const getPais = async (cadena, codigo) => {
    const params = {};
    
    params.cadena = cadena;
    params.codigo = codigo;

    const response = await axios.get(`${baseUrl}/api/AvailableCountries/pais`, {params});
    console.log(response.data)
    return response.data
};

export default {getPaises, getPais}