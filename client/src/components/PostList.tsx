import { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '../../../utils';
import CommentList from './CommentList';
import CommentCreate from './CommentCreate';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const res = (await axios.get('http://localhost:8082/posts')) as {
      data: Post[];
    };

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <section className="grid grid-cols-3 gap-5">
      {posts.map((post) => (
        <section
          key={post.id}
          className="rounded-lg bg-[#CDB4DB] shadow-lg p-5"
        >
          <h2 className="text-lg underline decoration-dashed">{post.title}</h2>
          <article className="my-5">{post.content}</article>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </section>
      ))}
    </section>
  );
}
