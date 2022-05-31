import React, { useState } from "react";

//массив данных персонажей
const swCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://starwars-visualguide.com/assets/img/planets/1.jpg",
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    homeworld: "https://starwars-visualguide.com/assets/img/planets/1.jpg",
    created: "2014-12-10T15:10:51.357000Z",
    edited: "2014-12-20T21:17:50.309000Z",
    url: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
    homeworld: "https://starwars-visualguide.com/assets/img/planets/8.jpg",
    created: "2014-12-10T15:11:50.376000Z",
    edited: "2014-12-20T21:17:50.311000Z",
    url: "https://starwars-visualguide.com/assets/img/characters/3.jpg",
  },
];

const swPlanets = [
  {
    name: "Hoth",
    rotation_period: "23",
    orbital_period: "549",
    diameter: "7200",
    climate: "frozen",
    gravity: "1.1 standard",
    terrain: "tundra, ice caves, mountain ranges",
    surface_water: "100",
    population: "unknown",
    url: "https://starwars-visualguide.com/assets/img/planets/4.jpg",
  },
  {
    name: "Alderaan",
    rotation_period: "24",
    orbital_period: "364",
    diameter: "12500",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "grasslands, mountains",
    surface_water: "40",
    population: "2000000000",
    created: "2014-12-10T11:35:48.479000Z",
    edited: "2014-12-20T20:58:18.420000Z",
    url: "https://starwars-visualguide.com/assets/img/planets/2.jpg",
  },
  {
    name: "Yavin IV",
    rotation_period: "24",
    orbital_period: "4818",
    diameter: "10200",
    climate: "temperate, tropical",
    gravity: "1 standard",
    terrain: "jungle, rainforests",
    surface_water: "8",
    population: "1000",
    created: "2014-12-10T11:37:19.144000Z",
    edited: "2014-12-20T20:58:18.421000Z",
    url: "https://starwars-visualguide.com/assets/img/planets/3.jpg",
  },
];

const swStarships = [
  {
    name: "Death Star",
    model: "DS-1 Orbital Battle Station",
    manufacturer:
      "Imperial Department of Military Research, Sienar Fleet Systems",
    cost_in_credits: "1000000000000",
    length: "120000",
    max_atmosphering_speed: "n/a",
    crew: "342,953",
    passengers: "843,342",
    cargo_capacity: "1000000000000",
    consumables: "3 years",
    hyperdrive_rating: "4.0",
    MGLT: "10",
    starship_class: "Deep Space Mobile Battlestation",
    url: "https://starwars-visualguide.com/assets/img/starships/9.jpg",
  },
  {
    name: "Millennium Falcon",
    model: "YT-1300 light freighter",
    manufacturer: "Corellian Engineering Corporation",
    cost_in_credits: "100000",
    length: "34.37",
    max_atmosphering_speed: "1050",
    crew: "4",
    passengers: "6",
    cargo_capacity: "100000",
    consumables: "2 months",
    hyperdrive_rating: "0.5",
    MGLT: "75",
    starship_class: "Light freighter",
    url: "https://starwars-visualguide.com/assets/img/starships/10.jpg",
  },
  {
    name: "Sentinel-class landing craft",
    model: "Sentinel-class landing craft",
    manufacturer: "Sienar Fleet Systems, Cyngus Spaceworks",
    cost_in_credits: "240000",
    length: "38",
    max_atmosphering_speed: "1000",
    crew: "5",
    passengers: "75",
    cargo_capacity: "180000",
    consumables: "1 month",
    hyperdrive_rating: "1.0",
    MGLT: "70",
    starship_class: "landing craft",
    created: "2014-12-10T15:48:00.586000Z",
    edited: "2014-12-20T21:23:49.873000Z",
    url: "https://starwars-visualguide.com/assets/img/starships/5.jpg",
  },
];

export const Content = ({ handleChooseFan }) => {
  const [tab, setTab] = useState("Characters");

  const handleChangeTab = (e) => {
    setTab(e.target.value);
  };

  return (
    <div className="content-layout">
      <select
        placeholder="Choose your path"
        className="select-item"
        value={tab}
        onChange={handleChangeTab}
      >
        <option>Characters</option>
        <option>Planets</option>
        <option>Starships</option>
      </select>

      {tab === "Characters" &&
        swCharacters.map((character) => (
          <div key={character.name} className="item-list-layout">
            <div>
              <p>name: {character.name}</p>
              <p>gender: {character.gender}</p>
              <p>birthday: {character.birth_year}</p>
            </div>
            <div className="item-image-layout">
              <button
                className="favorite-button"
                onClick={() => handleChooseFan(character)}
              >
                I am your fan!!
              </button>
              <img
                className="item-image"
                src={character.url}
                alt={character.name}
              />
              <button className="delete-button">Delete</button>
            </div>
          </div>
        ))}

      {tab === "Planets" &&
        swPlanets.map((planet) => (
          <div key={planet.name} className="item-list-layout">
            <div>
              <p>name: {planet.name}</p>
              <p>rotation Period: {planet.rotation_period}</p>
              <p>terrain: {planet.terrain}</p>
            </div>
            <div className="item-image-layout">
              <img className="item-image" src={planet.url} alt={planet.name} />
            </div>
          </div>
        ))}
    </div>
  );
};
