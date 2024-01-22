import reactImg from "./assets/react-core-concepts.png";
import componentsImage from "./assets/components.png";

function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>

      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.description} />
      <h3>{props.title}</h3> {/* koriscinje vrednosti propsa */}
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components" //kreiranje vrednosti komponente pomocu PROPS-A. TITLE, DESCRIPTION,IMG SU PROPSOVI.
              description="The core UI building block"
              img={componentsImage}
            />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

const reactDescriptions = ["Fundamental", "Crutial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default App;
