import React from "react";

interface Props {
  name: string;
  age?: number;
}

export default function Welcome({ name, age }: Props) {
  return <h1>Olá, {name}</h1>;
}
