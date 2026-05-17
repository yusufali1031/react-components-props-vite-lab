import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    <>
      <Header name={blogData.name} />
      <About about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </>
  );
}

export default App;