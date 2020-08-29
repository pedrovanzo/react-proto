import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

// import StudentsTable from "./components/StudentTable";

import "./App.css";

// import reactLogo from "./assets/reactLogo.png";

import api from './services/api'

// JSX - Javascript XML

// Componentes
// Props => Propriedades
// Estados - Imutabilidade / Mutabilidade

const App = () => {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    api.get('people').then(response => {
      console.log(response.data.results);
      setPersonagens(response.data.results);
    });
  }, []);

  // api.get('people').then(response => console.log(response));

  return (
    <>
      <Header text="Meu cabeçalho personalizado..." />

      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Altura</td>
            <td>Peso</td>
            <td>Cor dp Cabelo</td>
          </tr>
        </thead>
        <tbody>
          {personagens.map((personagem, index) => {
            return (
              <tr key={index}>
                <td>{personagem.name}</td>
                <td>{personagem.height}</td>
                <td>{personagem.mass}</td>
                <td>{personagem.hair_color}</td>
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
