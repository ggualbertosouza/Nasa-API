import { useFetch } from "../../hook/useFetch";
import { ProfileProps } from "../../types/Api";

export default function ProfileCard() {
  const data = useFetch<ProfileProps[]>(
    "https://api.github.com/users/ggualbertosouza"
  );

  console.log(data.data?.login);

  return (
    <div className="flex flex-col items-center gap-4">
        <img className="h-96 w-96 object-cover rounded-full" src={data.data?.avatar_url} alt="" />
        <p className="sm:text-md md:text-2xl font-bold">{data.data?.login}</p>
        <p className="sm:text-sm md:text-lg font-serif">{data.data?.bio}</p>
    </div>
  );
}
