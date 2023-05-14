import { FormEvent, useState } from 'react';
import axios from 'axios';
import Input from './Input';
import Button from './Button';

export default function PostCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await axios.post('http://posts.com/posts', {
      title,
      content,
    });

    setTitle('');
    setContent('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="my-10 grid gap-5 rounded-xl shadow-lg border-[0.5px] bg-[#A2D2FF] p-10"
    >
      <Input
        id="title"
        label="Title"
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        id="content"
        label="Content"
        name="content"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button type="submit" label="Submit" />
    </form>
  );
}
