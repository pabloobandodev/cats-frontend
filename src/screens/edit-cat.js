import React from "react";
import { Form, Card, Button } from "../components/styles";

function EditCat() {
  const inputHandler = (e) => {};

  return (
    <Card>
      <Form>
        <fieldset disabled={false} aria-busy={false}>
          <label htmlFor="name">
            Name
            <input
              type="string"
              id="name"
              name="name"
              placeholder="Name"
              required
              value=""
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
              value=""
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
              value={0}
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
              defaultValue=""
              onChange={inputHandler}
            />
          </label>
          <Button
            type="submit"
            style={{ width: "100%", backgroundColor: "#8f91a3" }}
          >
            CANCEL
          </Button>
        </fieldset>
      </Form>
    </Card>
  );
}

export default EditCat;
