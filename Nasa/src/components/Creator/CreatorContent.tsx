import Title from "../Titles/Titles";

export default function CreatorContent() {
  return (
    <section className="flex flex-col gap-12">
      <Title>Guilherme Gualberto Souza</Title>
      <div className="w-3/5 bg-neutral-900 mx-auto shadow-md shadow-white rounded-3xl p-6">
          <ul>
            <li><i class="fa-brands fa-github"></i> GitHub</li>
            <li><i class="fa-brands fa-linkedin"></i> Linkedin</li>
            <li><i class="fa-brands fa-instagram"></i> Instagram</li>
          </ul>
      </div>
    </section>
  );
}
