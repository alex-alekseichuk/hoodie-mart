import axios from "axios";

export async function loadGalleryItems(sorting) {
  const [sort, order] = sorting.split('-')
  const res = await axios.get(`http://localhost:3001/items?sort=${sort}&order=${order}`)
  return res.data
}
