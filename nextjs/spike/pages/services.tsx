
import type { NextPage } from 'next'
import { RecentBlogs } from '../components/RecentBlogs'
import { RecentProjects } from '../components/RecentProjects'
import { Services as ServicesComponent } from '../components/Services'
import Layout from '../layouts/Layout'

const Services: NextPage = () => {
  const child = 
  <>
      <section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
			  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
				<img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
			  </div>
			  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
				<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Services
				</h1>
				<p className="mb-8 leading-relaxed">Bocoup offers design, engineering, and product and organizational strategy services in pursuit of our mission.

                    Our project teams are comprised of product managers, technical project managers, designers, and engineers. Our individual projects are typically 3-12 months. We often work on multi-year programs comprising several full-time or part-time projects.</p>
				
			  </div>
			</div>
		  </section>
          <ServicesComponent/>
		  </>
  return (
    <Layout children={child}/>
  )
}

export default Services