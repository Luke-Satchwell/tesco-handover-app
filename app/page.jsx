import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex items-center flex-col gap-8 md:gap-14 px-4 min-h-screen">
      <h1 className="text-4xl md:text-5xl text-center font-bold gradient-heading">
        Create and Share <br className="max-md:hidden" />
        <span className="text-center">Your Handover</span>
      </h1>
      <p className="text-center text-xl md:text-3xl w-4/5">
        The Handover app is a one stop shop for capturing and sharing all the
        aspects you want to go unmissed
      </p>

      <Feed />
    </section>
  );
};
export default Home;
