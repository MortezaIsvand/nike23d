import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="flex max-lg:flex-col gap-4 justify-start lg:items-center lg:justify-between">
      <div>
        <h1 className="text-4xl sm:max-w-lg lg:max-w-xs font-bold max-sm:max-w-xs leading-normal">
          Sign Up from
          <span className="text-coral-red"> Updates</span> & Newsletter
        </h1>
      </div>
      <div>
        <div className="flex max-sm:flex-col sm:border border-black p-2 rounded-full justify-between gap-2">
          <input
            type="text"
            placeholder="subscribe@nike.com"
            className="border border-black flex-1 sm:border-none outline-none p-4 px-4 rounded-full"
          />
          <div>
            <Button fullwidth label={"Sign Up"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
