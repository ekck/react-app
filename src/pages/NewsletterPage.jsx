import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker, FaAddressCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CTA from '../components/CTA'

import {urlFor, client} from '../client';

const NewsletterPage = () => {
    const { _id } = useParams();
    const newsletter = useLoaderData()

    


//     const [newsletter, setNewsletter] = useState(null);
//     const [loading, setLoading] = useState(true)

//  useEffect(() => {
//     const fetchNewsletter = async () => {
//         try {
          
//             const query = `*[_type == "newsletters" && _id == "${_id}"][0]`; 

//             const data = await client.fetch(query);
//             console.log(data);
//             setNewsletter(data);
//         } catch (error) {
//             console.error('Error fetching newsletter:', error);
//         }finally {
//             setLoading(false)
//         }

//     }

//     fetchNewsletter();
//  }, []) 

  return (
<>
<section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/newsletters'
            className='text-indigo-500 hover:text-indigo-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Newsletters
          </Link>
        </div>
      </section>


    <div className="flex flex-col">
    <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{newsletter.title}</h1>
            <p className="text-gray-600">Published on : <span>{newsletter.releaseDate}</span></p>
<div className=''>
    
    <p className="text-gray-600">Author : <span>{newsletter.author}</span></p>

</div>
        </div>
    </div>
    <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 px-4">
                <img src={urlFor(newsletter.imgUrl)} alt="Blog Featured Image" className="mb-8"/>
                <div className="prose max-w-none">
                    <p>{newsletter.content}</p>
                    <img src={urlFor(newsletter.img2Url)} class="w-full mb-3"/>
                    {/* <img src={urlFor(newsletter.img3Url)} class="w-full mb-3"/> */}
                    <p className="text-gray-600">Description: <span>{newsletter.imgdescription1}</span></p>
                    <p>{newsletter.content2}</p>
                    {/* <img src={urlFor(newsletter.img4Url)} class="w-full mb-3"/>
                    <img src={urlFor(newsletter.img5Url)} class="w-full mb-3"/> */}
                    <p className="text-gray-600">Description: <span>{newsletter.imgdescription2}</span></p>
                    <p>{newsletter.content3}</p>
                </div>
            </div>
            {/* <div className="w-full md:w-1/4 px-4">
                <div className="bg-gray-100 p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h2>
                    <ul className="list-none">
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Blog Post 1</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Blog Post 2</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Blog Post 3</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Blog Post 4</a>
                        </li>
                    </ul>
                </div>
                <div className="bg-gray-100 p-4 mt-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
                    <ul className="list-none">
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Category 1</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Category 2</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Category 3</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Category 4</a>
                        </li>
                    </ul>
                </div>
            </div> */}
        </div>
<CTA/>
    </div>
</div>
</>
)
}


const newsletterLoader = async ({ params }) =>{
    const { _id } = params; // Destructure _id from params object
    const query = `*[_type == "newsletters" && _id == "${_id}"][0]`; 
    const data = await client.fetch(query);
    console.log(data);
    return data;
}


export {NewsletterPage as default, newsletterLoader}
