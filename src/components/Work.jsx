/**
 *  @copyright 2025 lucas-backDev
 *  @license Apache-2.0
 */


/**
 * Componentes
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/mvituzzoserena.png',
    title: 'Landing Page MVituzzo',
    tags: ['Landing Page', 'React', 'NextJS', 'TailwindCSS'],
    projectLink: 'https://github.com/lucas-backDev/mvituzzoserena'
  },
  {
    imgSrc: '/images/mvituzzo.png',
    title: 'Landing Page MVituzzo',
    tags: ['Landing Page', 'React', 'NextJS', 'TailwindCSS'],
    projectLink: 'https://github.com/lucas-backDev/mvituzzo'
  },
  {
    imgSrc: '/images/todolist.png',
    title: 'TODO List',
    tags: ['Java', 'Spring Boot', 'React', 'NextJS', 'TailwindCSS'],
    projectLink: 'https://github.com/lucas-backDev/TODO_List_App'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work