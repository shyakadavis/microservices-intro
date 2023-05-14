import { Comment } from '../utils';

type Props = {
  comments: Comment[];
};
export default function CommentList({ comments }: Props) {
  const renderedComments = comments.map((comment) => {
    let content;

    switch (comment.status) {
      case 'APPROVED':
        content = comment.content;
        break;
      case 'PENDING':
        content = 'This comment is awaiting moderation';
        break;
      case 'REJECTED':
        content = 'This comment has been rejected';
        break;
      default:
        break;
    }
    return <li key={comment.id}>{content}</li>;
  });
  return <ul className="list-disc">{renderedComments}</ul>;
}
