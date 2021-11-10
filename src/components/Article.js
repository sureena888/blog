

export default function Article({ article }) {
  function deleteArticle(){
    article.delete()
  };
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
          <button onClick = {() => deleteArticle()}>Delete</button>
        </section>
      )}
    </article>
  );
}
