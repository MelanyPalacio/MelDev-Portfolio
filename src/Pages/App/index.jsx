import { useRoutes, BrowserRouter, Outlet } from 'react-router-dom'
import { SiteProvider } from '../../Context'
import Header from '../../Components/Header'
import CaseStudyTrailersMovieApp from '../CaseStudyTrailersMovieApp'
import CaseStudyNetworkingApp from '../CaseStudyNetworkingApp'
import Home from '../../Components/Home'
import PassionsContainer from '../../Components/PassionsContainer'
import About from '../../Components/About'
import Footer from '../../Components/Footer'
import NotFound from '../../Components/NotFound'
import PostsContainer from '../../Components/PostsContainer'
import './index.css'
import Projects from '../../Components/Projects'

const AppRoutes = () => { 
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/ux/case-study-trailers-movie-app', element: <CaseStudyTrailersMovieApp/> },
    { path: '/ux/case-study-networking-app', element: <CaseStudyNetworkingApp/> },
    { path: '/ux', element: <Projects/> },
    { path: '/Passions', element: <PassionsContainer/> },
    { path: '/blog', element: <PostsContainer/> },
    { path: '/about', element: <About /> },
    { path: '/*', element: <NotFound /> }
  ])

  return routes
}

const App = () => {
  return (
    <SiteProvider>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <AppRoutes />
          <Footer />
          <Outlet />
        </div>
      </BrowserRouter>
    </SiteProvider>
  )
}

export default App