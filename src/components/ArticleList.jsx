import Article from "./Article";

export default function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, i) => (
        <Article key={i} {...post} />
      ))}
    </main>
  );
}
