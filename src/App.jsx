import Header from './components/Header/Header.jsx';
import {CORE_CONCEPTS} from './data.js';
import CoreConcepts from './components/CoreConcept/CoreConcept.jsx';


function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id= "core-concepts">
          
            <h2>Core Concepts</h2>
            <ul>
              <CoreConcepts  title={CORE_CONCEPTS[0].title} description= {CORE_CONCEPTS[0].description} image ={CORE_CONCEPTS[0].image}/>
              <CoreConcepts  title={CORE_CONCEPTS[1].title} description= {CORE_CONCEPTS[1].description} image ={CORE_CONCEPTS[1].image}/>
              <CoreConcepts  title={CORE_CONCEPTS[2].title} description= {CORE_CONCEPTS[2].description} image ={CORE_CONCEPTS[2].image}/>
              <CoreConcepts  {...CORE_CONCEPTS[3]}/>
            </ul>
        </section>
       
      </main>
    </div>
  );
}

export default App;
