import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js"; //IMPORTOVAN NIZ OBJEKATA IZ FAJLA
import TabButton from "./components/TabButton.jsx";

function App() {
  function handleClick(selectedButton){
    //selectedButton=> 'components', 'jsx', 'props', 'state'
    if (selectedButton === 'components'){
      console.log('You clicked components button');
    }
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
          <TabButton onSelect={()=> handleClick('components')}>Components</TabButton>
          <TabButton onSelect={()=>handleClick('jsx')}>JSX</TabButton>
          <TabButton onSelect={()=>handleClick('props')}>Props</TabButton>
          <TabButton onSelect={()=>handleClick('state')}>State</TabButton>
          </menu>
          Dynamic content
        </section>
      </main>
    </div>
  );
}

export default App;
