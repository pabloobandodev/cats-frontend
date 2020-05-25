import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useCat, EDIT_CAT } from "../context";
import { Card, Button } from "../components/styles";
import FormCat from "../components/form-cat";

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

  const onClickMap = (e) => {
    const location = {
      lat: e?.latLng.lat(),
      lng: e?.latLng.lng(),
    };
    setFormData({ ...formData, location });
  };

  return (
    <Card>
      <h1>Edit Cat</h1>
      <FormCat
        formHandler={formHandler}
        formData={formData}
        inputHandler={inputHandler}
        onClickMap={onClickMap}
      >
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
      </FormCat>
    </Card>
  );
}

export default EditCat;
