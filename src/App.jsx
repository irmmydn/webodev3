import "./App.css";
import React from "react";

function Arama({aramaMetni,onSearch}){

  return(
    <div>
    <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
    <p>
    </p>
    </div>
  )
}

function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
          <span>
            <a href={url}>{baslik}</a>, 
          </span>
          <span><b>Yazar:</b> {yazar}, </span>
          <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
          <span><b>Puan:</b> {puan}</span>
    </li>
  )
}

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function(yazi){
        return(
          <Yazi key={yazi.id} {...yazi}/>
        );
        })}
    </ul>
  )
}

function App() {

  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan") || "React");
const yaziListesi = [
  {
    baslik: "React Öğreniyorum",
    url: "www.sdu.edu.tr",
    yazar: "Sinan Yüksel",
    yorum_sayisi: 3,
    puan: 4,
    id: 0,
  },
  {
    baslik: "mikroişlemciler",
    url: "wwww.google.com.tr",
    yazar: "fatih",
    yorum_sayisi: 10,
    puan: 5,
    id: 1,
  },
  {
    baslik: "veri madenciliği",
    url: "wwww.google.com.tr",
    yazar: "ecir",
    yorum_sayisi: 27,
    puan: 5,
    id: 3,
  },
  {
    baslik: "veri iletişimi",
    url: "wwww.google.com.tr",
    yazar: "mevlüt",
    yorum_sayisi: 8,
    puan: 5,
    id: 2,
  },
  {
    baslik: "işletim sistemleri",
    url: "wwww.google.com.tr",
    yazar: "mevlüt",
    yorum_sayisi: 9,
    puan: 5,
    id: 4,
  },
  {
    baslik: "Web Teknolojileri ve Programlama",
    url: "wwww.google.com.tr",
    yazar: "Asım Yüksel",
    yorum_sayisi: 4,
    puan: 5,
    id: 5,
    },
];
  
  const arananYazilar=yaziListesi.filter(
    function (yazi){
      return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
       ;
    }
  );

  function handleSearch(event){
    setAramaMetni(event.target.value);
  }
  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni)
  },[aramaMetni])

  return (
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </>
  );
}
export default App;