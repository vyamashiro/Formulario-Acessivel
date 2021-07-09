import { NavItem } from "./Navbar.style";

const Navbar = () => {

    return (
        <nav>
            {/* <ul> */}
                <NavItem>Dados gerais (ALT + 1)</NavItem>
                <NavItem>Suas preferências (ALT + 2)</NavItem>
                <NavItem>Deixe seu comentário (ALT + 3)</NavItem>
                {/* <NavItem>Rodapé (ALT + 4)</NavItem> */}
            {/* </ul> */}
        </nav>
    )
};

export default Navbar;