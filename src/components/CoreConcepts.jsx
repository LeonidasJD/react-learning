import { CORE_CONCEPTS } from "../data"; //IMPORTOVAN NIZ OBJEKATA IZ FAJLA
import CoreConcept from "./CoreConcept";

export default function CoreConcepts (){
    return(
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
           {CORE_CONCEPTS.map((conceptItem)=>(
            <CoreConcept
            title={conceptItem.title}
            description={conceptItem.description}
            img={conceptItem.image}
          />/**PRIMER KAKO DA NE PISEMO 4 PUTA ISTU KOMPONENTU VEC DA PRODJEMO KROZ NIZ I ISPISEMO INFORMACIJE IZ NIZA KAO U ANGULARU ngFor */
           
           ))} 
            <CoreConcept
              title={CORE_CONCEPTS[0].title} //kreiranje vrednosti komponente pomocu PROPS-A. TITLE, DESCRIPTION,IMG SU PROPSOVI.
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
    );

}