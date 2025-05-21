import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio, github, linkedin, email }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-emerald-600 font-medium mb-4">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex space-x-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors duration-200">
              <Github size={20} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
              <Linkedin size={20} />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="text-gray-500 hover:text-emerald-600 transition-colors duration-200">
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Project Lead & Full Stack Developer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "5+ years developing tech solutions for agricultural challenges with expertise in React, Node.js, and Google Maps API integration.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "alex@example.com"
    },
    {
      name: "Priya Sharma",
      role: "AI & Machine Learning Engineer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "ML specialist focusing on logistics optimization algorithms and voice recognition for multilingual support in rural areas.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "priya@example.com"
    },
    {
      name: "Marcus Johnson",
      role: "UX Designer & Agricultural Consultant",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Combines design expertise with 3 years of fieldwork with rural farmers to create accessible, intuitive interfaces.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "marcus@example.com"
    },
    {
      name: "Lin Wei",
      role: "IoT Specialist & Hardware Engineer",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Designs low-cost, durable IoT devices for agricultural environments with expertise in sensor technology and solar power.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "lin@example.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet the Synergy Squad
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            A diverse team of experts passionate about transforming agricultural logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              github={member.github}
              linkedin={member.linkedin}
              email={member.email}
            />
          ))}
        </div>

        {/* Contact Form */}
        <div id='contact' className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Get in Touch
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;