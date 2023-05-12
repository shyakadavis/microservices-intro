import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Comment } from '../utils';

type Props = {
  postId: string;
};
export default function CommentList({ postId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchData = useCallback(async () => {
    const res = await axios.get(
      `http://localhost:8081/posts/${postId}/comments`,
    );

    setComments(res.data);
  }, [postId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul className="list-disc">{renderedComments}</ul>;
}
