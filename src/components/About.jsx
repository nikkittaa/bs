import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-20">
      <div className="border-y border-neutral-700 max-w-4xl mx-auto text-center py-6 mt-6 ">
         <span className = "bg-neutral-900 text-purple-700 rounded-full h-8 text-xl font-medium px-2 py-2">
                ABOUT US
        </span>

        <p className="text-neutral-500 text-lg leading-relaxed my-6 px-12">
          At <span className="font-semibold">BSolutions</span>, we believe in turning complex challenges into smart solutions. 
          Our mission is to empower businesses through innovative technology, tailored strategies, and dependable support.
          With a team of passionate experts, we deliver scalable, future-ready solutions that help you grow, adapt, and thrive in the digital age.
        </p>

        <p className="text-neutral-500 text-lg leading-relaxed py-6">
          Founded with a vision to bridge the gap between technology and business needs, 
          <span className="font-semibold"> BSolutions </span> has grown into a trusted partner for startups, enterprises, and everything in between.
          We specialize in custom software development, cloud solutions, digital marketing, and data analytics — all designed to drive real results.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
