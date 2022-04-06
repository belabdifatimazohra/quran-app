import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Surats() {
  const { edition } = useParams();
  const [surats, setSuratsList] = useState();
  // Get the surats list with axios
  const getSurats = async () => {
    const response = await axios.get(
      `https://api.alquran.cloud/v1/quran/${edition}`
    );

    setSuratsList(response.data.data.surahs);
  };
  // Load All editions
  useEffect(() => {
    getSurats();
  }, []);
  return (
    <div className="suratsName">
      {surats &&
        surats.map((sur) => (
          <div key={sur.number}>
             
              {sur.number} - {sur.name}
           
          </div>
        ))}
    </div>
  );
}

export default Surats;
