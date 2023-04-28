export default function Home() {
  return (
    <section
      className="text-white p-8 grid grid-cols-1 md:grid-cols-2 gap-4"
      style={{
        backgroundImage: 'url("/images/spaceBanner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "darken",
      }}>
      <h1 className="text-4xl font-bold flex items-center justify-center my-5 ">
        Discover the Frontier of Space with Space X
      </h1>
      <h2
        className="text-2xl font-bold flex items-center justify-center my-5"
      >Stay Up-to-Date with the Latest Launches, Rockets, and History</h2>
      <p
        className="text-lg flex items-center  my-5"
      >
        Welcome to our website, where we use the Space X API to provide you with
        up-to-date information on the latest rocket launches and a comprehensive
        history of Space X`s achievements. From the historic Falcon Heavy launch
        to the recent Inspiration4 mission, we have it all covered. Join us on
        this exciting journey of discovery and exploration, and stay informed
        about the latest news and developments in space travel and history.
      </p>
    </section>
  );
}
