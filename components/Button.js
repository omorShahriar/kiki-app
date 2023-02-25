const Button = ({ children, ...props }) => {
  return (
    <button
      className="rounded-md md:py-3 py-2 md:px-12 px-9 border-2 dark:border-gray-300 border-zinc-700 cursor-pointer dark:disabled:border-zinc-700 dark:disabled:text-zinc-700 disabled:text-gray-300 disabled:border-gray-300 transition-colors duration-200 "
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
