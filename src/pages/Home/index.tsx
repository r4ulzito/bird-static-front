import { PostCard } from "../../components/PostCard";
import * as S from "./styles/HomePageStyled";
import { SearchInput } from "../../components/shared/SearchInput";
import { Header } from "../../components/Header";
import { posts } from "../../helpers/fakeData";

export const HomePage = () => {
    return (
        <>
            <Header />
            <S.HomeContainer>
                <SearchInput />
                {posts?.length! > 0 &&
                    posts?.map((post) => {
                        return <PostCard key={post.id} post={post} />;
                    })}
            </S.HomeContainer>
        </>
    );
};
