import { toast } from "react-toastify";
import * as S from "./styles/LoginPageStyled";
import { User } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <S.LoginPageContainer>
            <S.LoginPageHeader>
                <a>
                    <img src={"/logo.svg"} alt="Navbar Logo Bird" />
                </a>
                <S.RegisterContainer
                    aria-disabled="true"
                    onClick={() =>
                        toast.success("Ainda não temos essa funcionalidade :)")
                    }
                >
                    <p>Cadastre-se</p>
                    <User size={32} />
                </S.RegisterContainer>
            </S.LoginPageHeader>
            <S.LoginPageBody>
                <S.LoginBoxContainer>
                    <S.LoginBoxLeftSide>
                        <h1>Bem vindo(a) de volta!</h1>
                        <p>
                            Veja as novidades que te
                            <br /> esperam!
                        </p>
                    </S.LoginBoxLeftSide>
                    <S.LoginBoxRightSide>
                        <h1>Entre agora!</h1>
                        <form>
                            <input
                                maxLength={24}
                                type="text"
                                name="input para nome do usuário"
                                placeholder="Usuário"
                            />
                            <input
                                maxLength={24}
                                type="password"
                                name="input para senha do usuário"
                                placeholder="Senha"
                            />
                        </form>
                        <a href="#">Esqueci minha senha</a>
                        <button onClick={() => navigate("/home")}>Login</button>
                    </S.LoginBoxRightSide>
                </S.LoginBoxContainer>
            </S.LoginPageBody>
        </S.LoginPageContainer>
    );
};
