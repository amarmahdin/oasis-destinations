import MainLayout from '../../layouts/MainLayout'
import DestinationDetail from '../../Components/DestinationDetail'
import { destinationDetails } from '../../data/destinations'

function Descplengkung() {
  return (
    <MainLayout>
      <DestinationDetail data={destinationDetails.plengkung} />
    </MainLayout>
  )
}

export default Descplengkung
