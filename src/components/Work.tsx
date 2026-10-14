import { useState, useCallback } from 'react'
import './styles/Work.css'
import WorkImage from './WorkImage'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

const projects = [
  {
    title: 'TulSip Media Website',
    category: 'Web Development',
    tools: 'Vite + JavaScript',
    image: '/images/tulsip.jpeg',
  },
  {
    title: 'RD Growth Website',
    category: 'Web Development',
    tools: 'HTML & CSS',
    image: '/images/rdgrowth.png',
  },
  {
    title: 'Shop 24 Seven Website',
    category: 'Web Development',
    tools: 'HTML & CSS',
    image: '/images/shop24.png',
  },
  {
    title: 'Code Bug Detection',
    category: 'Command Line Tool',
    tools: 'RNN, CNN, GNN, Python',
    //image: '/images/radix.png',
  },
  {
    title: 'Library Book Management System',
    category: 'Eductation Management',
    tools: 'Python, CLI',
    image: '/images/lbm.png',
  },
  {
    title: 'Currency Converter',
    category: 'Finance',
    tools: 'Python, Tkinter',
    image: '/images/cc.png',
  },
  {
    title: 'Password Generator',
    category: 'Security',
    tools: 'Python, CLI',
    image: '/images/pg.png',
  },
  {
    title: 'Task Manager',
    category: 'Productivity',
    tools: 'Python, CLI',
    image: '/images/tm.png',
  },
  {
    title: 'Weather App',
    category: 'Utility',
    tools: 'Python, CLI',
    image: '/images/wa.png',
  },
  {
    title: 'Quiz App',
    category: 'Education',
    tools: 'Python, CLI',
    image: '/images/qa.png',
  },
  {
    title: 'ChatBot',
    category: 'Python, NLP',
    tools: 'Python, CLI',
    image: '/images/chatbot.png',
  },
  {
    title: 'Tomato Leaf Disease Detection',
    category: 'AI/ML',
    tools: 'CNN/ViT, Python',
    image: '/images/tld.png',
  },
  {
    title: 'Expense Tracker',
    category: 'AIML',
    tools: 'CNN/ViT, Python',
    //image: '/images/radix.png',
  },
]

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrentIndex(index)
      setTimeout(() => setIsAnimating(false), 500)
    },
    [isAnimating],
  )

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }, [currentIndex, goToSlide])

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }, [currentIndex, goToSlide])

  return (
    <div className='work-section' id='work'>
      <div className='work-container section-container'>
        <h2>
          My <span>Work</span>
        </h2>

        <div className='carousel-wrapper'>
          {/* Navigation Arrows */}
          <button
            className='carousel-arrow carousel-arrow-left'
            onClick={goToPrev}
            aria-label='Previous project'
            data-cursor='disable'
          >
            <MdArrowBack />
          </button>
          <button
            className='carousel-arrow carousel-arrow-right'
            onClick={goToNext}
            aria-label='Next project'
            data-cursor='disable'
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className='carousel-track-container'>
            <div
              className='carousel-track'
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className='carousel-slide' key={index}>
                  <div className='carousel-content'>
                    <div className='carousel-info'>
                      <div className='carousel-number'>
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className='carousel-details'>
                        <h4>{project.title}</h4>
                        <p className='carousel-category'>{project.category}</p>
                        <div className='carousel-tools'>
                          <span className='tools-label'>Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className='carousel-image-wrapper'>
                      {project.image ? (
                        <WorkImage image={project.image} alt={project.title} />
                      ) : (
                        <div
                          className='image-placeholder'
                          aria-label='No project image available'
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className='carousel-dots'>
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? 'carousel-dot-active' : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor='disable'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
