import type { NextPage } from 'next'
import Layout from '../layouts/Layout'
import { Team } from '../components/Team';

const OurTeam: NextPage = () => {
  return (
    <Layout children={<Team users={null}/>}/>
  )
}

export default OurTeam
