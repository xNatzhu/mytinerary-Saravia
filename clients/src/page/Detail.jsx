import { useState, useEffect} from "react";
import {useParams}  from "react-router-dom"
import axios from "axios";

export default function Detail() {
    const {id} = useParams();
    const [city, setCity] = useState([]);
    useEffect(() => {
        const urlCityApi = "http://localhost:3000/api/city/"+id;
        axios.get(urlCityApi) 
            .then(res => {
                setCity(res.data); // Actualizar el estado con los datos obtenidos
                console.log(res.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return(
        <div style={{ backgroundImage: `url(${city.img})` }}>
        <div className="background-slider pt-[30px]">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
                <div className="relative w-full max-w-lg">
                <div className="absolute top-0 rounded-full -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div className="absolute rounded-full  -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                    <img
                    className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                    alt="hero"
                    src={city.img}
                    />
                </div>
                </div>
            </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-4 text-xs font-bold tracking-widest text-[#9DC08B] uppercase"> {city.country} </span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-200 md:text-7xl lg:text-5xl">
            {city.name}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-300">
            {city.description}
            </p>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}