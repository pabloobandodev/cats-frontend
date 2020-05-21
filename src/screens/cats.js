import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "../components/styles";
import Table from "../components/table";
const columns = ["Name", "Breed", "Age"];
const data = [
  ["Beethoven", "Siamese", 2],
  ["Leonard", "Bengal", 4],
];

function Cats() {
  const history = useHistory();

  const onClickCat = (data) => history.push(`cats/1`);

  return (
    <Card>
      <Table columns={columns} data={data} onClick={onClickCat} />
    </Card>
  );
}

export default Cats;
