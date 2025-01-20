import { Header } from "./components/header/header";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
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
