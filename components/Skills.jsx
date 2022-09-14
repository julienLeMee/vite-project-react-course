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
      <div>
        <h3>Compétences</h3>
        <ul>
          <img src={rubyLogo} className="logo ruby" alt="Ruby logo" />
          <img src={ajaxLogo} className="logo ajax" alt="Ajax logo" />
          <img src={bootstrapLogo} className="logo bootstrap" alt="Bootstrap logo" />
          <img src={cssLogo} className="logo css" alt="CSS logo" />
          <img src={figmaLogo} className="logo figma" alt="Figma logo" />
          <img src={gitLogo} className="logo git" alt="Git logo" />
          <img src={githubLogo} className="logo github" alt="Github logo" />
          <img src={javascriptLogo} className="logo javascript" alt="Javascript logo" />
          <img src={htmlLogo} className="logo html" alt="HTML logo" />
          <img src={railsLogo} className="logo rails" alt="Rails logo" />
          <img src={sassLogo} className="logo sass" alt="Sass logo" />
          <img src={sqlLogo} className="logo sql" alt="SQL logo" />
        </ul>
        <h3>Currently learning</h3>
          <img src={reactLogo} className="logo react" alt="React logo" />
     </div>
    )
}
