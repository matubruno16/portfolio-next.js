import Hamburger from "hamburger-react";

interface IconMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function IconMenu({
  isMenuOpen,
  toggleMenu,
}: IconMenuProps) {
  return (
    <Hamburger
      rounded
      color={"white"}
      toggled={isMenuOpen}
      toggle={toggleMenu}
      label="Show Menu"
    />
  );
}
