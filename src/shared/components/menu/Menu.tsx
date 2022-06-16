import { useMenu } from "../../hooks";
import { NavMenu } from "./styles";

export const Menu = () => {

  const { showMenu } = useMenu();

  return (
        <NavMenu showMenu={showMenu}>
          <ul>
            <li>Playstation</li>
            <li>Xbox</li>
            <li>Nintendo Switch</li>
            <li>PC</li>
            <li>Stadia</li>
          </ul>
        </NavMenu>
  );
}