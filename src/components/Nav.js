import Img3 from './plant3.png';
export default function Nav({ articles, setArticle }) {
  console.log("NAV ARTS:", articles);
  return (
    <nav>
      {!articles
        ? "No articles"
        : articles.map((a) => (
            <p key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </p>
          ))}
      <img id = "plant3" src= {Img3} alt="pic" />
    </nav>
  );
}
