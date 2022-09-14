import react from 'react'
import ajaxLogo from '../src/assets/ajax-logo.png'
import bootstrapLogo from '../src/assets/bootstrap-logo.png'
import cssLogo from '../src/assets/css-logo.png'
import figmaLogo from '../src/assets/figma-logo.png'
import gitLogo from '../src/assets/git-logo.png'
import githubLogo from '../src/assets/github-logo.png'
import htmlLogo from '../src/assets/html-logo.png'
import javascriptLogo from '../src/assets/javascript-logo.png'
import railsLogo from '../src/assets/rails-logo.png'
import reactLogo from '../src/assets/react-logo.png'
import rubyLogo from '../src/assets/ruby-logo.png'
import sassLogo from '../src/assets/sass-logo.svg'
import sqlLogo from '../src/assets/sql-logo.png'

export default function Skills() {
    return (
      <div className='skills'>
        <h3>Compétences</h3>
        <ul className='skills-list'>
          <img src={rubyLogo} className="skills-logo logo ruby" alt="Ruby logo" />
          <img src={ajaxLogo} className="skills-logo logo ajax" alt="Ajax logo" />
          <img src={bootstrapLogo} className="skills-logo logo bootstrap" alt="Bootstrap logo" />
          <img src={cssLogo} className="skills-logo logo css" alt="CSS logo" />
          <img src={figmaLogo} className="skills-logo logo figma" alt="Figma logo" />
          <img src={gitLogo} className="skills-logo logo git" alt="Git logo" />
          <img src={githubLogo} className="skills-logo logo github" alt="Github logo" />
          <img src={javascriptLogo} className="skills-logo logo javascript" alt="Javascript logo" />
          <img src={htmlLogo} className="skills-logo logo html" alt="HTML logo" />
          <img src={railsLogo} className="skills-logo logo rails" alt="Rails logo" />
          <img src={sassLogo} className="skills-logo logo sass" alt="Sass logo" />
          <img src={sqlLogo} className="skills-logo logo sql" alt="SQL logo" />
        </ul>
        <h3>Currently learning</h3>
          <img src={reactLogo} className="skills-logo-react logo react" alt="React logo" />
     </div>
    )
}
