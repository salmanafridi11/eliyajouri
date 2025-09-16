"use client";
import React, { useState } from 'react';
import { BsFillBuildingFill } from 'react-icons/bs';
import { FaMapPin } from 'react-icons/fa';
import { FiUpload, FiUser } from 'react-icons/fi';
import { LuGraduationCap } from 'react-icons/lu';



const Section7 = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    industry: '',
    contactPerson: '',
    title: '',
    email: '',
    phone: '',
    partnershipType: '',
    budgetRange: '',
    description: '',
    areasOfInterest: [],
    termsAccepted: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (area) => {
    setFormData(prev => ({
      ...prev,
      areasOfInterest: prev.areasOfInterest.includes(area)
        ? prev.areasOfInterest.filter(item => item !== area)
        : [...prev.areasOfInterest, area]
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#FCAD1D] p-4 md:p-8" id='partnership'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl  font-bold text-gray-800 mb-6">
            Start Your Partnership Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to create meaningful impact together? Submit your partnership proposal and 
            let's discuss how we can collaborate to empower communities and build stronger 
            futures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 h-[700px]">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Partnership Contact Information</h2>
            
            <div className="space-y-8">
              {/* Partnership Director */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiUser className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Partnership Director</h3>
                  <p className="text-gray-600">Maria Gonzalez</p>
                  <p className="text-gray-600">partnerships@empoweringfutures.org</p>
                  <p className="text-gray-600">+1 (212) 555-0145</p>
                </div>
              </div>

              {/* Corporate Partnerships */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BsFillBuildingFill className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Corporate Partnerships</h3>
                  <p className="text-gray-600">David Chen</p>
                  <p className="text-gray-600">corporate@empoweringfutures.org</p>
                  <p className="text-gray-600">+1 (212) 555-0167</p>
                </div>
              </div>

              {/* Academic Collaborations */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <LuGraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Academic Collaborations</h3>
                  <p className="text-gray-600">Dr. Amina Hassan</p>
                  <p className="text-gray-600">academic@empoweringfutures.org</p>
                  <p className="text-gray-600">+1 (212) 555-0189</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Office Address</h3>
                  <p className="text-gray-600">125 W 125th Street, Suite 300</p>
                  <p className="text-gray-600">New York, NY 10027</p>
                  <p className="text-gray-600">Monday - Friday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Proposal Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Partnership Proposal Form</h2>
            
            <div className="space-y-6">
              {/* Organization Name & Industry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry/Sector *
                  </label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Contact Person & Title */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title/Position *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Partnership Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Type *
                </label>
                <select
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white"
                  required
                >
                  <option value="">Select Partnership Type</option>
                  <option value="corporate">Corporate Partnership</option>
                  <option value="academic">Academic Collaboration</option>
                  <option value="nonprofit">Nonprofit Alliance</option>
                  <option value="government">Government Partnership</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Proposed Partnership Budget Range
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select Budget Range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="over-500k">Over $500,000</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Proposal Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Please describe your proposed partnership, including objectives, expected outcomes, timeline, and how it aligns with our mission..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                  required
                />
              </div>

              {/* Areas of Interest */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Education & Literacy',
                    'Health & Wellness', 
                    'Youth Programs',
                    'Women\'s Empowerment',
                    'Community Development',
                    'Cultural Exchange'
                  ].map((area) => (
                    <label key={area} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.areasOfInterest.includes(area)}
                        onChange={() => handleCheckboxChange(area)}
                        className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="text-sm text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Supporting Documents
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-400 transition-colors">
                  <FiUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-2">
                    Upload organization profile, annual reports, or partnership proposals
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    PDF, DOC, or DOCX files up to 10MB each
                  </p>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Choose Files
                  </button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.termsAccepted}
                  onChange={(e) => setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }))}
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 mt-0.5"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  I agree to the terms and conditions and confirm that the information provided is 
                  accurate. I understand that this submission will be reviewed by the partnership 
                  team and I may be contacted for additional information. *
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-[#D97706] text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Submit Partnership Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;