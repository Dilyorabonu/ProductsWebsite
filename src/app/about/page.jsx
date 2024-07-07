function About() {
  return (
    <div className="p-8 bg-base-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">
        About Us
      </h1>
      <section className="mb-12 p-6 bg-base rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">
          Our Mission
        </h2>
        <p className="text-gray-700">
          Our mission is to revolutionize the industry with our cutting-edge
          product. We aim to provide innovative solutions that simplify and
          enhance everyday tasks.
        </p>
      </section>
      <section className="mb-12 p-6 bg-base rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">
          Our Team
        </h2>
        <p className="text-gray-700">
          We are a team of passionate professionals committed to excellence. Our
          diverse backgrounds and expertise come together to create something
          truly special.
        </p>
      </section>
      <section className="p-6 bg-base rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">
          Our Story
        </h2>
        <p className="text-gray-700">
          Our journey began with a simple idea, and it has grown into a
          full-fledged product loved by thousands. We are constantly evolving
          and striving to be better every day.
        </p>
      </section>
    </div>
  );
}

export default About;
