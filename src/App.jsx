import Header from './components/Header/Header.jsx';
import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import CoreConcepts from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';


function App() {
  let [tabContent,setTabContent]= useState();
//let tabContent = 'Please Click A Button';

//<CoreConcepts  title={CORE_CONCEPTS[0].title} description= {CORE_CONCEPTS[0].description} image ={CORE_CONCEPTS[0].image}/>
//<CoreConcepts  title={CORE_CONCEPTS[1].title} description= {CORE_CONCEPTS[1].description} image ={CORE_CONCEPTS[1].image}/>
//<CoreConcepts  title={CORE_CONCEPTS[2].title} description= {CORE_CONCEPTS[2].description} image ={CORE_CONCEPTS[2].image}/>
//<CoreConcepts  {...CORE_CONCEPTS[3]}/>


  function handleSelect(selectedButton){

    console.log(selectedButton);
    setTabContent(selectedButton);
}
  return (
    <div>
      <Header></Header>
      <main>
        <section id= "core-concepts">
          
            <h2>Core Concepts</h2>
            <ul>
            {CORE_CONCEPTS.map((conceptItem)=>(
              <CoreConcepts key={conceptItem.title}{...conceptItem}/>
              ))}
             
            </ul>
        </section>
       <section id ="examples">
        <h2>Examples</h2>
        <menu>
         <TabButton  isSelected={tabContent ==='components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
         <TabButton isSelected={tabContent ==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
         <TabButton isSelected={tabContent ==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
         <TabButton isSelected={tabContent ==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>
        </menu>
        {!tabContent? <p>Please Select a Topic</p>:<div id = "tab-content">
                                                      <h3>{EXAMPLES[tabContent].title}</h3>
                                                      <p>{EXAMPLES[tabContent].description}</p>
                                                              <pre>
                                                                <code>
                                                                {EXAMPLES[tabContent].code}
                                                                </code>
                                                              </pre>
                                                    </div>} 
        
       </section>
      </main>
    </div>
  );
}

export default App;
