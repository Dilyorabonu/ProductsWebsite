import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="p-8 bg-base-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-7xl font-bold text-indigo-600">
          Welcome to Our Product
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          Discover how our innovative solutions can revolutionize your workflow.
        </p>
      </header>

      <section className="p-6 bg-base rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-500">
          Features
        </h2>
        <p className="text-gray-500">
          Our product offers a range of features designed to enhance your
          productivity and streamline your tasks. From intuitive interfaces to
          powerful tools, we have everything you need to succeed. We are
          committed to delivering exceptional value to our users. Our dedicated
          team works tirelessly to ensure that you have the best experience
          possible, with continuous updates and support.
        </p>
      </section>

      <section className="p-6 bg-base rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-500">
          Get Started
        </h2>
        <p className="text-gray-500">
          Ready to take your productivity to the next level? Sign up today and
          see the difference our product can make for you. Join thousands of
          satisfied users who have transformed their workflows with our
          innovative solutions.
        </p>
      </section>

      <section className="mt-12 text-center">
        <Link
          href="/products"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-500 transition duration-300"
        >
          Go to Product Page
        </Link>
      </section>
    </div>
  );
}

export default Home;
