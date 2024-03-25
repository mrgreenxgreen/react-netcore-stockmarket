import axios from "axios"
import { CompanySearch } from "./company";



interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query:string) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    try{
        const data = await axios.get<SearchResponse>(
           `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}AA&limit=10&exchange=NASDAQ&apikey=CHh5dGAyoafoKHOOmLkFv6oRbSBwsXsN`
        );
        return data;
    }catch(error){
        if(axios.isAxiosError(error))
        {
            console.log("error message:",error.message);
            return error.message;
        }else
        {
            console.log("unexpected error:",error);
            return "Unexpected error occured";
        }
    }
}