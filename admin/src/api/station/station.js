import axios from "axios";

export const getStation = async () => {
    const station = await axios.get("http://localhost:9000/station")
    return station.data
}