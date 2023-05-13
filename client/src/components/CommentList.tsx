import { Comment } from '../../../utils';

type Props = {
  comments: Comment[];
};
export default function CommentList({ comments }: Props) {
  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul className="list-disc">{renderedComments}</ul>;
}
