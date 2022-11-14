import { useState } from "react";
import * as styled from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar bolo", done: false },
    { id: 2, name: "Estudar ReactJS", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleChangeState = (taskId: number) => {
    let newList = [...list];
    newList.map((item) => {
      if (item.id == taskId) {
        item.done = !item.done;
      }
    });
    setList(newList);
  };

  return (
    <styled.Container>
      <styled.Area>
        <styled.Header>Lista de Tarefas</styled.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            handleChangeState={handleChangeState}
          />
        ))}
      </styled.Area>
    </styled.Container>
  );
};

export default App;
