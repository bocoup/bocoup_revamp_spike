import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../../layouts/Layout";
import { Requests } from "../../../models/requests";

const Blog: NextPage = ({post}:any) => {
  const Child = () => {
    return (
      <>
      <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="https://dummyimage.com/1200x500"
          />
        </div>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div
              className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                {post.title}
              </h2>
              <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p className="text-base">{post.body}</p>
            </div>
          </div>
          <div
            className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
          >
            <p className="leading-relaxed text-lg mb-4">
              {post.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
    )
  }
  return <Layout><Child/></Layout>;
};

export const getStaticProps: GetStaticProps = async (context) => {
	const url = Requests.json_placeholder_posts_request+`/${context.params?.id}`;
	const response = await fetch(url);
	const result = await response.json();

  return {
    props: {
      post: result,
      fallback:false
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
    const url = Requests.json_placeholder_posts_request+"?_limit=1";
	const response = await fetch(url);
	const results = await response.json();

    const ids = results.map((result:any) => result.id);
    const paths = ids.map((id:any) => ({params: {id:id.toString()}}))

  return {
    paths: paths,
    fallback: false
  }
}

export default Blog;
