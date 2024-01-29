import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js"; //IMPORTOVAN NIZ OBJEKATA IZ FAJLA
import TabButton from "./components/TabButton.jsx";
import { useState,Fragment } from "react";
import { EXAMPLES } from "./data.js";


function App() {
  let [selectedTopic, setSelectedTopic] = useState(); // SELECTED TOPIC JESTE POCETNO STANJE KOJE SE PRIKAZUJE A KADA IZVRSIMO FUNKCIJU handleClick novu vrednost pakujemo u setSelectedTopic


  function handleClick(selectedButton) {
    //selectedButton=> 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  return (
    <Fragment>
      <Header />
      <main>
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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleClick("components")}>
              Components
            </TabButton> 
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleClick("jsx")}>JSX</TabButton>{/**proveravamo da li je stanje jsx ako jeste onda je is selected true i postavlja se klasa "active na dugme" */}
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
        <div>
          {!selectedTopic ? <p>Please selec a topic!</p> : null}

          {selectedTopic ? <div id="tab-content">
            <p>{EXAMPLES[selectedTopic].title}</p>
            <pre>{EXAMPLES[selectedTopic].description}</pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </div> : null}
          {/**POCETNO STANJE useState-a je selectedTopic */}
          </div>
        </section>
        
      </main>
      
    </Fragment>
  );
}

export default App;
