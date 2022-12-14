import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";

const Container = () => {
  return (
    <div className="container">
      <Titulo>Olá Amigo!</Titulo>
      <section className="conteudo">
        <Conta />
      </section>
    </div>
  );
};

export default Container;
