import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Blurhash } from 'react-blurhash'
import './index.css'

const Projects = () => {
  const [data, setData] = useState(null)  // Cambiado de quizzes a data para manejar ambos
  const [loading, setLoading] = useState(true)
  const [courseLoaded, setCourseLoaded] = useState([])

  const handleCourseLoad = (index) => {
    setCourseLoaded((prevLoaded) => {
      const loaded = [...prevLoaded]
      loaded[index] = true
      return loaded
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/quizzes.json')  // Asegúrate de que la ruta al archivo JSON es correcta
        const data = await response.json()
        setData(data)  // Almacena todo el JSON en el estado data
        setLoading(false)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='quizzes'>
      <h1 className='quizzes__title'>Projects</h1>
      <p className='quizzes__subtitle'>In this section, you'll find projects I've been a part of.</p>
      <div className='quizzes__container'>
        {
          loading ? <Loading /> :
          data?.projects?.map(project => (  // Mapea sobre data.projects
            <Link to={project.quiz_url} target="_blank" key={project.id} className='quiz__link'>
              <div className='quiz__container'>
                <p className='quiz__info'>
                  <span>{project.technologies}</span>
                  <span>{project.title}</span>
                </p>
                <p className='quiz__date'>{project.date}</p>
              </div>
            </Link>
          ))
        }
      </div>

    </div>
  )
}

export default Projects
