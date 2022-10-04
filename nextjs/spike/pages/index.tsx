import type { GetStaticProps, NextPage } from "next";
import { RecentBlogs } from "../components/RecentBlogs";
import { RecentProjects } from "../components/RecentProjects";
import Layout from "../layouts/Layout";
import { Requests } from "../models/requests";

const Home: NextPage = ({posts}:any) => {
  const child = (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Inclusive Technology
              <br className="hidden lg:inline-block" />
              Consulting
            </h1>
            <p className="mb-8 leading-relaxed">
              We partner with tech companies and nonprofits to increase
              accessibility, inclusion, and justice on and through the web.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Our Code of Conduct
              </button>
            </div>
          </div>
        </div>
      </section>
      <RecentProjects />
      <RecentBlogs posts={posts}/>
    </>
  );
  return <Layout children={child} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
	const url = Requests.json_placeholder_posts_request+"?_limit=3";
	const response = await fetch(url);
	const results = await response.json();

  return {
    props: {
      posts: results,
    },
  };
};

export default Home;
