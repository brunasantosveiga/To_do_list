import { useState, KeyboardEvent } from "react"; //keyboardEvent é o type do evento de clique em teclas
import * as styled from "./styles";

type Props = {
  onEnter: (taskName: string) => void; //onEnter é uma função do App que recebe uma string e não retorna nada
};
export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputtext] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputtext("");
    } //e.code me retorna a tecla que foi clicada
  };
  return (
    <styled.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputtext(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </styled.Container>
  );
};
