import Article from "../components/Article/Article";
import Title from "../components/Titles/Titles";

export default function Home() {
  return (
    <div className="space-y-12">
      <Title>
        Astronomy Picture of the Day
      </Title>  
      <Article />
    </div>
  );
}
