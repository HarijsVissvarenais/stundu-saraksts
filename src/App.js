import Diena from "./Diena";

function App(){
  const PirmdienasStundas = [
    "Datorsistēmas un datortīkli",
    "Datorsistēmas un datortīkli",
    "Sistēmu programmēšana",
    "Sistēmu programmēšana"
];
  const OtrdienasStundas = [
    "Datorsistēmas",
    "Datorsistēmas",
    "Sistēmu",
    "Sistēmu"
];
const TresdienaStundas = [
    "Datrtīkli",
    "Datrtīkli",
    "Sis",
    "Sis"
];
  return (
    <>
      <h1>Stundu sarakstiņš</h1>
      <Diena nosaukums="Pirmdiena" Stundas={PirmdienasStundas}/>
      <Diena nosaukums="Otrdiena" Stundas={OtrdienasStundas}/>

    </>
  )
}
export default App;