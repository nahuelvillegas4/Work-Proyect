import appExpress from "express";
import axios from "axios";

const listaPaisesRouter = appExpress.Router();

listaPaisesRouter.get("/", async (req, res) => {
    const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries')

    res.json(response.data)
})

listaPaisesRouter.get("/pais/", async (req, res) => {

    try {
        const {cadena, codigo} = req.query
        
        const countryInfoResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${codigo}`)

        const flagResponse = await axios.post(`https://countriesnow.space/api/v0.1/countries/flag/images`, {
            iso2: codigo 
        });

        const response = await axios.post('https://countriesnow.space/api/v0.1/countries/population', {
            country: cadena  
        });

        res.json({
            countryInfo: countryInfoResponse.data,
            flag: flagResponse.data,
            info: response.data
        })

    } catch (error) {
        console.error("Error al obtener los datos: ", error)
        res.status(500).send("Error al obtener los datos")
    }

})

export default listaPaisesRouter