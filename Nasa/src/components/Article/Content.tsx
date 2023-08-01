import { useFetch } from "../../hook/useFetch";
import { apiProps } from "../../types/Api";
import Button from "../Buttons/Button";

export default function Content() {
  const { data } = useFetch<apiProps>(
    "https://api.nasa.gov/planetary/apod?api_key=QhiFx7qkJb1PB7PPGV5ZKzrtWdSKHKa0oiCbxFqJ"
  );

  return (
    <div>
      <ul className="flex flex-col gap-4 ">
        <li className="text-center text-4xl font-bold">
          <small>{data?.title}</small>
        </li>
        <li className="text-md">
          <p className="italic">{data?.explanation}</p>
        </li>
        <li>
          <small className="text-red-700">{data?.date}</small>
        </li>
        <li className="self-center"><Button> <i class="fa-brands fa-space-awesome"></i> Visit Nasa</Button></li>
      </ul>
      
    </div>
  );
}
