import React from "react";
import { useHistory } from "react-router-dom";
import { useCat, CREATE_CAT } from "../context";
import useId from "../hooks/useId";
import { Card, Button } from "../components/styles";
import FormCat from "../components/form-cat";

function CreateCat() {
  const [formData, setFormData] = React.useState({
    name: "",
    breed: "",
    age: 0,
    description: "",
    location: {
      lat: 0,
      lng: 0,
    },
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
    if (formData.location.lat === 0) {
      alert("You must select a location at the map");
      return;
    }
    dispatch({ type: CREATE_CAT, value: { ...formData, id } });
    history.push(`/cats`);
    return;
  };

  const onClickMap = (e) => {
    const location = {
      lat: e?.latLng.lat(),
      lng: e?.latLng.lng(),
    };
    setFormData({ ...formData, location });
  };

  return (
    <Card>
      <h1>Create Cat</h1>
      <FormCat
        formHandler={formHandler}
        formData={formData}
        inputHandler={inputHandler}
        onClickMap={onClickMap}
      >
        <Button
          type="submit"
          style={{ width: "100%", backgroundColor: "#2e4b84" }}
        >
          SUBMIT
        </Button>
      </FormCat>
    </Card>
  );
}

export default CreateCat;
