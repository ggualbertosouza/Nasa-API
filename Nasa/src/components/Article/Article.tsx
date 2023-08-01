import { useFetch } from "../../hook/useFetch";
import { apiProps } from "../../types/Api";
import Content from "./Content";

export default function Article() {
  const { data } = useFetch<apiProps>(
    "https://api.nasa.gov/planetary/apod?api_key=QhiFx7qkJb1PB7PPGV5ZKzrtWdSKHKa0oiCbxFqJ"
  );
  return (
    <main className="flex w-4/5 mx-auto p-6 justify-center items-center gap-4 shadow-lg shadow-white rounded-3xl bg-neutral-950">
      <section className="w-3/5">
        <Content />
      </section>
      <div className="h-96 overflow-hidden">
        <img
          className="w-full h-full bg-center object-cover"
          src={data?.url}
          alt="Nasa image"
        />
      </div>
    </main>
  );
}
