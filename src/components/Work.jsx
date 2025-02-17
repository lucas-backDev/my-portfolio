/**
 *  @copyright 2025 lucas-backDev
 *  @license Apache-2.0
 */


import ProjectCard from "./ProjectCard";


const works = [
    {
      imgSrc: '',
      title: 'I\'m working on it',
      tags: ['Developing'],
      projectLink: 'https://github.com/lucas-backDev'
    },
    
  ];


const Work = () => {
    return (
        <section 
        id="work"
        className="section"
        >
            <div className="container">

                <h2 className="headline-2 mb-8">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(autofill,_minmax(280px,_1fr))]">
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