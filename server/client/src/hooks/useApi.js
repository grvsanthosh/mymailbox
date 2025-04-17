import API from '../services/apiService.js'
import {useState} from 'react';

const useApi = (urlObject)=>{
    
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const call = async (payload,type='')=>{
        setResponse(null);
        setError("");
        setIsLoading(true);
        try{
            let res = await API(urlObject,payload,type);
            setResponse(res.data);
        }
       catch(error){
            setError(error.message);
        }finally{
            setIsLoading(false);
        }
    }
    return {
        response,
        error,
        isLoading,
        call
    }
}

export default useApi;