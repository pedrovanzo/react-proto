import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Favicon from "react-favicon";

// import StudentsTable from "./components/StudentTable";

import "./App.css";

// import reactLogo from "./assets/reactLogo.png";

import api from "./services/api";

// JSX - Javascript XML

// Componentes
// Props => Propriedades
// Estados - Imutabilidade / Mutabilidade

const App = () => {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    api.get("people").then(response => {
      console.log(response.data.results);
      setPersonagens(response.data.results);
    });
  }, []);

  // api.get('people').then(response => console.log(response));

  return (
    <>
      <Favicon url="https://avatars3.githubusercontent.com/u/42686130?s=60" />
      <Header text="Meu cabeçalho personalizado..." />

      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Altura</td>
            <td>Peso</td>
            <td>Cor do Cabelo</td>
          </tr>
        </thead>
        <tbody>
          {personagens.map((personagem, index) => {
            return (
              <tr key={index}>
                <td className="pName">{personagem.name}</td>
                <td className="pHeight">{personagem.height}</td>
                <td className="pMass">{personagem.mass}</td>
                <td className="pHairColor">{personagem.hair_color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Footer text="Meu rodapé personalizado..." />
    </>
  );
};

export default App;
