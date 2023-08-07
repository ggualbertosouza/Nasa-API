import { useFetch } from "../../hook/useFetch";
import { apiProps } from "../../types/Api";
import Button from "../Buttons/Button";
import Content from "./Content";

export default function Article() {
  const { data } = useFetch<apiProps>(
    "https://api.nasa.gov/planetary/apod?api_key=QhiFx7qkJb1PB7PPGV5ZKzrtWdSKHKa0oiCbxFqJ"
  );

  return (
    <main className="h-full" >
      <div className="flex flex-col gap-4 mx-6 p-8 justify-center items-center shadow-md shadow-white rounded-3xl bg-neutral-950  xl:text-3xl">
        <div className="flex sm:flex-col xl:flex-row items-center justify-center gap-2 ">
          <section className="xl:w-2/3 sm:w-full ">
            <Content />
          </section>

          <div className=" ">
            <img
              className="h-full w-full bg-center object-cover rounded-md"
              src={data?.url}
              alt="Nasa image"
            />
          </div>
        </div>

        <Button>
          <i className="fa-brands fa-space-awesome"></i> Visit Nasa
        </Button>
      </div>
    </main>
  );
}
