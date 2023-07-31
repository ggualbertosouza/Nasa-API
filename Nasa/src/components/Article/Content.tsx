import { useFetch } from "../../hook/useFetch";
import { apiProps } from "../../types/Api";

export type apiProps = {
    date: number;
    explanation: string;
    url: string;
  };
  

export default function Content() {
  const data = useFetch<apiProps>([]);
  console.log(data);

  return (
    <div>
      <ul>
        <li>
          <small>{data?.date}</small>
        </li>
        <li>
          <p>{data?.explanation}</p>
        </li>
        <li>
          <img src={data?.url} alt="" />
        </li>
      </ul>
    </div>
  );
}
