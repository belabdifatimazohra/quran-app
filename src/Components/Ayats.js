import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Ayats() {
  const { edition, surat } = useParams();
  const [ayats, setAyats] = useState();
  const [suratName, setSuratName] = useState();
  // Get the ayats of the surat of the specified edition
  const getAyats = async () => {
    const response = await axios.get(
      `https://api.alquran.cloud/v1/surah/${surat}/${edition}`
    );
    setAyats(response.data.data.ayahs);
    setSuratName(response.data.data.name);
    console.log(response.data.data.ayahs);
  };
  // Load All editions
  useEffect(() => {
    getAyats();
  }, []);
  return (
    <div className="ayahs-container">
      {suratName && <h1 className="suratName">{suratName}</h1>}
      {ayats &&
        ayats.map((ayah) => (
          <p className={ ayah.sajda ? "ayahs red-bordre" : "ayahs" } key={ayah.number}>
            {ayah.text} <span className={ayah.numberInSurah > 1 ? "border-number" : ""}>{ayah.numberInSurah > 1 ? ayah.numberInSurah-1 : ""}</span>
          </p>
        ))}
    </div>
  );
}

export default Ayats;
