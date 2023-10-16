import styles from "./style.module.css";
import Diena from "./Diena";

function App(props) {
  const visasStundas = [
    {
      diena: "Pirmdiena",
      stundas: ["Sports", "DabasZinibas", "Vesture", "Krievu valoda"],
    },
    { diena: "Otrdiena", stundas: ["Cita stunda", "Vel stunda"] },
    {
      diena: "Trešdiena",
      stundas: [
        "Programmēšana",
        "Programmēšana",
        "Programmēšana",
        "Programmēšana",
      ],
    },
    { diena: "Ceturtdiena", stundas: ["VAMS", "VAMS", "VAMS", "VAMS"] },
    {
      diena: "Piektdiena",
      stundas: ["Sports", "Latviešu valoda", "Matematika", "Matematika"],
    },
  ];

  const dienasJSX = visasStundas.map((diena, indekss) => {
    return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />;
  });

  return (
    <>
      <div>
        <ol className={styles.nigga}>{dienasJSX}</ol>
      </div>
    </>
  );
}
export default App;
