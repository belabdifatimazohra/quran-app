import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Surats() {
  const { edition } = useParams();
  const [surats, setSuratsList] = useState();
  // Get the surats list with axios
  const getSurats = async () => {
    const response = await axios.get(
      `https://api.quran.com/api/v4/chapters?language=ar`
    );

    setSuratsList(response.data.chapters);
    console.log(response.data.chapters)
  };
  // Load All editions
  useEffect(() => {
    getSurats();
  }, []);
  return (
    <div >
      {surats &&
        surats.map((sur) => (
          <div key={sur.id} className="suratsName">
              <div>
              {sur.id} - {sur.name_arabic}
              </div>
              <div  dir="ltr">
              {sur.id} - {sur.name_simple}
              </div>
           
          </div>
        ))}
    </div>
  );
}

export default Surats;
