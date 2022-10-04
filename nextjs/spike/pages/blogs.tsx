import type { GetStaticProps, NextPage } from "next";
import Layout from "../layouts/Layout";
import { Requests } from "../models/requests";

const Blogs: NextPage = ({posts}:any) => {
  const child = (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Blog
            </h1>
            <p className="mb-8 leading-relaxed">bloggy bloggy bloggy</p>
          </div>
        </div>
      </section>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {
            posts.map((post: any) => {
              return (
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">
                      CATEGORY
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {post.title}
                    </h2>
                    <p className="leading-relaxed">
                      {post.body}
                    </p>
                    <a href={`/blog/${post.id}`} className="text-indigo-500 inline-flex items-center mt-4">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
    </>
  );
  return <Layout children={child} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
	const url = Requests.json_placeholder_posts_request;
	const response = await fetch(url);
	const results = await response.json();

  return {
    props: {
      posts: results,
    },
  };
};

export default Blogs;
