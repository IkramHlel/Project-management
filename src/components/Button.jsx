export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 bg-stone-700 rounded-md  text-xs  md:text-base text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}
