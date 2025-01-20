import Image from "next/image";

export default function Home() {
  return (
    <main>

      <div className="header">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div>
          <h1>Lucas Gomes</h1>
          <h2>Full Stack Developer</h2>
        </div>

      </div>

      <div className="skills">
        <h3>Skills</h3>
        <p></p>
        <div className="skillslevel">

        </div>

        <div className="infos">
          <h3>Languages</h3>

          <div className="languages-info">
            <span>🇺🇸 EN - Itermediate</span>
            <span>🇺🇸 PT-BR - Native</span>
          </div>
          
          <h3>Education</h3>

          <div className="education-info">
            <span>🎓</span>
            <span>Studying Computer Science Bachelor's Degree - Universidade Paulista</span>
          </div>

        </div>

        <div className="buttons">
          
          <div className="social">

          </div>

          <button>Contact-me</button>

        </div>

      </div>
    </main>    
  );
}
