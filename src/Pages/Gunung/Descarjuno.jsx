import MainLayout from '../../layouts/MainLayout'
import DestinationDetail from '../../Components/DestinationDetail'
import { destinationDetails } from '../../data/destinations'

function Descarjuno() {
  return (
    <MainLayout>
      <DestinationDetail data={destinationDetails.arjuno} />
    </MainLayout>
  )
}

export default Descarjuno
