import { useState } from "react";
import * as styled from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pão", done: false },
    { id: 2, name: "Comprar Bolo", done: true },
  ]);
  return (
    <styled.Container>
      <styled.Area>
        <styled.Header>Lista de Tarefas</styled.Header>
        <AddArea />
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </styled.Area>
    </styled.Container>
  );
};

export default App;
