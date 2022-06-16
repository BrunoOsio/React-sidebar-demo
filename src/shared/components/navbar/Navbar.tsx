import { MenuButton } from "..";
import { Container } from "./styles";

export const Navbar = () => {
  return (
    <Container>
      <div className="wrapper">
        <strong>
          <h2>Play the Game!</h2>
        </strong>

        <MenuButton/>
      </div>
    </Container>
  );
}