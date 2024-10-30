import React from 'react'

export default function Profile() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">My Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
        {/* Row 1 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Registration Date</span>
          <span className="text-lg text-gray-800">February 28, 2026 8:01 am</span>
        </div>
        {/* Row 2 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">First Name</span>
          <span className="text-lg text-gray-800">John</span>
        </div>
        {/* Row 3 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Last Name</span>
          <span className="text-lg text-gray-800">Doe</span>
        </div>
        {/* Row 4 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Username</span>
          <span className="text-lg text-gray-800">instructor</span>
        </div>
        {/* Row 5 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Email</span>
          <span className="text-lg text-gray-800">example@gmail.com</span>
        </div>
        {/* Row 6 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Phone Number</span>
          <span className="text-lg text-gray-800">+1-202-555-0174</span>
        </div>
        {/* Row 7 */}
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-gray-600">Skill/Occupation</span>
          <span className="text-lg text-gray-800">Application Developer</span>
        </div>
      </div>
      {/* Biography */}
      <div className="mt-10">
        <h3 className="font-semibold text-lg mb-4 text-gray-600">Biography</h3>
        <p className="leading-relaxed text-gray-800 text-lg">
          I'm the Front-End Developer for #ThemeGenix in New York, OR. I have a
          serious passion for UI effects, animations, and creating intuitive,
          dynamic user experiences.
        </p>
      </div>
    </div>
  )
}
