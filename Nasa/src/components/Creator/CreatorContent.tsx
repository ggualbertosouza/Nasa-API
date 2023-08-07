import ProfileCard from "../Card/ProfileCard";
import Title from "../Titles/Titles";

export default function CreatorContent() {
  return (
    <section className="flex flex-col gap-4">
      <Title>Guilherme Gualberto Souza</Title>
      <div className="flex flex-col gap-4 items-center bg-neutral-900 shadow-md shadow-white rounded-3xl p-6 ">
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:text-red-700">
            <i className="fa-brands fa-github"></i> GitHub
          </li>
          <li className="cursor-pointer hover:text-red-700">
            <i className="fa-brands fa-linkedin"></i> Linkedin
          </li>
          <li className="cursor-pointer hover:text-red-700">
            <i className="fa-brands fa-instagram"></i> Instagram
          </li>
        </ul>
        <ProfileCard />
      </div>
    </section>
  );
}
