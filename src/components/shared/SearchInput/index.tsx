import * as S from "./styles/SearchInputStyled";
import { MagnifyingGlass, X } from "phosphor-react";
import { useState } from "react";

export const SearchInput = () => {
    const [inputValue, setInputValue] = useState<string>("");

    return (
        <S.SearchInputLabel>
            <input
                role="pesquisa"
                type="text"
                alt="Campo para busca"
                placeholder="Buscar passaros"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            />
            {inputValue.length === 0 && (
                <button role="lupa">
                    <MagnifyingGlass size={24} />
                </button>
            )}
            {inputValue.length > 0 && (
                <button role="apagar" onClick={() => setInputValue("")}>
                    <X size={24} />
                </button>
            )}
        </S.SearchInputLabel>
    );
};
