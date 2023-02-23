import { gql, useQuery } from '@apollo/client';
import { Main, Container } from '../components';

export default function Blog() {
    const { data } = useQuery(Blog.query);
    const posts = data?.posts?.nodes;

    if (!data) return null;

    return (
      <>
        <Main>
          <Container>
            {posts?.map(post => <>
                <div>
                    <a href={post.uri}>{post.title}</a>
                </div>
            </>)}
          </Container>
        </Main>
      </>
    );
}

Blog.query = gql`
    query FirstTenPosts {
        posts(first: 10) {
            nodes {
                id
                uri
                title
            }
        }
    }
`;