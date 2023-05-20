type Props = {
  label: string;
  type?: 'submit' | 'button';
};

export default function Button({ label, type = 'button' }: Props) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className="rounded-lg shadow-inner hover:shadow-lg py-2 px-3 bg-[#FFC8DD] hover:bg-[#FFAFCC] transition-all"
    >
      {label}
    </button>
  );
}
