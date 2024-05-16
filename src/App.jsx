import "./App.css";
import { useState } from "react";
import React from "react";
import Spell from "./components/Spell";

function App() {
  const [spells, setSpells] = useState([
    {
      id: 1,
      name: "Lumos",
      description: "Creates a narrow beam of light from the wand's tip.",
      oneUse: false,
    },
    {
      id: 2,
      name: "Expelliarmus",
      description:
        "Disarms your opponent, causing their wand to fly out of their hand.",
      oneUse: false,
    },
    {
      id: 3,
      name: "Avada Kedavra",
      description:
        "A killing curse that instantly kills the target. One useonly.",
      oneUse: true,
    },
    {
      id: 4,
      name: "Wingardium Leviosa",
      description: "Levitates an object in the air.",
      oneUse: false,
    },
    {
      id: 5,
      name: "Imperio",
      description:
        "Allows the caster to control the actions of the target. One use only.",
      oneUse: true,
    },
    {
      id: 6,
      name: "Protego",
      description:
        "A defensive spell that creates a shield to protect the caster from spells.",
      oneUse: false,
    },
    {
      id: 7,
      name: "Incendio",
      description:
        "Produces flames from the wand's tip, which can be used tostart fires.",
      oneUse: false,
    },
    {
      id: 8,
      name: "Expecto Patronum",
      description: "Creates a Patronus to repel Dementors.",
      oneUse: false,
    },
    {
      id: 9,
      name: "Crucio",
      description: "Inflicts unbearable pain on the target. One use only.",
      oneUse: true,
    },
    {
      id: 10,
      name: "Reparo",
      description: "Repairs broken objects.",
      oneUse: false,
    },
  ]);

  function castSpell(name) {
    console.log(`${name} was cast!`);

    // Hitta den trollformel som kastades
    const spellIndex = spells.findIndex((spell) => spell.name === name);

    // Om trollformeln finns i listan och har oneUse: true, ta bort den
    if (spellIndex !== -1 && spells[spellIndex].oneUse) {
      const updatedSpells = [...spells];
      updatedSpells.splice(spellIndex, 1);
      setSpells(updatedSpells);
    }
  }

  return (
    <>
      {spells.map((s) => (
        <Spell
          key={s.id}
          name={s.name}
          description={s.description}
          oneUse={s.oneUse}
          onSpellCast={castSpell}
        />
      ))}
    </>
  );
}

export default App;
