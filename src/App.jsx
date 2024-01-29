import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState,Fragment } from "react";
import { EXAMPLES } from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";


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
        
      <CoreConcepts />
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
