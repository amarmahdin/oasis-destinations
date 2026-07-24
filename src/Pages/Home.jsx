import MainLayout from '../layouts/MainLayout'
import CarouselComponent from '../Components/Carousel'
import Content from '../Components/Content'
import Contact from '../Components/Contact'

function Home() {
  return (
    <MainLayout>
      <CarouselComponent />
      <Content />
      <Contact />
    </MainLayout>
  )
}

export default Home
