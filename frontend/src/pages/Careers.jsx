import React from "react";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Build amazing user experiences with React, TypeScript, and modern web technologies."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Lead product strategy and execution for our loan comparison platform."
    },
    {
      title: "Data Scientist",
      department: "AI/ML",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      description: "Develop AI models for loan matching and risk assessment."
    },
    {
      title: "Customer Success Manager",
      department: "Operations",
      location: "Delhi, India",
      type: "Full-time",
      experience: "2-3 years",
      description: "Ensure customer satisfaction and drive platform adoption."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="px-8 py-16 bg-gradient-to-r from-yellow-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Help us revolutionize the way India accesses financial products
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-gray-700 font-medium">50+ Team Members</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-gray-700 font-medium">4 Offices</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-gray-700 font-medium">Remote Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Culture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-yellow-50 rounded-2xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-600">We encourage creative thinking and bold ideas to solve real problems.</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-2xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">Work with talented individuals across different backgrounds and expertise.</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-2xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth</h3>
              <p className="text-gray-600">Continuous learning and career development opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Health & Wellness</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comprehensive health insurance</li>
                <li>• Mental health support</li>
                <li>• Gym membership reimbursement</li>
                <li>• Wellness programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Work-Life Balance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Flexible working hours</li>
                <li>• Remote work options</li>
                <li>• Unlimited paid time off</li>
                <li>• Parental leave</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Learning & Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Conference attendance</li>
                <li>• Online course subscriptions</li>
                <li>• Mentorship programs</li>
                <li>• Skill development budget</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Financial Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Competitive salary</li>
                <li>• Equity options</li>
                <li>• Performance bonuses</li>
                <li>• Retirement plans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Open Positions</h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded transition">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Don't See the Right Role?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded transition">
            Send Resume
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers; 