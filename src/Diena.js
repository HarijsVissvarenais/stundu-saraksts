import Stundas from "./Stundas";

function Diena(props){

    return (
    <>
        <h3>{props.nosaukums}</h3>
        <ol>
            <Stundas Stund={props.Stundas[0]}/>
            <Stundas Stund={props.Stundas[1]}/>
            <Stundas Stund={props.Stundas[2]}/>
            <Stundas Stund={props.Stundas[3]}/>
        </ol>
    </>
    )
}

export default Diena;

