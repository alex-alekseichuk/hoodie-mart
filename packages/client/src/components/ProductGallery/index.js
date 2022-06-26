import React, {useState} from "react"
import {useQuery} from "react-query"
import {useCartContext} from "../../contexts/CartContext"
import {Sorting} from "./Sorting";
import {loadGalleryItems} from "../../api/gallery";

function Index() {
  const [sorting, setSorting] = useState('title-asc')
  const {data} = useQuery(['query-gallery-items', sorting], context => loadGalleryItems(sorting))

  const cart = useCartContext()

  return (
    <div className="my-4">
      <div className="pb-4 border-b-[1px]">
        <Sorting sorting={sorting} onChange={setSorting} />
      </div>
      <div className="my-4 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data?.items?.map(item =>
          <div key={item.id} className="flex flex-col shadow-2xl p-4 space-y-4">
            <div className="flex-auto">
              <div className="flex justify-center bg-gray-100 p-2">
                <img src="items/01.png" className="" />
              </div>
              <div className="flex mt-4 space-x-4">
                <div className="flex-auto text-lg uppercase">
                  {item.title}
                  &nbsp;
                  {item.category}
                </div>
                <div className="text-lg uppercase flex items-center">
                  &#163;{item.price}
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button onClick={() => cart.add(item)} className="p-4 bg-purple-300 text-white">ADD TO CART</button>
              <button className="p-4 bg-gray-200">QUICK VIEW</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Index
