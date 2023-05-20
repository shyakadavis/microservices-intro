import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

function App() {
  return (
    <section>
      <h1 className="text-2xl tracking-wide">Create Post</h1>
      <PostCreate />
      <hr />
      <h2 className="my-5 text-2xl tracking-wide">Posts</h2>
      <PostList />
    </section>
  );
}

export default App;
