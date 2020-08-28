import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

// JSX - Javascript XML

// Componentes
// Props => Propriedades
// Estados - Imutabilidade / Mutabilidade

const App = () => {
  const [students, setStudents] = useState([
    {
      id: 0,
      name: "otavio",
      email: "otavio.lube@faesa.br",
      institution: "FAESA"
    },
    {
      id: 1,
      name: "dimitri",
      email: "dimitrisk8@gmail.com",
      institution: "ESTACIO"
    },
    { id: 2, name: "andreia", email: "andreia@gmail.com", institution: "IFES" }
  ])

  function insertRandomStudent() {
    const randomNumber = Math.random()*100;
    let newStudent = {
      id: randomNumber,
      name: `student${randomNumber}`,
      email: `student${randomNumber}`,
      institution: `institution${randomNumber}`
    };

    console.log("student created", newStudent);

    setStudents([...students, newStudent]);
  }

  return (
    <>
      <Header text="Meu cabeçalho personalizado..." />

      <button type="button" onClick={insertRandomStudent}>
        Inserir Aluno Aleatório
      </button>

      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Email</td>
            <td>Instituição</td>
          </tr>
        </thead>
        <tbody>
          {students.map(s => {
            return (
              <tr>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.institution}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Footer text="Meu rodapé personalizado..." />
    </>
  );
};

// function App(){
//     return (
//         <Header />
//     )
// }

export default App;
