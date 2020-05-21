import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
  list-style-type: none;
  overflow: hidden;
`;

const Li = styled.li`
  float: right;
`;

const Option = styled(NavLink)`
  display: block;
  padding: 8px;
  margin: 6px;
  text-decoration: none;
  color: #303030;
  font-size: 20px;
  &.active {
    border-bottom: 3px solid #8f91a3;
  }
`;

function Navbar() {
  return (
    <nav>
      <Ul>
        <Li>
          <Option to="/cats">Cats</Option>
        </Li>
        <Li>
          <Option to="/create-cat" exact={true}>
            Create
          </Option>
        </Li>
        <Li>
          <Option to="/map-cats" exact={true}>
            Map
          </Option>
        </Li>
      </Ul>
    </nav>
  );
}

export default Navbar;
