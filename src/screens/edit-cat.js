import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form, Card, Button } from "../components/styles";
import { useCat, EDIT_CAT } from "../context";

function EditCat() {
  const { id } = useParams(1);
  const [cats, dispatch] = useCat();
  const [formData, setFormData] = React.useState(() =>
    cats?.find((cat) => cat.id === parseInt(id))
  );
  const history = useHistory();

  const inputHandler = (e) => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: val });
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch({ type: EDIT_CAT, value: { ...formData, id: parseInt(id) } });
    history.goBack();
    return;
  };

  const onClickCancel = (e) => {
    e.preventDefault();
    history.goBack();
    return;
  };

  return (
    <Card>
      <h1>Edit Cat</h1>
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
              defaultValue={formData.name}
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
          <Button type="submit" style={{ width: "48%" }}>
            SUBMIT
          </Button>
          <Button
            onClick={onClickCancel}
            style={{
              width: "48%",
              backgroundColor: "#bf5824",
              marginLeft: "4%",
            }}
          >
            CANCEL
          </Button>
        </fieldset>
      </Form>
    </Card>
  );
}

export default EditCat;
