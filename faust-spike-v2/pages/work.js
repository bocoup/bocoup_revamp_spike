import { gql, useQuery } from '@apollo/client';
import { Main, Container } from '../components';

export default function Work() {
    const { data } = useQuery(Work.query);
    const posts = data?.works?.nodes;

    if (!data) return null;

    return (
      <>
        <Main>
          <Container>
            {posts?.map(post => <>
                <div>
                    <a href={post.uri}>{post.pageTitle ? post.pageTitle : post.title}</a>
                </div>
            </>)}
          </Container>
        </Main>
      </>
    );
}

Work.query = gql`
    query FirstTwentyWorkItems {
        works(first: 20) {
        nodes {
            acfFields {
                pageTitle
                description
            }
                id
                uri
                title
            }
        }
    }
`;