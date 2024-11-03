    import React from 'react'
    import { FaStar, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

    
    export default function DeatailLectureCard() {
        // Fake data
        const profile = {
          name: "Robert Fox",
          profession: "Expert Laravel Pro",
          reviews: "4.8",
          email: "info@gmail.com",
          phone: "+123 9500 600",
          bio: "Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur Vestiy bulum a nec odio aea the dumm ipsumm ipsum that dolocons sus suada and farit consectetur elit.",
          image: "/images/pic1-removebg-preview.png", // Replace with the actual image path
          socialLinks: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            whatsapp: "#",
            youtube: "#"
          }
        };
        return (
          <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="bg-[#1c1a4a] p-6 rounded-2xl shadow-lg text-white flex flex-col md:flex-row items-center w-[90%] max-w-4xl">
              {/* Profile Image */}
              <div className="md:w-1/3 flex justify-center md:justify-start">
                <img
                  src={profile.image}
                  alt="Profile"
                  className="rounded-full w-52 h-52 object-cover border-4 border-white"
                />
              </div>
      
              {/* Info Section */}
              <div className="md:w-2/3 mt-4 md:mt-0 md:ml-8">
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <p className="text-xl text-gray-300 mb-2">{profile.profession}</p>
      
                {/* Contact Info */}
                <div className="flex items-center mb-4">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-yellow-400 mr-2">{profile.reviews} Reviews</span>
                  <span className="mx-2">•</span>
                  <FaEnvelope className="mr-1" />
                  <span className="mr-2">{profile.email}</span>
                  <span className="mx-2">•</span>
                  <FaPhone className="mr-1" />
                  <span>{profile.phone}</span>
                </div>
      
                {/* Bio */}
                <p className="mb-4 text-gray-300">
                  {profile.bio}
                </p>
      
                {/* Social Icons */}
                <div className="flex space-x-4">
                  <a href={profile.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-white text-2xl hover:text-gray-300 cursor-pointer" />
                  </a>
                  <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-white text-2xl hover:text-gray-300 cursor-pointer" />
                  </a>
                  <a href={profile.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white text-2xl hover:text-gray-300 cursor-pointer" />
                  </a>
                  <a href={profile.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-white text-2xl hover:text-gray-300 cursor-pointer" />
                  </a>
                  <a href={profile.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-white text-2xl hover:text-gray-300 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      }
    