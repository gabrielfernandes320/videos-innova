import React from "react";
import { ReactComponent as YoutubeSvg } from "../Images/youtube.svg";

interface Props {
  name: string;
}

export default function Welcome({ name }: Props) {
  return (
    <>
      <h1>Olá, {name}</h1>
      <YoutubeSvg width={200} height={200} fill={"red"} />
    </>
  );
}
