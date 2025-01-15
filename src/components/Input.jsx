export default function Input({ ref, label, textarea, ...props }) {
  const classes =
    "w-full p-1 bg-stone-200 border-b-2 rounded-sm border-b-stone-300 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col justify-center gap-1 my-4">
      <label className="uppercase font-bold text-sm text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
}
