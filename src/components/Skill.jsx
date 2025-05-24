/**
 *  @copyright 2025 lucas-backDev
 *  @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/nextjs.svg',
        label: 'Next.js',
        desc: 'Framework'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'Node.js',
      desc: 'Web Server'
    },
    {
        imgSrc: '/images/HTML.svg',
        label: 'HTML',
        desc: 'Programming'
    },
    {
        imgSrc: '/images/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/PHP.svg',
        label: 'PHP',
        desc: 'Web'
    },
    {
        imgSrc: '/images/python.svg',
        label: 'Python',
        desc: 'Programming'
      },
    {
        imgSrc: '/images/django.svg',
        label: 'Django',
        desc: 'Python Framework'
    },
    {
      imgSrc: '/images/java.svg',
      label: 'Java',
      desc: 'Programming'
    },
    {
        imgSrc: '/images/spring.svg',
        label: 'Spring Boot',
        desc: 'Java Framework'
    },
    {
      imgSrc: '/images/MySQL.svg',
      label: 'MySQL',
      desc: 'Database'
    },
    {
      imgSrc: '/images/postgresql.svg',
      label: 'PostgreSQL',
      desc: 'Database'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
  ];


const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2">
                    Essential Tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) =>(
                            <SkillCard 
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Skill