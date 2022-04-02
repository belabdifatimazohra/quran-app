import {React,useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
function Surats() {
    
    const { edition } = useParams();
    const [surats, setSuratsList] = useState();
    // Get the surats list with axios
    const getSurats = async () => {

        console.log(` http://api.alquran.cloud/v1/quran/${edition}`);
        const response = await axios.get(
            ` http://api.alquran.cloud/v1/quran/${edition}`
        );
        
        setSuratsList(response.data.data.surahs);
        console.log(response.data.data.surahs);
    };
    // Load All editions
    useEffect(() => {
        console.log(edition)
        getSurats();
    }, []);
    return (
        <div>
            { surats && surats.map(sur=>
                <h1 key={sur.number}>{sur.name}</h1>
            )

            }
            
        </div>
    );
}

export default Surats;