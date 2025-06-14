import SeaImg from './assets/Images/sea.jpg'
import HomeImg from './assets/Images/home.jpg'
import SkyImg from './assets/Images/sky.jpg'
import Home from './Home'
import Sea from './Sea'
import Sky from './Sky'

function App() {
  return (
    <>
      <h1 className='title'>Hello React</h1>
      <section className='container'>
        <Home ImgURL={HomeImg} Title="home-img" />
        <Sea ImgURL={SeaImg} Title={"sea-img"} />
        <Sky ImgURL={SkyImg} Title={"sky-img"} />
      </section>
    </>
  )
}

export default App
