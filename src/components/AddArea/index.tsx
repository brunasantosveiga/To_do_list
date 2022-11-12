import * as styled from "./styles";

export const AddArea = () => {
  return (
    <styled.Container>
      <div className="image">➕</div>
      <input type="text" placeholder="Adicione uma tarefa" />
    </styled.Container>
  );
};
