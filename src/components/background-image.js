import React from "react";
import styled from "@emotion/styled";
import image from "../assets/images/1.png";

const Img = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`;

function BackgroundImage() {
  return <Img src={image} alt="Image" />;
}

export default BackgroundImage;
