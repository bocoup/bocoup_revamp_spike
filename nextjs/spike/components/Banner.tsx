export const Banner = () => {
  return (
    <div className="bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <p className="text-center font-medium sm:text-left">
        WE STAND IN SOLIDARITY WITH
        <br className="sm:hidden" />
        THE MOVEMENT FOR BLACK LIVES
      </p>

      <a
        className="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
        href="/alpinejs"
      >
        Learn More
      </a>
    </div>
  );
};
