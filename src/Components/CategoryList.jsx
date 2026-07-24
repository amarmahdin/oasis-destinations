import CategorySubNav from './CategorySubNav'
import DestinationCard from './DestinationCard'
import { destinationsByCategory } from '../data/destinations'

function CategoryList({ categoryKey }) {
  const category = destinationsByCategory[categoryKey]

  if (!category) return null

  return (
    <div>
      <CategorySubNav />
      <section className="min-h-[calc(100vh-140px)] bg-[#EDF5F9] px-6 py-4 md:px-16 lg:px-[130px]">
        <h1 className="py-4 text-4xl font-semibold md:text-[48px]">{category.title}</h1>
        <p className="text-lg text-gray-400 md:text-[24px]">{category.subtitle}</p>
        <div className="flex flex-wrap gap-8 py-10 lg:gap-[110px]">
          {category.items.map((item) => (
            <DestinationCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default CategoryList
