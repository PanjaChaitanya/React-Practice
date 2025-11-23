import React from 'react'
import { useEffect,useState } from 'react'


const Products = () => {
    const [productData, setProductData] = useState([]) 
    const [search,setSearch] = useState("")
    const [color, setColor] = useState("")
    const [capacity, setCapacity] = useState("")
    const [minPrice, setMinPrice] = useState("")    
    const [maxPrice, setMaxPrice] = useState("")    

    useEffect(() => {
        fetch('https://api.restful-api.dev/objects')
        .then(res=>res.json())
        .then(data=>{
            const cleaned = data.map(item=>({
                id: item.id,
                name: item.name,
                color: item?.data?.color ||"NA",
                capacity: item?.data?.capacity || "NA",
                price: item?.data?.price || 0
            }))
            setProductData(cleaned)
        }
        )
    }, [])

    const filterData = productData.filter(p=>{
        const matchesName = 
        p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())

        const matchesColor = 
        color ? p.color.toLowerCase() === color.toLowerCase() : true;

        const matchesMin = 
        minPrice? p.price >= Number(minPrice):true;
        const matchesMax = 
        maxPrice? p.price <= Number(maxPrice):true;

        return matchesColor || matchesName || matchesMin || matchesMax;

    })
  return (
    <section className=" mt-10 flex flex-col items-center justify-center">
        <div className='flex  justify-around space-x-3'>
            <div>
            <input type="text"
            placeholder='Search by product name'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className='border-1 border-gray-400 rounded-md p-2'    
            />
            </div>
            <div>
            <select className='border' 
            value={color}
            onChange={(e)=>setColor(e.target.value)}
            >
            <option value="">Color</option>
            <option value="Black">Black</option>
            <option value="Gradient">Gradient</option>
            <option value="Cloudy White">Cloudy White</option>
            </select>
            </div>
            <div>
            <select className='border'
            value={capacity}
            onChange={(e)=>setCapacity(e.target.value)}
            >
                <option value="">Capacity</option>
                <option value="128GB">128GB</option>
                <option value="256GB">256GB</option>
                <option value="512GB">512GB</option>
            </select>
            </div>
            <div>
                <input type="number" placeholder='enter minimum value'
                value={minPrice}
                onChange={(e)=>setMinPrice(e.target.value)}
                />
                <input type="number" placeholder='enter maximum value'
                value={maxPrice}
                onChange={(e)=>setMaxPrice(e.target.value)}
                />
            </div>
        </div>
        <div className='grid grid-cols-3 gap-2.5'>
            {filterData.map(pd=>(
            <div key={pd.id} class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{pd.name}</div>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Color:{pd.color}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Capacity:{pd.capacity}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price:{pd.price}</span>
            </div>
            </div>
        ))}
        </div>
        {filterData.length === 0 &&(
            <p className='min-h-screen text-red-500 flex flex-col items-center justify-center'>
                No products found
            </p>
        )}
    </section>
  )
}

export default Products