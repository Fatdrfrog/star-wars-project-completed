import React, { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";
import { CharacterLayout } from "../sw-character-layout";
import { CharacterList } from "../sw-character-list";

import { ReactComponent as PlanetSVG } from "../../assets/planet.svg";
import { Select } from "../sw-select";

export const Content = () => {
  const [tab, setTab] = useState("Characters");

  const handleChangeTab = (e) => {
    setTab(e.target.value);
  };

  const planetRotationItem = (
    <>
      <PlanetSVG width={50} height={50} />
      <p>planets</p>
    </>
  );

  return (
    <div className="content-layout">
      <Select tab={tab} handleChangeTab={handleChangeTab} />

      {tab === "Characters" &&
        swCharacters.map((character) => (
          <CharacterLayout key={character.name} item={character}>
            <CharacterList label="name" item={character.name} />
            <CharacterList label="gender" item={character.gender} />
            <CharacterList label="birth year" item={character.birth_year} />
          </CharacterLayout>
        ))}

      {tab === "Planets" &&
        swPlanets.map((planet) => (
          <CharacterLayout key={planet.name} item={planet}>
            <CharacterList label="name" item={planet.name} />
            <CharacterList
              label={planetRotationItem}
              item={planet.rotation_period}
            />
            <CharacterList label="Terrain" item={planet.terrain} />
          </CharacterLayout>
        ))}
    </div>
  );
};
