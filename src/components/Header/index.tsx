import * as S from "./styles/NavbarStyled";
import { SearchInput } from "../shared/SearchInput";
import { Link, useNavigate } from "react-router-dom";
import { UserCircle } from "phosphor-react";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <S.HeaderContainer>
                <Link aria-label="Navbar Logo Bird" to="/login">
                    <img src={"/logo.svg"} alt="Navbar Logo Bird" />
                </Link>

                <S.Nav>
                    <SearchInput />
                    <a>
                        <span>+</span>
                        <p>Criar</p>
                    </a>
                </S.Nav>
                <S.userContainer
                    aria-disabled="true"
                    onClick={() => navigate("/login")}
                >
                    <p>Olá, João</p>
                    <UserCircle size={42} />
                </S.userContainer>
            </S.HeaderContainer>
        </>
    );
};
