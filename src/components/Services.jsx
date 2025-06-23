import { IonIcon } from '@ionic/react';
import {
  briefcaseOutline,
  codeSlashOutline,
  globeOutline,
  trendingUpOutline,
  analyticsOutline,
  cloudOutline,
} from 'ionicons/icons';


const Services = () => {
const services = [
  {
    icon: briefcaseOutline,
    title: "Business Strategy & Consulting",
    description: "Expert guidance to define goals, unlock growth, and build a winning business roadmap."
  },
  {
    icon: codeSlashOutline,
    title: "Custom Software Development",
    description: "Scalable, secure software tailored to meet your unique business challenges."
  },
  {
    icon: globeOutline,
    title: "Website Design & Development",
    description: "Responsive, user-friendly websites that convert visitors into loyal customers."
  },
  {
    icon: trendingUpOutline,
    title: "Digital Marketing & SEO",
    description: "Maximize your online presence with SEO, ads, and content strategies that deliver results."
  },
  {
    icon: analyticsOutline,
    title: "Data Analytics & Business Intelligence",
    description: "Turn your data into strategic insights to make smarter, faster business decisions."
  },
  {
    icon: cloudOutline,
    title: "Cloud Integration & Automation",
    description: "Modernize your infrastructure with scalable cloud tools and seamless automation."
  }
];

  return (
    <section id = "service">
    <div className = " mt-20 border-b border-neutral-800 min-h-[800-px]">
        <div className = "text-center">
            <span className = "bg-neutral-900 text-purple-700 rounded-full h-8 text-xl font-medium px-2 py-1">
                SERVICES
            </span>
            <h2 className = "text-3xl sm:text-4xl lg:text-5xl mt-10 ;g:mt-20 tracking-wide">Convenient Business 
            <span className = "bg-gradient-to-r from-pink-600 to-purple-800 text-transparent bg-clip-text" > Solutions</span></h2>
        </div>
        <div className = "text-md flex flex-wrap mt-10 lg:mt-20">
            {services.map((item, index) =>(
                <div key = {index} className = "w-full sm:w-1/2 lg:w-1/3">
                    <div className = "flex">
                        <div className = "flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-purple-700 justify-center items0center rounded-full" >
                            <IonIcon icon = {item.icon}/>
                        </div>
                        <div>
                            <h5 className = "mt-1 mb-6 text-xl">{item.title}</h5>
                            <p className = "tetx-md p-2 mb-20 text-neutral-500">{item.description}</p>
                        </div>
                    </div>

                </div>
            ))}
        </div>

    </div>
    </section>
  )
}

export default Services