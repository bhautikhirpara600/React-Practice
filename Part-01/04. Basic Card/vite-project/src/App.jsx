import Button from "./Button"
import CardText from "./CardText"
import googlePlayIcon from './Images/google-play-icon.svg'
import appleIcon from './Images/apple-icon.svg'

function App() {

  return (
    <section className="card">
      <CardText />
      <div className="btn-container">
        <Button bgBtn={"google-play"} imgURL={googlePlayIcon} btnName={"Google play icon"} smallText={"Get it on"} bigText={"Google Play"} />
        <Button bgBtn={"apple"} imgURL={appleIcon} btnName={"Apple icon"} smallText={"Download from"} bigText={"App Store"} />
      </div>
    </section>
  )
}

export default App
