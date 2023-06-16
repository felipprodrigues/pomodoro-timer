import { ButtonContainer } from "./components/Button.styles";

export function App() {
  return (
    <>
      <ButtonContainer variant={"primary"} />
      <ButtonContainer variant={"secondary"} />
      <ButtonContainer variant={"danger"} />
      <ButtonContainer variant={"success"} />
    </>
  );
}
