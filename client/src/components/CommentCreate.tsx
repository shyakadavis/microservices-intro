import { FormEvent, useState } from 'react';
import axios from 'axios';
import Input from './Input';
import Button from './Button';

type Props = {
  postId: string;
};
export default function CommentCreate({ postId }: Props) {
  const [content, setContent] = useState('');
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        id="content"
        label="Comment"
        name="content"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button label="Comment" type="submit" />
    </form>
  );
}
