import React from 'react'
import { IonIcon } from '@ionic/react';
import { personOutline } from 'ionicons/icons';

const Testimonials = () => {
    const testimonials = [
  {
    user: "Aditi Sharma",
    company: "NovaTech Solutions",
    review: "The team delivered a seamless web platform that transformed our client experience. Professional, fast, and dependable!"
  },
  {
    user: "Rahul Mehta",
    company: "GreenLeaf Ventures",
    review: "From strategy to deployment, their work was flawless. Truly a reliable tech partner for startups like ours."
  },
  {
    user: "Sneha Kapoor",
    company: "Elevate Marketing",
    review: "Their digital marketing solutions helped us scale our outreach by 3x within months. Highly recommended!"
  },
  {
    user: "Ankit Verma",
    company: "Skyline Retail",
    review: "We needed custom software to manage inventory and sales — and they nailed it. Clean code, user-friendly design."
  },
  {
    user: "Neha Bansal",
    company: "BluePeak Analytics",
    review: "The data dashboards they created made decision-making easier and faster. Their BI team knows their stuff!"
  },
  {
    user: "Vikram Singh",
    company: "CloudNest",
    review: "They helped us migrate and automate our entire system on the cloud. Super efficient and future-ready work!"
  }
];


  return (
    <section id = "testimonial">
    <div className = "mt-10 tracking-wide">
        <h2 className = "text-3xl sm:text-4xl lg:text-6xl text-center my-10 lg:my-20">Hear from Our Partners</h2>
        <div className = "flex flex-wrap justify-center">
            {testimonials.map((item, index) => (
                <div key = {index} className = "w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>
                        <p>{item.review}</p>
                        <div className = "flex mt-8 items-center">
                            <IonIcon icon = {personOutline} className = "p-2  border border-neutral-600 rounded-full "/>
                            <div className = "ml-4">
                                <h6>{item.user}</h6>
                                <span className = "text-sm font-normal italic text-neutral-600">{item.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
    </section>
  )
}

export default Testimonials