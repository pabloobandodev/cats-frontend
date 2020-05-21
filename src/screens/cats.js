import React from "react";
import { useHistory } from "react-router-dom";
import { useCat } from "../context";
import { Card } from "../components/styles";
import Table from "../components/table";
const columns = ["ID", "Name", "Breed", "Age"];

const formatTableInfo = (arr) =>
  arr?.map(({ id, name, breed, age }) => [id, name, breed, age]);

function Cats() {
  const history = useHistory();
  const [cats] = useCat();
  const onClickCat = ([id]) => history.push(`cats/${id}`);

  return (
    <Card>
      <h1>Cats</h1>
      <Table
        columns={columns}
        data={formatTableInfo(cats)}
        onClick={onClickCat}
      />
    </Card>
  );
}

export default Cats;
