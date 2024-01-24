import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js"; //IMPORTOVAN NIZ OBJEKATA IZ FAJLA
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  let [selectedTopic, setSelectedTopic] = useState("Please click button."); // SELECTED TOPIC JESTE POCETNO STANJE KOJE SE PRIKAZUJE A KADA IZVRSIMO FUNKCIJU handleClick novu vrednost pakujemo u setSelectedTopic

  function handleClick(selectedButton) {
    //selectedButton=> 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
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
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
          {selectedTopic}
          {/**POCETNO STANJE useState-a je selectedTopic */}
        </section>
      </main>
    </div>
  );
}

export default App;
