import React from "react";
import styled from "@emotion/styled";
import image from "../assets/images/background.png";

const Img = styled.img`
  margin-top: 1.3rem;
`;

function BackgroundImage() {
  return <Img src={image} alt="Image" />;
}

export default BackgroundImage;
