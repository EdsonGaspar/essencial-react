import { useState } from "react";

export function useFormularioUser() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const Salvar = () => {
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Senha: ${senha}`);
  };
  return { nome, setNome, email, setEmail, senha, setSenha, Salvar };
}
