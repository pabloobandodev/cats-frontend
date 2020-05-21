import React from "react";
import { useHistory } from "react-router-dom";
import { useCat, CREATE_CAT } from "../context";
import useId from "../hooks/useId";
import { Form, Card, Button } from "../components/styles";

function CreateCat() {
  const [formData, setFormData] = React.useState({
    name: "",
    breed: "",
    age: 0,
    description: "",
  });
  const history = useHistory();
  const [, dispatch] = useCat();
  const [id] = useId();

  const inputHandler = (e) => {
    const { type, name, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: val });
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch({ type: CREATE_CAT, value: { ...formData, id } });
    history.push(`/cats`);
    return;
  };

  return (
    <Card>
      <h1>Create Cat</h1>
      <Form onSubmit={formHandler}>
        <fieldset disabled={false} aria-busy={false}>
          <label htmlFor="name">
            Name
            <input
              type="string"
              id="name"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="breed">
            Breed
            <input
              type="string"
              id="breed"
              name="breed"
              placeholder="Breed"
              required
              value={formData.breed}
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="age">
            Age
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Age"
              required
              value={formData.age}
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Enter A Description"
              required
              defaultValue={formData.description}
              onChange={inputHandler}
            />
          </label>
          <Button
            type="submit"
            style={{ width: "100%", backgroundColor: "#2e4b84" }}
          >
            SUBMIT
          </Button>
        </fieldset>
      </Form>
    </Card>
  );
}

export default CreateCat;
