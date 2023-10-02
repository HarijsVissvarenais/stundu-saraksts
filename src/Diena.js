import Stundas from "./Stundas";

function Diena(props){

    const stunduSarakstsJSX = props.stundas.map((stunda) => {
        return <Stundas name={stunda}/>

        
    })

    return (
    <>
        <h3>{props.nosaukums}</h3>
        <ol>
            {stunduSarakstsJSX}
            
            
            
        </ol>
    </>
    )
}

export default Diena;

