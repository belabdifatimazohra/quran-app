import {React,useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
function Surats() {
    
    const { edition } = useParams();
    const [surats, setSuratsList] = useState();
    // Get the surats list with axios
    const getSurats = async () => {

        console.log(`http://api.alquran.cloud/v1/quran/${edition}`);
        const response = await axios.get(
            `http://api.alquran.cloud/v1/quran/${edition}`
        );
        
        setSuratsList(response.data.surahs[0]);
        console.log(`http://api.alquran.cloud/v1/quran/${edition}`);
    };
    // Load All editions
    useEffect(() => {
        console.log(edition)
        getSurats();
    }, []);
    return (
        <div>
            Surat page {surats}
        </div>
    );
}

export default Surats;