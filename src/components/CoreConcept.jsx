import "./CoreConcept.css";// importovan css fajl koji stilizuje CoreConcept komponentu 

export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.description} />
      <h3>{props.title}</h3> {/* koriscinje vrednosti propsa */}
      <p>{props.description}</p>
      
    </li>
    
  );
}
