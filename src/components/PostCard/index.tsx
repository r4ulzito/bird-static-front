import { Trash, PencilSimple } from "phosphor-react";
import * as S from "./styles/PostCardStyled";
import { PostDTO } from "../../dto/postDTO";

interface IPost {
    post: PostDTO;
}

export const PostCard = ({ post }: IPost) => {
    return (
        <>
            <S.PostCardDivStyled>
                <S.PostCardHeaderStyled>
                    <S.HeaderTextsContainer>
                        <S.PostBirdLocaleStyled>
                            {post.sighting}
                        </S.PostBirdLocaleStyled>
                        <S.PostBirdNameStyled>{post.name}</S.PostBirdNameStyled>
                    </S.HeaderTextsContainer>
                    <S.HeaderButtonsContainer>
                        <S.EditButton>
                            <a aria-label="editar post">
                                <PencilSimple size={18} weight="bold" />
                            </a>
                        </S.EditButton>
                        <S.TrashButton aria-label="apagar post">
                            <Trash size={18} weight="bold" />
                        </S.TrashButton>
                    </S.HeaderButtonsContainer>
                </S.PostCardHeaderStyled>
                <S.PostContentStyled>
                    <S.PostImageStyled
                        src={
                            post.img ||
                            "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"
                        }
                    />
                    <a>Ver Mais</a>
                </S.PostContentStyled>
            </S.PostCardDivStyled>
        </>
    );
};
