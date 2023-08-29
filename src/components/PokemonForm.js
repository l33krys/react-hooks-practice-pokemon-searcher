import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPoke }) {

  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    front: "",
    back: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    const newPokemonObj = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.front,
        back: formData.back
      }
    }

    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newPokemonObj)
    })
    .then(r => r.json())
    .then(newPoke => addPoke(newPoke))

    setFormData({
      name: "",
      hp: "",
      front: "",
      back: ""
    })

  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={(e) => setFormData({...formData, hp: e.target.value})}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.front} onChange={(e) => setFormData({...formData, front: e.target.value})}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.back} onChange={(e) => setFormData({...formData, back: e.target.value})}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
