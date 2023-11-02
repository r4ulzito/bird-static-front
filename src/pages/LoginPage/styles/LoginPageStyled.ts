import styled from "styled-components";

export const LoginPageContainer = styled.div`
    height: 100vh;
`;

export const LoginPageHeader = styled.header`
    width: 100%;
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 29px 72px;
    background: ${({ theme }) => theme.colors.navbarBackground};

    a {
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 425px) {
        padding: 16px 22px;
    }
`;

export const RegisterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.default};
    transition: all 0.3s;
    :hover {
        color: ${({ theme }) => theme.colors.hoverPrimaryButtonColor};
    }

    @media screen and (max-width: 425px) {
        p {
            display: none;
        }
    }
`;

export const LoginPageBody = styled.div`
    width: 100%;
    height: calc(100% - 90px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: ${({ theme }) => theme.colors.navbarBackground};

    @media screen and (max-width: 425px) {
        height: calc(100% - 52px);
        padding-top: 80px;
    }
`;

export const LoginBoxContainer = styled.div`
    background-color: rgba(225, 225, 225, 0.08);
    border-radius: 8px;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 425px) {
        background-color: rgba(225, 225, 225, 0);
        box-shadow: none;
    }
`;

export const LoginBoxLeftSide = styled.div`
    height: 582px;
    width: 491px;
    background-image: url("/LoginBoxLeft.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 32px;
    color: ${({ theme }) => theme.colors.default};

    h1 {
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }

    p {
        font-weight: 800;
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.md};
    }

    @media screen and (max-width: 425px) {
        display: none;
    }
`;

export const LoginBoxRightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 106px;

    h1 {
        font-weight: 700;
        font-size: ${({ theme }) => theme.fontSize.xxl};
        color: ${({ theme }) => theme.colors.default};
        margin-bottom: 24px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 28px;
        margin-bottom: 16px;

        input {
            border: none;
            outline: none;
            padding: 8px 26px;
            width: 293px;
            height: 39px;
            font-size: ${({ theme }) => theme.fontSize.md};
            border-radius: 4px;
            font-weight: 400;

            &::placeholder {
                color: ${({ theme }) => theme.colors.formPlaceholder};
            }
        }
    }

    a {
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSize.md};
        color: ${({ theme }) => theme.colors.default};
        text-decoration: underline;
        margin-bottom: 34px;
    }

    button {
        cursor: pointer;
        border: none;
        color: ${({ theme }) => theme.colors.default};
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSize.xl};
        background-color: ${({ theme }) => theme.colors.primaryColor};
        padding: 8px 72px;
        border-radius: 10px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        transition: all 0.3s;

        &:hover {
            background-color: ${({ theme }) =>
                theme.colors.hoverPrimaryButtonColor};
        }
    }

    @media screen and (max-width: 425px) {
        padding: 0px;
    }
`;
