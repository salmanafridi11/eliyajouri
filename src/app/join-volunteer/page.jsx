"use client";
import React, { useState } from "react";
import {
  FiClock,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiMail,
  FiPhone,
  FiCalendar,
  FiUpload,
  FiStar,
} from "react-icons/fi";

const VolunteerApplication = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    profilePhoto: null,

    // Experience & Motivation
    previousExperience: "",
    motivation: "",
    reference1Name: "",
    reference1Contact: "",
    reference2Name: "",
    reference2Contact: "",
    additionalInfo: "",
    agreeTerms: false,

    // Skills & Interests
    skills: [],
    englishLevel: "",
    arabicLevel: "",
    otherLanguages: "",
    programAreas: [],

    // Availability & Preferences
    weeklyAvailability: {
      Mon: { Morning: false, Afternoon: false, Evening: false },
      Tue: { Morning: false, Afternoon: false, Evening: false },
      Wed: { Morning: false, Afternoon: false, Evening: false },
      Thu: { Morning: false, Afternoon: false, Evening: false },
      Fri: { Morning: false, Afternoon: false, Evening: false },
      Sat: { Morning: false, Afternoon: false, Evening: false },
      Sun: { Morning: false, Afternoon: false, Evening: false },
    },
    preferredLocation: "",
    commitmentDuration: "",
  });

  const steps = [
    { title: "Personal Information", icon: "1" },
    { title: "Experience & Motivation", icon: "2" },
    { title: "Skills & Interests", icon: "3" },
    { title: "Availability & Preferences", icon: "4" },
  ];

  const skillOptions = [
    "Teaching & Tutoring",
    "Healthcare & Medical",
    "Counseling & Social Work",
    "Administration & Organization",
    "Fundraising & Grant Writing",
    "Marketing & Communications",
    "Technology & IT Support",
    "Translation & Interpretation",
    "Arts & Creative Programs",
    "Sports & Recreation",
    "Business & Entrepreneurship",
  ];

  const programAreas = [
    {
      id: "education",
      label: "Education & Literacy",
      desc: "Tutoring, adult education, STEM programs",
    },
    {
      id: "health",
      label: "Health & Wellness",
      desc: "Community health, mental health support",
    },
    {
      id: "community",
      label: "Community Development",
      desc: "Economic development, infrastructure",
    },
    {
      id: "womens",
      label: "Women's Empowerment",
      desc: "Leadership, entrepreneurship training",
    },
  ];

  const currentOpportunities = [
    {
      title: "Youth Mentorship Program",
      location: "New York City",
      description:
        "After school tutoring and mentorship for middle school students",
      schedule: "Weekdays 3-6 PM",
    },
    {
      title: "Women's Entrepreneurship",
      location: "Morocco",
      description:
        "Support women starting small businesses with training and mentorship",
      schedule: "Flexible schedule",
    },
    {
      title: "Community Health Outreach",
      location: "San Francisco",
      description: "Health education and wellness program support",
      schedule: "Weekends preferred",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSkillToggle = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleProgramAreaToggle = (programId) => {
    setFormData((prev) => ({
      ...prev,
      programAreas: prev.programAreas.includes(programId)
        ? prev.programAreas.filter((p) => p !== programId)
        : [...prev.programAreas, programId],
    }));
  };

  const handleAvailabilityChange = (day, timeSlot) => {
    setFormData((prev) => ({
      ...prev,
      weeklyAvailability: {
        ...prev.weeklyAvailability,
        [day]: {
          ...prev.weeklyAvailability[day],
          [timeSlot]: !prev.weeklyAvailability[day][timeSlot],
        },
      },
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const saveDraft = () => {
    console.log("Saving draft...", formData);
  };

  const submitApplication = () => {
    console.log("Submitting application...", formData);
  };

  const renderPersonalInformation = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Address
        </label>
        <textarea
          value={formData.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
          placeholder="Street address, city, state, zip code"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profile Photo (Optional)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-500">
            Click to upload or drag and drop
          </p>
          <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
        </div>
      </div>
    </div>
  );

  const renderExperienceMotivation = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Previous Volunteer Experience
        </label>
        <textarea
          value={formData.previousExperience}
          onChange={(e) =>
            handleInputChange("previousExperience", e.target.value)
          }
          placeholder="Please describe any previous volunteer work, including organizations, roles, and duration. If you're new to volunteering, that's perfectly fine - just let us know!"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Motivation Statement *
        </label>
        <textarea
          value={formData.motivation}
          onChange={(e) => handleInputChange("motivation", e.target.value)}
          placeholder="Please tell us why you want to volunteer with our organization. What draws you to our mission? What do you hope to contribute and gain from this experience?"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
        />
      </div>

      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-4">
          References (Optional)
        </h4>
        <p className="text-sm text-gray-600 mb-4">
          Please provide contact information for two references who can speak to
          your character and abilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h5 className="font-medium text-gray-700">Reference 1</h5>
            <input
              type="text"
              value={formData.reference1Name}
              onChange={(e) =>
                handleInputChange("reference1Name", e.target.value)
              }
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            />
            <input
              type="text"
              value={formData.reference1Contact}
              onChange={(e) =>
                handleInputChange("reference1Contact", e.target.value)
              }
              placeholder="Phone/Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            />
          </div>

          <div className="space-y-4">
            <h5 className="font-medium text-gray-700">Reference 2</h5>
            <input
              type="text"
              value={formData.reference2Name}
              onChange={(e) =>
                handleInputChange("reference2Name", e.target.value)
              }
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            />
            <input
              type="text"
              value={formData.reference2Contact}
              onChange={(e) =>
                handleInputChange("reference2Contact", e.target.value)
              }
              placeholder="Phone/Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Information
        </label>
        <textarea
          value={formData.additionalInfo}
          onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
          placeholder="Is there anything else you'd like us to know about you or your interest in volunteering?"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          checked={formData.agreeTerms}
          onChange={(e) => handleInputChange("agreeTerms", e.target.checked)}
          className="h-4 w-4 text-orange-600 focus:ring-[#D97706] border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
          I agree to the terms and conditions
        </label>
      </div>
      <p className="text-xs text-gray-500">
        By submitting this application, I confirm that the information provided
        is accurate and complete. I understand that volunteer positions may
        require background checks and that I will be contacted for an interview
        if selected.
      </p>
    </div>
  );

  const renderSkillsInterests = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Skills Assessment (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {skillOptions.map((skill) => (
            <div key={skill} className="flex items-center">
              <input
                type="checkbox"
                id={skill}
                checked={formData.skills.includes(skill)}
                onChange={() => handleSkillToggle(skill)}
                className="h-4 w-4 text-orange-600 focus:ring-[#D97706] border-gray-300 rounded"
              />
              <label
                htmlFor={skill}
                className="ml-2 block text-sm text-gray-900"
              >
                {skill}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Please specify other skills"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
          />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-4">
          Language Proficiency
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              English
            </label>
            <select
              value={formData.englishLevel}
              onChange={(e) =>
                handleInputChange("englishLevel", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            >
              <option value="">Select level</option>
              <option value="basic">Basic</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="native">Native</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Arabic
            </label>
            <select
              value={formData.arabicLevel}
              onChange={(e) => handleInputChange("arabicLevel", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            >
              <option value="">Select level</option>
              <option value="basic">Basic</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="native">Native</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Other Languages
          </label>
          <textarea
            value={formData.otherLanguages}
            onChange={(e) =>
              handleInputChange("otherLanguages", e.target.value)
            }
            placeholder="List any other languages and proficiency levels"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Preferred Program Areas (Select all that interest you) *
        </label>
        <div className="space-y-4">
          {programAreas.map((area) => (
            <div key={area.id} className="flex items-start">
              <input
                type="checkbox"
                id={area.id}
                checked={formData.programAreas.includes(area.id)}
                onChange={() => handleProgramAreaToggle(area.id)}
                className="h-4 w-4 text-orange-600 focus:ring-[#D97706] border-gray-300 rounded mt-1"
              />
              <div className="ml-3">
                <label
                  htmlFor={area.id}
                  className="block text-sm font-medium text-gray-900"
                >
                  {area.label}
                </label>
                <p className="text-sm text-gray-600">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAvailabilityPreferences = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Weekly Availability *
        </label>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b"></th>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day) => (
                    <th
                      key={day}
                      className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-l"
                    >
                      {day}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {["Morning", "Afternoon", "Evening"].map((timeSlot) => (
                <tr key={timeSlot} className="border-b">
                  <td className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50">
                    {timeSlot}
                  </td>
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <td
                        key={`${day}-${timeSlot}`}
                        className="px-4 py-2 text-center border-l"
                      >
                        <input
                          type="checkbox"
                          checked={formData.weeklyAvailability[day][timeSlot]}
                          onChange={() =>
                            handleAvailabilityChange(day, timeSlot)
                          }
                          className="h-4 w-4 text-orange-600 focus:ring-[#D97706] border-gray-300 rounded"
                        />
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Preferred Location *
          </label>
          <div className="space-y-2">
            {[
              "New York City Programs",
              "Morocco Programs",
              "Both Locations (Travel Opportunities)",
              "Remote Support",
            ].map((location) => (
              <div key={location} className="flex items-center">
                <input
                  type="radio"
                  id={location}
                  name="preferredLocation"
                  value={location}
                  checked={formData.preferredLocation === location}
                  onChange={(e) =>
                    handleInputChange("preferredLocation", e.target.value)
                  }
                  className="h-4 w-4 text-orange-600 focus:ring-[#D97706] border-gray-300"
                />
                <label
                  htmlFor={location}
                  className="ml-2 block text-sm text-gray-900"
                >
                  {location}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Commitment Duration *
          </label>
          <select
            value={formData.commitmentDuration}
            onChange={(e) =>
              handleInputChange("commitmentDuration", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97706]"
          >
            <option value="">Select duration</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-12-months">6-12 months</option>
            <option value="1-year-plus">1+ years</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderPersonalInformation();
      case 1:
        return renderExperienceMotivation();
      case 2:
        return renderSkillsInterests();
      case 3:
        return renderAvailabilityPreferences();
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#29573b] p-6  ">
      <div className="max-w-7xl mx-auto md:p-6 p-2 min-h-screen pb-16 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Application Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm md:p-8 p-4">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Volunteer Application
                  </h1>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiClock className="mr-2" />
                    Estimated time: 15 minutes
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div
                    className="bg-[#D97706] h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentStep + 1) / steps.length) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-8">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium
                      ${
                        index <= currentStep
                          ? "bg-[#D97706] text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                      >
                        {index < currentStep ? <FiCheck /> : step.icon}
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`h-0.5 w-16 ml-4
                        ${
                          index < currentStep ? "bg-[#D97706]" : "bg-gray-200"
                        }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  {steps[currentStep].title}
                </h2>
              </div>

              {/* Step Content */}
              {renderStepContent()}

              {/* Navigation Buttons */}
              <div className="flex md:justify-between justify-center gap-4 mt-8">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="md:px-6 px-4 py-2 text-xs text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <FiChevronLeft className="mr-2" />
                  Previous
                </button>

                <div className="flex space-x-4">
                  <button
                    onClick={saveDraft}
                    className="md:px-6 px-4 py-2 text-xs text-teal-600 bg-white border border-teal-300 rounded-md hover:bg-teal-50 flex items-center"
                  >
                    Save Draft
                  </button>
                  {currentStep === steps.length - 1 ? (
                    <button
                      onClick={submitApplication}
                      className="md:px-6 px-4 py-2 text-xs text-white bg-[#D97706] rounded-md hover:bg-orange-600 flex items-center"
                    >
                      Submit Application
                    </button>
                  ) : (
                    <button
                      onClick={nextStep}
                      className="md:px-6 px-4 py-2 text-xs text-white bg-[#D97706] rounded-md hover:bg-orange-600 flex items-center"
                    >
                      Next Step
                      <FiChevronRight className="ml-2" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-sm md:p-6 p-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-[#D97706] rounded-full mr-2"></span>
                Volunteer Requirements
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                  Minimum age of 16 years (under 18 requires parental consent)
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                  Commitment to at least 4 hours per month
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                  Background check for certain positions
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                  Attendance at orientation session
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                  Reliable communication and punctuality
                </li>
              </ul>
            </div>

            {/* Application Process */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-[#D97706] rounded-full mr-2"></span>
                Application Process
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Submit Application",
                    desc: "Complete and submit this form",
                    active: true,
                  },
                  {
                    step: 2,
                    title: "Review Process",
                    desc: "We'll review your application within 5-7 business days",
                  },
                  {
                    step: 3,
                    title: "Interview",
                    desc: "Phone or video call to discuss opportunities",
                  },
                  {
                    step: 4,
                    title: "Orientation",
                    desc: "Training and program introduction",
                  },
                  {
                    step: 5,
                    title: "Start Volunteering",
                    desc: "Begin making a difference!",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start">
                    <div
                      className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium mr-3 flex-shrink-0
                    ${
                      item.active
                        ? "bg-[#D97706] text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Opportunities */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FiStar className="text-[#D97706] mr-2" />
                Current Opportunities
              </h3>
              <div className="space-y-4">
                {currentOpportunities.map((opp, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-orange-200 pl-4 py-2"
                  >
                    <h4 className="text-sm font-medium text-gray-900">
                      {opp.title}
                    </h4>
                    <p className="text-xs text-gray-600 mb-1">
                      {opp.location} - {opp.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <FiClock className="mr-1" />
                      {opp.schedule}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Questions Section */}
            <div className="bg-[#D97706] rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Questions?</h3>
              <p className="text-sm mb-4 text-orange-100">
                Our volunteer coordinator is here to help you through the
                application process.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <FiMail className="mr-2 flex-shrink-0" />
                  volunteers@empoweringfutures.org
                </div>
                <div className="flex items-center">
                  <FiPhone className="mr-2 flex-shrink-0" />
                  +1 (212) 555-0150
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerApplication;
