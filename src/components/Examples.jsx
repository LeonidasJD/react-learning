import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import {useState} from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";


export default function Examples (){
    let [selectedTopic, setSelectedTopic] = useState(); // SELECTED TOPIC JESTE POCETNO STANJE KOJE SE PRIKAZUJE A KADA IZVRSIMO FUNKCIJU handleClick novu vrednost pakujemo u setSelectedTopic


    function handleClick(selectedButton) {
      //selectedButton=> 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedButton);
    }
    return (
        <Section text={"Examples"} id="examples" className={"myClass"}>
        
        <menu>
          <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleClick("components")}>
            Components
          </TabButton> 
          <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleClick("jsx")}>JSX</TabButton>{/**proveravamo da li je stanje jsx ako jeste onda je is selected true i postavlja se klasa "active na dugme" */}
          <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleClick("props")}>Props</TabButton>
          <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleClick("state")}>State</TabButton>
        </menu>
        <Tabs>
        <div>
        {!selectedTopic ? <p>Please selec a topic!</p> : null}

        {selectedTopic ? <div id="tab-content">
          <p>{EXAMPLES[selectedTopic].title}</p>
          <pre>{EXAMPLES[selectedTopic].description}</pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </div> : null}
        {/**POCETNO STANJE useState-a je selectedTopic */}
        </div>
        </Tabs>
      
      </Section>
    );
}