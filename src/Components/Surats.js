import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
function Surats() {
  const { edition } = useParams();
  const [surats, setSuratsList] = useState();
  // Get the surats list with axios
  const getSurats = async () => {
    const response = await axios.get(
      `https://api.quran.com/api/v4/chapters?language=ar`
    );
    setSuratsList(response.data.chapters);
  };
  // Load All editions
  useEffect(() => {
    getSurats();
  }, []);
  return (
    <div className="surats-container">
      {surats &&
        surats.map((sur) => (
          <div key={sur.id} className="suratsName">
            <div>
              <Link to={`/${edition}/surat/${sur.id}`}>
                {sur.id} - {sur.name_arabic}
              </Link>
            </div>

            <div dir="ltr">
              <Link to={`/${edition}/surat/${sur.id}`}>
                {sur.id} - {sur.name_simple}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Surats;
