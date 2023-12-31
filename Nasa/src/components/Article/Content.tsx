import { useFetch } from "../../hook/useFetch";
import { apiProps } from "../../types/Api";

export default function Content() {
  const { data } = useFetch<apiProps>(
    "https://api.nasa.gov/planetary/apod?api_key=QhiFx7qkJb1PB7PPGV5ZKzrtWdSKHKa0oiCbxFqJ"
  );

  return (
    <div>
      <ul className="flex flex-col gap-1 ">
        <li className="text-center font-bold sm:text-md lg:text-4xl">
          <small>{data?.title}</small>
        </li>
        <li className="text-sm lg:text-lg md:text-md">
          <p className="italic">{data?.explanation}</p>
        </li>
        <li>
          <small className="text-red-700">{data?.date}</small>
        </li>
      </ul>
      
    </div>
  );
}
