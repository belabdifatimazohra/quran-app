import {React,useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
function Surats() {
    
    const { edition } = useParams();
    const [surats, setSuratsList] = useState();
    // Get the surats list with axios
    const getSurats = async () => {

        console.log(`https://api.alquran.cloud/v1/juz/1/${edition}`);
        const response = await axios.get(
            `https://api.alquran.cloud/v1/juz/1/${edition}`
        );
        
        setSuratsList(response.data.surahs);
        console.log(response.data.surahs);
    };
    // Load All editions
    useEffect(() => {
        console.log(edition)
        getSurats();
    }, []);
    return (
        <div>
            { surats && surats.map(sur=>
                <h1>{sur.name}</h1>
            )

            }
            
        </div>
    );
}

export default Surats;