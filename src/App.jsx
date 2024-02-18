import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js';

const reactDiscriptions = ['Fundamental','Crucial','Core'];

function genRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}

function Header ()
{
  const discription = reactDiscriptions[genRandomInt(2)]
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {discription} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );

}


function CoreConcepts(props){

return (

<li>
  <img src={props.image}  alt=" " />
  <h3>{props.title}</h3>
  <p>{props.description}</p>
</li>

)};


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
