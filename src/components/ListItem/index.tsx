import * as styled from "./styles";
import { Item } from "../../types/Item";
import React, { useState } from "react";

type Props = {
  item: Item;
  handleChangeState: (taskId: number) => void;
};

export const ListItem = ({ item, handleChangeState }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const changeState = (id: number) => {
    handleChangeState(id);
  };

  return (
    <styled.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        onClick={() => changeState(item.id)}
      />
      <label>{item.name}</label>
    </styled.Container>
  );
};
