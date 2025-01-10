import {
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaBrain,
  FaCloud,
  FaChartBar,
  FaComments,
  FaCube,
} from "react-icons/fa";
import custome from "./assets/images/custome.jpg";
import web from "./assets/images/web.jpg";
import app from "./assets/images/app.jpg";
import ml from "./assets/images/ml.jpg";
import rpa from "./assets/images/rpa.jpg";
import chatbot from "./assets/images/chatbot.jpg";
import block from "./assets/images/block.jpg";
import data from "./assets/images/data.jpg";
import cloud from "./assets/images/cloud.jpg";

export const companyDetails = {
  phone: "9686612171",
  email: "skylyticstechnologies@gmail.com",
  address:
    " SBB Diamond , Hoodi Main road , Ayyappa Nagar, Krpuram. Banglore 560036 Karnataka",
};
export const services = [
  {
    id: 1,
    service: "Custom Software Development",
    image: custome,
    description:
      "Our custom software development services are designed to meet the unique needs of your business. We create scalable, secure, and flexible applications that integrate seamlessly with your existing systems, helping you improve productivity and reduce operational costs.",
    icon: <FaCode />,
  },
  {
    id: 2,
    image: web,
    service: "Full-Stack Web Development",
    description:
      "Our full-stack web development team builds robust, user-friendly websites and web applications. We handle everything from front-end design to back-end integration, ensuring your website is fast, secure, and optimized for performance.",
    icon: <FaGlobe />,
  },
  {
    id: 3,
    image: app,
    service: "Mobile App Development",
    description:
      "Reach your customers on the go with custom mobile applications. We specialize in developing high-performance iOS and Android apps that deliver seamless user experiences, helping businesses engage with their customers in meaningful ways.",
    icon: <FaMobileAlt />,
  },
  {
    id: 4,
    image: ml,
    service: "AI Solutions & Machine Learning",
    description:
      "Harness the power of artificial intelligence to drive business growth. We develop AI solutions tailored to your needs, including predictive analytics, automation, and machine learning models that help you make data-driven decisions and optimize operations.",
    icon: <FaBrain />,
  },
  {
    id: 5,
    image: rpa,
    service: "Robotic Process Automation (RPA)",
    description:
      "Automate repetitive tasks and improve business efficiency with robotic process automation. We help businesses implement RPA solutions that free up valuable resources, reduce errors, and accelerate workflows, allowing employees to focus on higher-value activities.",
    icon: <FaRobot />,
  },
  {
    id: 6,
    image: chatbot,
    service: "Chatbot Development",
    description:
      "Enhance customer service and engagement with intelligent chatbots. Our AI-powered chatbots provide instant support, automate interactions, and deliver personalized experiences that improve customer satisfaction and operational efficiency.",
    icon: <FaComments />,
  },
  {
    id: 7,
    image: block,
    service: "Blockchain Development",
    description:
      "Transform your business with secure and transparent blockchain solutions. We offer blockchain development services to create decentralized applications, smart contracts, and cryptocurrency systems that ensure data integrity and streamline processes.",
    icon: <FaCube />,
  },
  {
    id: 8,
    image: data,
    service: "Data Analytics & Business Intelligence",
    description:
      "Unlock valuable insights with our data analytics and business intelligence services. We help businesses collect, analyze, and interpret data to make informed decisions, identify trends, and gain a competitive edge in the market.",
    icon: <FaChartBar />,
  },
  {
    id: 9,
    image: cloud,
    service: "Cloud Computing Services",
    description:
      "Maximize the potential of the cloud with our cloud computing solutions. We provide cloud migration, infrastructure management, and scalable cloud applications that support your business growth and improve operational efficiency.",
    icon: <FaCloud />,
  },
];

export const industries = [
  {
    title: "Healthcare",
    description:
      "Enhance patient care, improve operational efficiency, and drive innovation with AI, RPA, data analytics, and custom software solutions.",
  },
  {
    title: "Finance",
    description:
      "Leverage blockchain, predictive analytics, and AI-driven decision-making tools to optimize investments, manage risks, and enhance financial services.",
  },
  {
    title: "Retail",
    description:
      "Use AI, data analytics, and custom software to improve customer experiences, optimize supply chains, and streamline operations in the retail sector.",
  },
  {
    title: "Manufacturing",
    description:
      "Automate processes, predict maintenance needs, and improve product quality with AI, RPA, and blockchain technology for the manufacturing industry.",
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Enhance transparency, optimize routes, and improve supply chain efficiency with blockchain, data analytics, and AI solutions.",
  },
  {
    title: "Education",
    description:
      "Develop personalized learning experiences, streamline administrative tasks, and leverage data analytics for improved educational outcomes.",
  },
];

