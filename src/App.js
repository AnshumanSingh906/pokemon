import Pokemon from './Pokemon.json'
import './App.css';
import { useState } from 'react';
function App() {

  const [query, setQuery] = useState();
  const [pokemon, setPokemon] = useState(Pokemon);

  const search = () => {
    if (query === "") return setPokemon(Pokemon);
    const filteredPokemon = Pokemon.filter((values) => {
      return values.name.english.toLowerCase().includes(query.toLowerCase());
    });
    setPokemon(filteredPokemon);
  };


  return (
    <>
    <div className='top'>
      <input onChange={(e) => {
              setQuery(e.target.value);
            }} type="text" value={query} placeholder='pika-pika' />
      <button color="primary" id="btn-search" class="btn btn-success" onClick={search}>
            Search
          </button>
    </div>
     <div className="container my-3">
    <div className="row">
  {
      pokemon.map((values,id)=>{
        let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${values.id}.png`;
        let descUrl = `https://www.pokemon.com/us/pokedex/${values.name.english.toLocaleLowerCase()}`;
      return  <div className="col-md-4">
         <div className="my-3">
                      <div className="card" style={{ width: "18rem", height: "25rem" }}>
                        <div className="card-body">
                        <img src={imageUrl} className="card-img-top" alt="..." />
                          <h5 className="card-title">{values.name.english}</h5>
                          <p className="card-text">{id}</p>
                          <p>A {values.type[0]} type pokemon with {values.base.hp} hp, {values.base.attack}{" "}
                attack, {values.base.defense} defense, {values.base.special_attack}{" "}
                special attack, {values.base.special_defense} special defense,{" "}
                {values.base.speed} speed.</p>
                          
                          <p>{console.log(imageUrl)}</p>
                          <a
                            href={descUrl}
                            style={{ display: "flex", justifyContent: "center" }}
                            target="blank"
                            className="btn bt-sm btn-primary"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
      </div>
    }
    )
  }</div>
  </div>
  </>
  );
}

export default App;
