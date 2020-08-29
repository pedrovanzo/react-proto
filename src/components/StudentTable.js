import React, { useState } from "react";

import "./StudentTable.css";

export default function StudentsTable( props ) {
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
  ]);

  function insertRandomStudent() {
    const randomNumber = Math.random() * 100;
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
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.institution}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
