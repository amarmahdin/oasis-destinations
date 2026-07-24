import MainLayout from '../../layouts/MainLayout'
import DestinationDetail from '../../Components/DestinationDetail'
import { destinationDetails } from '../../data/destinations'

function Desctumpaksewu() {
  return (
    <MainLayout>
      <DestinationDetail data={destinationDetails.tumpaksewu} />
    </MainLayout>
  )
}

export default Desctumpaksewu
