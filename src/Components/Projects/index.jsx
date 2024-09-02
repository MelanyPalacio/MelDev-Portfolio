import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import './index.css'

const Projects = () => {
  const [quizzes, setQuizzes] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/quizzes.json')
        const data = await response.json()
        setQuizzes(data)
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
          quizzes?.map(quiz => (
            <Link to={quiz.quiz_url} target="_blank" key={quiz.id} className='quiz__link'>
              <div className='quiz__container'>
                <p className='quiz__info'>
                  <span>{quiz.technologies}</span>
                  <span>{quiz.title}</span>
                </p>
                <p className='quiz__date'>{quiz.date}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Projects 