export const testimonials = [
  {
    name: "Amit Sharma",
    role: "CEO",
    company: "GreenTech Solutions",
    testimonial:
      "Skylytics Technologies LLP really helped us bring our vision to life with a custom software solution that perfectly aligns with our business goals. Their team took the time to understand our specific needs and developed a platform that streamlined our operations. We couldn’t be happier with the result. They’ve been a reliable partner in our growth.",
  },
  {
    name: "Rajiv Malhotra",
    role: "CTO",
    company: "InnovatePro",
    testimonial:
      "Skylytics Technologies LLP has been a key player in building a software solution tailored to our needs. The team worked closely with us, ensuring that the final product was exactly what we wanted. Their attention to detail and professional approach made the whole process smooth and efficient. Highly recommend!",
  },
  {
    name: "Neha Gupta",
    role: "Product Manager",
    company: "HealthCareHub",
    testimonial:
      "The team at Skylytics Technologies LLP delivered a full-stack web solution that exceeded our expectations. From the design to the back-end integration, they created a seamless, user-friendly platform that has greatly enhanced user engagement. Their approach was both professional and flexible, making the whole process stress-free.",
  },
  {
    name: "Vikram Singh",
    role: "Marketing Director",
    company: "TechSavvy Solutions",
    testimonial:
      "Skylytics Technologies LLP has done an outstanding job with our full-stack web development. They really understood our business needs and delivered a high-quality solution that was both responsive and scalable. Their ongoing support has been invaluable, and we’re already seeing a positive impact on our operations.",
  },
  {
    name: "Priya Desai",
    role: "Head of Customer Engagement",
    company: "GoTech Innovations",
    testimonial:
      "Skylytics Technologies LLP brought our mobile app idea to life in a way that has exceeded all expectations. They ensured that the app was not only functional but also user-friendly and visually appealing. Our customers love it, and we’ve seen a noticeable increase in user engagement.",
  },
  {
    name: "Sandeep Rao",
    role: "Founder",
    company: "QuickMove",
    testimonial:
      "Thanks to Skylytics Technologies LLP, our mobile app is now a key part of our business. Their team worked diligently to ensure the app was intuitive and integrated well with our other systems. It’s been a game-changer in terms of customer interactions, and we couldn’t be happier with the outcome.",
  },
  {
    name: "Kiran Patel",
    role: "VP of Operations",
    company: "DataCore Technologies",
    testimonial:
      "Skylytics Technologies LLP has helped us leverage AI and machine learning to make smarter business decisions. Their team implemented predictive models that have improved our operations significantly. The insights we've gained have allowed us to optimize workflows and deliver better results.",
  },
  {
    name: "Amit Kumar",
    role: "Chief Data Scientist",
    company: "InfoVision Labs",
    testimonial:
      "The AI solutions provided by Skylytics Technologies LLP have completely transformed how we use our data. They helped us develop smarter, more efficient systems that automate processes and provide insights that directly impact our bottom line. Their expertise and guidance have been invaluable.",
  },
  {
    name: "Ananya Mehta",
    role: "COO",
    company: "FinanceEdge Solutions",
    testimonial:
      "Skylytics Technologies LLP has made a huge difference in our back-office operations by implementing robotic process automation. The team worked closely with us to identify repetitive tasks and automated them effectively, which has led to significant time and cost savings. Our team can now focus on more important tasks, thanks to their innovative solutions.",
  },
  {
    name: "Ravi Kumar",
    role: "Director of Operations",
    company: "Global Enterprises",
    testimonial:
      "We partnered with Skylytics Technologies LLP to introduce RPA into our business, and it’s been a game-changer. The automation of routine tasks has not only improved efficiency but also reduced errors. The team was proactive and thorough in ensuring the automation fit our needs perfectly.",
  },
  {
    name: "Rita Sharma",
    role: "Customer Success Manager",
    company: "E-commerce Global",
    testimonial:
      "Skylytics Technologies LLP helped us develop a chatbot that has made a noticeable difference in how we interact with our customers. The bot handles queries efficiently, which has improved our response times and customer satisfaction. The integration was smooth, and the team ensured the bot met all our requirements.",
  },
  {
    name: "Harish Reddy",
    role: "Customer Service Head",
    company: "RetailMasters",
    testimonial:
      "We were looking for a chatbot solution that could handle customer queries effectively, and Skylytics Technologies LLP delivered just that. The bot has streamlined our support processes, providing instant responses to customers. Our team is now able to focus on more complex issues, and the feedback from users has been overwhelmingly positive.",
  },
  {
    name: "Meera Prakash",
    role: "Founder",
    company: "BlockChainX",
    testimonial:
      "Skylytics Technologies LLP helped us develop a secure and transparent blockchain solution that has revolutionized how we do business. Their expertise guided us through the process, ensuring we were on the right track. We’ve seen the benefits in terms of improved security and customer trust.",
  },
  {
    name: "Saurabh Singh",
    role: "CTO",
    company: "FinTech Innovations",
    testimonial:
      "Thanks to Skylytics Technologies LLP, we now have a reliable blockchain platform that enhances both transparency and efficiency. The team was thorough in understanding our needs and delivered a solution that not only meets but exceeds our expectations. Their expertise in blockchain technology has been a huge asset.",
  },
  {
    name: "Sonal Agarwal",
    role: "Director of Strategy",
    company: "DataPro",
    testimonial:
      "Skylytics Technologies LLP has truly changed the way we view and use data. Their data analytics and BI solutions have provided us with clear, actionable insights that have transformed our decision-making process. Their expertise in this area has given us a competitive advantage we didn’t have before.",
  },
  {
    name: "Sandeep Verma",
    role: "Head of Analytics",
    company: "RetailVision",
    testimonial:
      "With Skylytics Technologies LLP' data analytics and business intelligence solutions, we now have a clearer understanding of our data, allowing us to make smarter decisions. The tools they provided helped us visualize and analyze key metrics, leading to better business outcomes. Their team has been excellent to work with.",
  },
  {
    name: "Ravi Gupta",
    role: "IT Manager",
    company: "FinSolve Solutions",
    testimonial:
      "Skylytics Technologies LLP made our cloud migration smooth and stress-free. They helped us move our operations to the cloud with minimal downtime, and their expertise in cloud computing has helped us scale efficiently. The flexibility and performance we gained from the transition have been invaluable.",
  },
  {
    name: "Preeti Chawla",
    role: "Chief Technology Officer",
    company: "RetailX",
    testimonial:
      "Migrating to the cloud with Skylytics Technologies LLP was one of the best decisions we’ve made. Their team ensured everything was set up securely and optimized for performance, which has significantly improved our operational efficiency. We’re now able to scale our infrastructure as needed, thanks to their support.",
  },
];
