
import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key:"AIzaSyD4RsQvo3e-1byzcaoyCdzhZ6Z1muNgy28",
    cx:'27381839f22b642bf'
}

export const fetchDataFromApi = async (payload) => {
    const {data}= await axios.get(BASE_URL, {
        params: {...params,...payload}
    })

    return data;


}