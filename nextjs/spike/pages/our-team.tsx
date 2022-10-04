import type { GetStaticProps, NextPage } from 'next'
import Layout from '../layouts/Layout'
import { Team } from '../components/Team';
import { Requests } from '../models/requests';

const OurTeam: NextPage = ({users}: any) => {
  return (
    <Layout children={<Team users={users}/>}/>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
	const url = Requests.wordpress_users_request
  const username = process.env.BASIC_AUTH_USERNAME;
  const password = process.env.BASIC_AUTH_PASSWORD;

  let isAuthenticated = username != null && password != null
  let results;

  if(isAuthenticated) {
   const response = await fetch(url, {
      headers: new Headers({
        Authorization: `Basic ${btoa(
          `${username}:${
            password
          }`
        )}`,
      }),
    })

    results = await response.json();
  }
  else {
    const response = await fetch(url);
	  results = await response.json();
  }

	

  return {
    props: {
      users: results,
    },
  };
};


export default OurTeam
