"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Upload, 
  FileText, 
  Users, 
  TrendingUp, 
  Target, 
  Building, 
  DollarSign,
  Calendar,
  Globe,
  Lightbulb,
  Shield,
  CheckCircle,
  AlertCircle,
  Briefcase,
  Award,
  PieChart
} from 'lucide-react';

export default function FundingPage() {
  // Robot verification logic - moved before useState
  const robotQuestions = [
    { question: "🐱 What sound does a cat make?", answer: "meow", hint: "The most famous cat sound!" },
    { question: "🍌 What color is a banana?", answer: "yellow", hint: "The color of the sun!" },
    { question: "🐘 Which animal has a trunk?", answer: "elephant", hint: "The biggest land animal!" },
    { question: "⭐ How many fingers do you have on one hand?", answer: "5", hint: "Count them!" },
    { question: "🌙 What comes after 1, 2, 3?", answer: "4", hint: "Keep counting!" },
    { question: "🎈 What do you call frozen water?", answer: "ice", hint: "It's cold and hard!" },
    { question: "🚗 What has 4 wheels and drives on roads?", answer: "car", hint: "Beep beep!" },
    { question: "🎵 Complete: Twinkle twinkle little ____", answer: "star", hint: "It shines in the sky!" },
    { question: "🏠 What do you sleep in at night?", answer: "bed", hint: "Soft and comfy!" },
    { question: "🎂 How old will you be after your next birthday? (Just kidding, type: happy)", answer: "happy", hint: "We just want you to be happy! 😊" },
    { question: "🐶 What sound does a dog make?", answer: "woof", hint: "Arf arf!" },
    { question: "🍎 What color is an apple usually?", answer: "red", hint: "Like a fire truck!" },
    { question: "🦆 What animal says 'quack quack'?", answer: "duck", hint: "Swims in ponds!" },
    { question: "☀️ What do we see in the sky during the day?", answer: "sun", hint: "It's bright and warm!" },
    { question: "🌈 How many days are in a week?", answer: "7", hint: "Monday, Tuesday..." },
    { question: "🧸 What toy is soft and cuddly?", answer: "teddy", hint: "Bears are cuddly!" },
    { question: "🎯 What's 2 + 2?", answer: "4", hint: "Use your fingers!" },
    { question: "🌙 What do we see in the sky at night?", answer: "moon", hint: "It glows in the dark!" },
    { question: "🐸 What animal jumps and says 'ribbit'?", answer: "frog", hint: "Lives near water!" },
    { question: "🍯 What do bees make?", answer: "honey", hint: "It's sweet and sticky!" },
    { question: "🌊 What is the opposite of hot?", answer: "cold", hint: "Like ice!" },
    { question: "👂 How many ears do you have?", answer: "2", hint: "One on each side!" },
    { question: "🦋 What comes out of a cocoon?", answer: "butterfly", hint: "Pretty and colorful!" },
    { question: "🌳 What do trees give us to breathe?", answer: "oxygen", hint: "Fresh air!" },
    { question: "🎪 Complete: 'Mary had a little ____'", answer: "lamb", hint: "Woolly and white!" }
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [robotVerified, setRobotVerified] = useState(false);
  const [robotAnswer, setRobotAnswer] = useState('');
  const [robotChecked, setRobotChecked] = useState(false);
  const [currentRobotQuestion, setCurrentRobotQuestion] = useState(() => 
    robotQuestions[Math.floor(Math.random() * robotQuestions.length)]
  );
  const [stepValidationErrors, setStepValidationErrors] = useState<{[key: number]: boolean}>({});
  const [formData, setFormData] = useState({
    // Application Type & Role
    applicationType: '',
    applicantRole: '',
    organizationType: '',
    
    // Company Information
    companyName: '',
    foundedYear: '',
    headquarters: '',
    website: '',
    companyStage: '',
    employees: '',
    
    // Funding Information
    fundingRound: '',
    targetAmount: '',
    currentRaise: '',
    useOfFunds: '',
    previousFunding: '',
    valuation: '',
    
    // Market & Product
    industry: '',
    productDescription: '',
    marketSize: '',
    competitors: '',
    uniqueValue: '',
    businessModel: '',
    
    // Team Information
    founders: '',
    keyTeam: '',
    advisors: '',
    
    // Traction & Metrics
    revenue: '',
    growth: '',
    customers: '',
    partnerships: '',
    
    // Technology
    techStack: '',
    ip: '',
    
    // Contact
    contactName: '',
    position: '',
    email: '',
    phone: '',
  });

  const steps = [
    { id: 1, title: 'Application Type', icon: Target },
    { 
      id: 2, 
      title: formData.organizationType === 'individual' ? 'Personal Overview' : 'Company Overview', 
      icon: formData.organizationType === 'individual' ? Users : Building 
    },
    { 
      id: 3, 
      title: formData.organizationType === 'individual' ? 'Support Needs' : 'Funding Details', 
      icon: formData.organizationType === 'individual' ? Shield : DollarSign 
    },
    { 
      id: 4, 
      title: formData.organizationType === 'individual' ? 'Project/Idea Details' : 'Market & Product', 
      icon: TrendingUp 
    },
    { 
      id: 5, 
      title: formData.organizationType === 'individual' ? 'Background & Skills' : 'Team', 
      icon: Users 
    },
    { 
      id: 6, 
      title: formData.organizationType === 'individual' ? 'Progress & Capabilities' : 'Traction & Tech', 
      icon: Lightbulb 
    },
    { 
      id: 7, 
      title: formData.organizationType === 'individual' ? 'Portfolio & Evidence' : 'Documents', 
      icon: FileText 
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleRobotAnswer = (answer: string) => {
    setRobotAnswer(answer);
    setRobotChecked(false);
    setRobotVerified(false);
  };

  const checkAnswer = () => {
    setRobotChecked(true);
    if (robotAnswer.toLowerCase().trim() === currentRobotQuestion.answer.toLowerCase()) {
      setRobotVerified(true);
    } else {
      setRobotVerified(false);
    }
  };

  const changeQuestion = () => {
    const newQuestion = robotQuestions[Math.floor(Math.random() * robotQuestions.length)];
    setCurrentRobotQuestion(newQuestion);
    setRobotAnswer('');
    setRobotVerified(false);
    setRobotChecked(false);
  };

  // Validation logic for required fields
  const validateStep = (stepNumber: number): boolean => {
    const requiredFields: {[key: number]: string[]} = {
      1: ['applicationType', 'applicantRole', 'organizationType'],
      2: formData.organizationType === 'individual' 
        ? ['companyName'] // For individual: at least name/title
        : ['companyName', 'foundedYear', 'companyStage'],
      3: formData.organizationType === 'individual'
        ? [] // Support needs might be optional
        : ['fundingRound', 'targetAmount'],
      4: formData.organizationType === 'individual'
        ? ['productDescription'] // Project/idea details
        : ['industry', 'productDescription', 'marketSize'],
      5: formData.organizationType === 'individual'
        ? [] // Background might be optional
        : ['founders'],
      6: ['customers'], // People Served/Impacted is now required
      7: ['contactName', 'position', 'email']
    };

    const fields = requiredFields[stepNumber] || [];
    return fields.every(field => formData[field as keyof typeof formData]?.trim() !== '');
  };

  const handleNextStep = () => {
    const isCurrentStepValid = validateStep(currentStep);
    
    if (!isCurrentStepValid) {
      setStepValidationErrors(prev => ({
        ...prev,
        [currentStep]: true
      }));
    } else {
      setStepValidationErrors(prev => ({
        ...prev,
        [currentStep]: false
      }));
    }
    
    // Always allow moving to next step, but mark as invalid if needed
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStepClick = (stepId: number) => {
    // Check all previous steps for validation when jumping to a step
    const errors: {[key: number]: boolean} = {};
    for (let i = 1; i < stepId; i++) {
      errors[i] = !validateStep(i);
    }
    setStepValidationErrors(prev => ({ ...prev, ...errors }));
    setCurrentStep(stepId);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-gray-900 mb-4">Welcome to Our Impact Investment Portal</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We engineer solutions that heal, nourish, and educate. Please help us understand your background and vision 
                so we can provide you with the most relevant support for creating lasting positive change in human lives.
              </p>
            </div>
            
            {/* Application Type Selection */}
            <div className="space-y-6">
              <h4 className="text-xl font-medium text-gray-900">What type of application are you submitting?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div 
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                    formData.applicationType === 'funding' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleInputChange('applicationType', 'funding')}
                >
                  <div className="flex items-center mb-3">
                    <DollarSign className="w-6 h-6 text-blue-600 mr-3" />
                    <h5 className="text-lg font-medium text-gray-900">Funding Application</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    You are seeking investment or funding for your startup, project, or organization.
                  </p>
                </div>
                
                <div 
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                    formData.applicationType === 'grant' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleInputChange('applicationType', 'grant')}
                >
                  <div className="flex items-center mb-3">
                    <Award className="w-6 h-6 text-green-600 mr-3" />
                    <h5 className="text-lg font-medium text-gray-900">Grant Application</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    You are applying for a research grant, social impact funding, or non-profit support.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Applicant Role Selection */}
            <div className="space-y-6">
              <h4 className="text-xl font-medium text-gray-900">What is your role in this application?</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div 
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                    formData.applicantRole === 'founder' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleInputChange('applicantRole', 'founder')}
                >
                  <div className="flex items-center mb-3">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    <h5 className="text-lg font-medium text-gray-900">Founder/CEO</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    You are the founder, co-founder, or CEO of the company/organization.
                  </p>
                </div>
                
                <div 
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                    formData.applicantRole === 'employee' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleInputChange('applicantRole', 'employee')}
                >
                  <div className="flex items-center mb-3">
                    <Briefcase className="w-6 h-6 text-purple-600 mr-3" />
                    <h5 className="text-lg font-medium text-gray-900">Employee/Team Member</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    You are applying on behalf of your employer or organization.
                  </p>
                </div>
                
                <div 
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                    formData.applicantRole === 'advisor' ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleInputChange('applicantRole', 'advisor')}
                >
                  <div className="flex items-center mb-3">
                    <Lightbulb className="w-6 h-6 text-orange-600 mr-3" />
                    <h5 className="text-lg font-medium text-gray-900">Advisor/Consultant</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    You are an advisor, consultant, or representative helping with the application.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Organization Type Selection */}
            <div className="space-y-6">
              <h4 className="text-xl font-medium text-gray-900">What type of organization are you representing?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div 
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                    formData.organizationType === 'startup' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleInputChange('organizationType', 'startup')}
                >
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                    <h5 className="text-lg font-medium text-gray-900">Existing Company/Startup</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    You have an established company or startup seeking investment or partnership.
                  </p>
                </div>
                
                <div 
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                    formData.organizationType === 'individual' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleInputChange('organizationType', 'individual')}
                >
                  <div className="flex items-center mb-3">
                    <Users className="w-6 h-6 text-purple-600 mr-3" />
                    <h5 className="text-lg font-medium text-gray-900">Individual/Pre-Company</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    You are an individual with an idea/project but haven't formed a company yet.
                  </p>
                </div>
                
                <div 
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                    formData.organizationType === 'research' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleInputChange('organizationType', 'research')}
                >
                  <div className="flex items-center mb-3">
                    <Globe className="w-6 h-6 text-green-600 mr-3" />
                    <h5 className="text-lg font-medium text-gray-900">Research/Non-Profit</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Research institution, university, NGO, or non-profit organization.
                  </p>
                </div>
                
                <div 
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                    formData.organizationType === 'corporation' ? 'border-gray-500 bg-gray-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleInputChange('organizationType', 'corporation')}
                >
                  <div className="flex items-center mb-3">
                    <Building className="w-6 h-6 text-gray-600 mr-3" />
                    <h5 className="text-lg font-medium text-gray-900">Established Company</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Large corporation or established organization with proven track record.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Information Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-blue-800 mb-1">Our Philosophy</h4>
                  <p className="text-sm text-blue-700">
                    "Our metric of success is not applause: it is empty hospital beds, full plates, 
                    skylines that banish carbon to the pages of history, and tiny dreamers' fingers 
                    reaching an open screen for the very first time." Understanding your role and vision 
                    helps us customize support that amplifies your impact on humanity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-8">
            {formData.organizationType === 'individual' ? (
              <>
                <h3 className="text-2xl font-light text-gray-900 mb-6">Personal Overview</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input
                      type="number"
                      value={formData.foundedYear}
                      onChange={(e) => handleInputChange('foundedYear', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="25"
                      min="13"
                      max="100"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      value={formData.headquarters}
                      onChange={(e) => handleInputChange('headquarters', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Personal Website/Portfolio</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Status *</label>
                    <select
                      value={formData.companyStage}
                      onChange={(e) => handleInputChange('companyStage', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select current status</option>
                      <option value="student">Student</option>
                      <option value="recent-graduate">Recent Graduate</option>
                      <option value="employed">Currently Employed</option>
                      <option value="freelancer">Freelancer/Independent</option>
                      <option value="researcher">Researcher</option>
                      <option value="entrepreneur">Aspiring Entrepreneur</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
                    <select
                      value={formData.employees}
                      onChange={(e) => handleInputChange('employees', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select education level</option>
                      <option value="high-school">High School</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD/Doctorate</option>
                      <option value="self-taught">Self-Taught</option>
                      <option value="bootcamp">Coding Bootcamp/Course</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Brief Personal Introduction *</label>
                  <textarea
                    value={formData.useOfFunds}
                    onChange={(e) => handleInputChange('useOfFunds', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about yourself, your background, interests, and what drives your passion for innovation..."
                  />
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-light text-gray-900 mb-6">Company Overview</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Founded Year *</label>
                    <input
                      type="number"
                      value={formData.foundedYear}
                      onChange={(e) => handleInputChange('foundedYear', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="2020"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Headquarters</label>
                    <input
                      type="text"
                      value={formData.headquarters}
                      onChange={(e) => handleInputChange('headquarters', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://yourcompany.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Stage *</label>
                    <select
                      value={formData.companyStage}
                      onChange={(e) => handleInputChange('companyStage', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select stage</option>
                      <option value="idea">Idea Stage</option>
                      <option value="prototype">Prototype</option>
                      <option value="mvp">MVP</option>
                      <option value="early-revenue">Early Revenue</option>
                      <option value="growth">Growth Stage</option>
                      <option value="scale">Scale Stage</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
                    <select
                      value={formData.employees}
                      onChange={(e) => handleInputChange('employees', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="1-5">1-5</option>
                      <option value="6-10">6-10</option>
                      <option value="11-25">11-25</option>
                      <option value="26-50">26-50</option>
                      <option value="51-100">51-100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-8">
            {formData.organizationType === 'individual' ? (
              <>
                <h3 className="text-2xl font-light text-gray-900 mb-6">Support Needs</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type of Support Needed *</label>
                    <select
                      value={formData.fundingRound}
                      onChange={(e) => handleInputChange('fundingRound', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select support type</option>
                      <option value="mentorship">Mentorship & Guidance</option>
                      <option value="seed-funding">Seed Funding</option>
                      <option value="resources">Technical Resources</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="education">Education & Training</option>
                      <option value="networking">Network Access</option>
                      <option value="comprehensive">Comprehensive Support</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Financial Support Needed</label>
                    <input
                      type="text"
                      value={formData.targetAmount}
                      onChange={(e) => handleInputChange('targetAmount', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="$10,000 (if applicable)"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Timeline</label>
                    <input
                      type="text"
                      value={formData.currentRaise}
                      onChange={(e) => handleInputChange('currentRaise', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="6 months, 1 year, etc."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Progress Stage</label>
                    <select
                      value={formData.valuation}
                      onChange={(e) => handleInputChange('valuation', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select current stage</option>
                      <option value="idea">Just an Idea</option>
                      <option value="research">Research Phase</option>
                      <option value="planning">Planning & Design</option>
                      <option value="prototype">Building Prototype</option>
                      <option value="testing">Testing & Validation</option>
                      <option value="ready">Ready to Launch</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How would you use the support? *</label>
                  <textarea
                    value={formData.useOfFunds}
                    onChange={(e) => handleInputChange('useOfFunds', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe how you would use mentorship, funding, resources, or other support to advance your project..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Previous Support or Achievements</label>
                  <textarea
                    value={formData.previousFunding}
                    onChange={(e) => handleInputChange('previousFunding', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any scholarships, grants, competitions won, previous support received..."
                  />
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-light text-gray-900 mb-6">Funding Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Funding Purpose *</label>
                    <select
                      value={formData.fundingRound}
                      onChange={(e) => handleInputChange('fundingRound', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select funding purpose</option>
                      <option value="impact-expansion">Impact Expansion - Scale proven solution to more people</option>
                      <option value="research-development">Research & Development - Breakthrough innovation</option>
                      <option value="accessibility-improvement">Accessibility Improvement - Reach underserved populations</option>
                      <option value="sustainability-model">Sustainability Model - Long-term viability</option>
                      <option value="open-source-initiative">Open Source Initiative - Knowledge democratization</option>
                      <option value="cross-sector-collaboration">Cross-Sector Collaboration</option>
                      <option value="systemic-change">Systemic Change - Transform entire sectors</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Funding Amount Needed (USD) *</label>
                    <input
                      type="text"
                      value={formData.targetAmount}
                      onChange={(e) => handleInputChange('targetAmount', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="$500,000 - Focus on impact potential, not just amount"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Support & Commitments</label>
                    <input
                      type="text"
                      value={formData.currentRaise}
                      onChange={(e) => handleInputChange('currentRaise', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="$100,000 committed, grants received, partnerships secured"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Impact Valuation (optional)</label>
                    <input
                      type="text"
                      value={formData.valuation}
                      onChange={(e) => handleInputChange('valuation', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="How do you value your organization's impact potential?"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Human Impact Plan *</label>
                  <textarea
                    value={formData.useOfFunds}
                    onChange={(e) => handleInputChange('useOfFunds', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How will this funding directly improve human lives? Describe the specific people who will benefit and how..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Previous Impact & Support History</label>
                  <textarea
                    value={formData.previousFunding}
                    onChange={(e) => handleInputChange('previousFunding', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Previous grants, impact achieved, partnerships formed, people helped..."
                  />
                </div>
                
                {/* Foundation Values Alignment */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="text-lg font-medium text-green-900 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" />
                    </svg>
                    Foundation Alignment Check
                  </h4>
                  <div className="space-y-3 text-sm">
                    <p className="text-green-800">
                      <strong>✓ Accessibility:</strong> How will your solution remain accessible to those who need it most, regardless of economic status?
                    </p>
                    <p className="text-green-800">
                      <strong>✓ Sustainability:</strong> How does your model ensure long-term positive impact without dependency on continuous funding?
                    </p>
                    <p className="text-green-800">
                      <strong>✓ Open Innovation:</strong> How will you contribute to knowledge sharing and collaborative problem-solving?
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-8">
            {formData.organizationType === 'individual' ? (
              <>
                <h3 className="text-2xl font-light text-gray-900 mb-6">Project/Idea Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Foundation Focus Area *</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select impact area</option>
                      <option value="healthcare">Healthcare Revolution - Solutions that heal</option>
                      <option value="education">Universal Education - Knowledge for all</option>
                      <option value="food-security">Global Food Security - Nourishing humanity</option>
                      <option value="clean-energy">Clean Energy Future - Sustainable planet</option>
                      <option value="cross-sector">Cross-Sector Innovation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Human Impact Scale</label>
                    <select
                      value={formData.marketSize}
                      onChange={(e) => handleInputChange('marketSize', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select impact scale</option>
                      <option value="local">Local Community (1K-10K people)</option>
                      <option value="regional">Regional (10K-1M people)</option>
                      <option value="national">National (1M-100M people)</option>
                      <option value="global">Global (100M+ people)</option>
                      <option value="systemic">Systemic Change (Entire sectors)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project/Idea Description *</label>
                  <textarea
                    value={formData.productDescription}
                    onChange={(e) => handleInputChange('productDescription', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your idea/project and how it will benefit humanity..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Human Impact Vision *</label>
                  <textarea
                    value={formData.uniqueValue}
                    onChange={(e) => handleInputChange('uniqueValue', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How will this project improve people's lives? What specific human problems does it solve?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Implementation Plan</label>
                  <textarea
                    value={formData.businessModel}
                    onChange={(e) => handleInputChange('businessModel', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How do you plan to bring this idea to life and reach the people who need it?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Similar Solutions & Differentiation</label>
                  <textarea
                    value={formData.competitors}
                    onChange={(e) => handleInputChange('competitors', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Are there existing solutions? How would yours be different or better?"
                  />
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-light text-gray-900 mb-6">Market & Product</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Foundation Focus Area *</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select impact area</option>
                      <option value="healthcare">Healthcare Revolution - AI diagnostics, personalized medicine, medical devices</option>
                      <option value="education">Universal Education - Learning platforms, educational tools, knowledge access</option>
                      <option value="food-security">Global Food Security - AgTech, nutrition, food distribution systems</option>
                      <option value="clean-energy">Clean Energy Future - Renewable energy, energy storage, climate solutions</option>
                      <option value="biotech">Biotechnology & Life Sciences</option>
                      <option value="ai-for-good">AI for Social Good</option>
                      <option value="cross-sector">Cross-Sector Impact Technology</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Human Impact Scale</label>
                    <select
                      value={formData.marketSize}
                      onChange={(e) => handleInputChange('marketSize', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select impact scale</option>
                      <option value="10k-lives">10K+ Lives Improved</option>
                      <option value="100k-lives">100K+ Lives Improved</option>
                      <option value="1m-lives">1M+ Lives Improved</option>
                      <option value="10m-lives">10M+ Lives Improved</option>
                      <option value="global-systemic">Global Systemic Change</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product/Service Description *</label>
                  <textarea
                    value={formData.productDescription}
                    onChange={(e) => handleInputChange('productDescription', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your product/service and how it addresses human needs..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Human Impact & Value Creation *</label>
                  <textarea
                    value={formData.uniqueValue}
                    onChange={(e) => handleInputChange('uniqueValue', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What specific human problems does your solution solve? How do you measure success beyond financial metrics?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sustainability & Accessibility Model</label>
                  <textarea
                    value={formData.businessModel}
                    onChange={(e) => handleInputChange('businessModel', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How do you ensure long-term sustainability while maintaining accessibility? What's your approach to reaching underserved populations?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Competitive Landscape & Differentiation</label>
                  <textarea
                    value={formData.competitors}
                    onChange={(e) => handleInputChange('competitors', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Who else is working on similar solutions? How does your approach prioritize human impact?"
                  />
                </div>
              </>
            )}
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-light text-gray-900 mb-6">Team Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Founders & Co-Founders *</label>
              <textarea
                value={formData.founders}
                onChange={(e) => handleInputChange('founders', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="List founders with their backgrounds, expertise, and previous experience..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Key Team Members</label>
              <textarea
                value={formData.keyTeam}
                onChange={(e) => handleInputChange('keyTeam', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe key team members, their roles and expertise..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Advisors & Board Members</label>
              <textarea
                value={formData.advisors}
                onChange={(e) => handleInputChange('advisors', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="List advisors, board members, and their credentials..."
              />
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="space-y-8">
            {formData.organizationType === 'individual' ? (
              <>
                <h3 className="text-2xl font-light text-gray-900 mb-6">Progress & Capabilities</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Progress Status</label>
                    <input
                      type="text"
                      value={formData.revenue}
                      onChange={(e) => handleInputChange('revenue', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Research completed, prototype built, testing phase..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Learning & Growth Rate</label>
                    <input
                      type="text"
                      value={formData.growth}
                      onChange={(e) => handleInputChange('growth', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="How quickly are you learning and improving?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">People Served/Impacted *</label>
                    <input
                      type="text"
                      value={formData.customers}
                      onChange={(e) => handleInputChange('customers', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Number of people directly benefiting from your solution"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Collaborations & Support</label>
                    <input
                      type="text"
                      value={formData.partnerships}
                      onChange={(e) => handleInputChange('partnerships', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Mentors, advisors, organizations supporting you"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Technical Skills & Capabilities</label>
                  <textarea
                    value={formData.techStack}
                    onChange={(e) => handleInputChange('techStack', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Programming languages, technical skills, tools you know or are learning..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Unique Assets & Ideas</label>
                  <textarea
                    value={formData.ip}
                    onChange={(e) => handleInputChange('ip', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any unique insights, research, prototypes, or ideas you've developed..."
                  />
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-light text-gray-900 mb-6">Traction & Impact Metrics</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Revenue/Sustainability</label>
                    <input
                      type="text"
                      value={formData.revenue}
                      onChange={(e) => handleInputChange('revenue', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="$0 - Pre-revenue / Grant funded / Sustainable model"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Impact Growth Rate</label>
                    <input
                      type="text"
                      value={formData.growth}
                      onChange={(e) => handleInputChange('growth', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="How is your human impact growing? (users helped, lives improved)"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">People Served/Impacted *</label>
                    <input
                      type="text"
                      value={formData.customers}
                      onChange={(e) => handleInputChange('customers', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Number of people directly benefiting from your solution"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Strategic Partnerships</label>
                    <input
                      type="text"
                      value={formData.partnerships}
                      onChange={(e) => handleInputChange('partnerships', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="NGOs, institutions, organizations amplifying your impact"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Technology & Innovation</label>
                  <textarea
                    value={formData.techStack}
                    onChange={(e) => handleInputChange('techStack', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Core technologies, AI/ML models, innovative approaches, open-source contributions..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Intellectual Property & Open Access</label>
                  <textarea
                    value={formData.ip}
                    onChange={(e) => handleInputChange('ip', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Patents, research publications, open-source releases, knowledge sharing initiatives..."
                  />
                </div>
              </>
            )}
            
            {/* Impact Measurement Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
              <h4 className="text-lg font-medium text-blue-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                Foundation Impact Philosophy
              </h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>"Our metric of success is not applause: it is empty hospital beds, full plates, 
                skylines that banish carbon to the pages of history, and tiny dreamers' fingers 
                reaching an open screen for the very first time."</strong><br/><br/>
                We evaluate opportunities based on their potential to create lasting positive change 
                in human lives, with sustainability models that ensure solutions remain accessible 
                to those who need them most.
              </p>
            </div>
          </div>
        );
      
      case 7:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-light text-gray-900 mb-6">Required Documents</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-gray-800">Essential Documents</h4>
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Pitch Deck *</p>
                    <p className="text-xs text-gray-500">PDF, max 50MB</p>
                    <button className="mt-2 text-blue-600 text-sm hover:underline">Choose File</button>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                    <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Business Plan</p>
                    <p className="text-xs text-gray-500">PDF, max 50MB</p>
                    <button className="mt-2 text-blue-600 text-sm hover:underline">Choose File</button>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                    <PieChart className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Financial Projections *</p>
                    <p className="text-xs text-gray-500">Excel/PDF, max 25MB</p>
                    <button className="mt-2 text-blue-600 text-sm hover:underline">Choose File</button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-gray-800">Supporting Documents</h4>
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                    <Shield className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Cap Table</p>
                    <p className="text-xs text-gray-500">Excel/PDF, max 15MB</p>
                    <button className="mt-2 text-blue-600 text-sm hover:underline">Choose File</button>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                    <Award className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Team CVs</p>
                    <p className="text-xs text-gray-500">PDF, max 30MB</p>
                    <button className="mt-2 text-blue-600 text-sm hover:underline">Choose File</button>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                    <Briefcase className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Product Demo/Screenshots</p>
                    <p className="text-xs text-gray-500">Images/Video, max 100MB</p>
                    <button className="mt-2 text-blue-600 text-sm hover:underline">Choose File</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-blue-800 mb-1">Document Guidelines</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• All documents must be in English or include English translation</li>
                    <li>• Financial projections should cover at least 3 years</li>
                    <li>• Pitch deck should be 10-15 slides maximum</li>
                    <li>• Include any relevant IP documentation, customer testimonials, or technical specifications</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Contact Name *</label>
                <input
                  type="text"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Contact person name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Position/Title *</label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="CEO, Founder, etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="contact@yourcompany.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-6">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <div>
                <h1 className="text-2xl font-light text-gray-900">Impact Investment Portal</h1>
                <p className="text-gray-600">Technology for Humanity - Vacid & Köksal Foundation</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Step {currentStep} of {steps.length}</p>
              <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Application Steps</h3>
              <nav className="space-y-2">
                {steps.map((step) => {
                  const Icon = step.icon;
                  const isCompleted = validateStep(step.id) && stepValidationErrors[step.id] !== true;
                  const isCurrent = currentStep === step.id;
                  const hasError = stepValidationErrors[step.id] === true;
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => handleStepClick(step.id)}
                      className={`w-full flex items-center p-3 rounded-xl text-left transition-all ${
                        isCurrent 
                          ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                          : hasError
                            ? 'bg-red-50 text-red-700 border border-red-200 hover:bg-red-100'
                            : isCompleted 
                              ? 'bg-green-50 text-green-700 hover:bg-green-100' 
                              : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        isCurrent 
                          ? 'bg-blue-100' 
                          : hasError
                            ? 'bg-red-100'
                            : isCompleted 
                              ? 'bg-green-100' 
                              : 'bg-gray-100'
                      }`}>
                        {hasError ? (
                          <AlertCircle className="w-4 h-4" />
                        ) : isCompleted ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Icon className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{step.title}</p>
                        <p className={`text-xs ${
                          isCurrent 
                            ? 'text-blue-600' 
                            : hasError
                              ? 'text-red-600'
                              : isCompleted 
                                ? 'text-green-600' 
                                : 'text-gray-500'
                        }`}>
                          {hasError 
                            ? 'Incomplete Required Fields' 
                            : isCompleted 
                              ? 'Completed' 
                              : isCurrent 
                                ? 'In Progress' 
                                : 'Pending'
                          }
                        </p>
                      </div>
                    </button>
                  );
                })}
              </nav>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-2">Impact Support Team</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Our team is dedicated to supporting innovators who are working to solve humanity's greatest challenges.
                </p>
                <Link 
                  href="/contact" 
                  className="text-sm text-blue-600 hover:underline"
                >
                  Contact Our Impact Team →
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-start">
                  <button
                    onClick={() => handleStepClick(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                    className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                  >
                    Previous
                  </button>
                  
                  {currentStep < steps.length ? (
                    <button
                      onClick={handleNextStep}
                      className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      Next Step
                    </button>
                  ) : (
                    <div className="flex flex-col items-end space-y-4 max-w-lg">
                      {/* Robot Control - Interactive Challenge */}
                      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 border-2 border-purple-200 rounded-xl p-6 w-full">
                        <div className="text-center">
                          <div className="text-lg text-purple-700 mb-4 font-bold">
                            🎭 Final Boss Challenge 🎭
                          </div>
                          
                          <div className="bg-white rounded-lg p-4 mb-4 border-2 border-purple-200 shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                              <div className="text-sm font-medium text-gray-700 flex-1">
                                {currentRobotQuestion.question}
                              </div>
                              <button
                                onClick={changeQuestion}
                                className="ml-3 p-1 text-gray-400 hover:text-purple-600 transition-colors"
                                title="Change question"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                  <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>
                            
                            <div className="space-y-3">
                              <input
                                type="text"
                                value={robotAnswer}
                                onChange={(e) => handleRobotAnswer(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                placeholder="Type your answer here..."
                                onKeyPress={(e) => e.key === 'Enter' && robotAnswer.trim() && checkAnswer()}
                              />
                              
                              <button
                                onClick={() => robotAnswer.trim() && checkAnswer()}
                                disabled={!robotAnswer.trim()}
                                style={{
                                  backgroundColor: robotAnswer.trim() ? '#7c3aed' : '#e5e7eb',
                                  color: robotAnswer.trim() ? '#ffffff' : '#9ca3af'
                                }}
                                className={`w-full py-2 rounded-lg text-sm font-medium transition-colors border-0 ${
                                  robotAnswer.trim() 
                                    ? 'hover:bg-purple-700 cursor-pointer shadow-md' 
                                    : 'cursor-not-allowed'
                                }`}
                              >
                                ✨ Check Answer ✨
                              </button>
                            </div>
                            
                            <div className="text-xs text-gray-500 mt-2 italic">
                              💡 Hint: {currentRobotQuestion.hint}
                            </div>
                          </div>
                          
                          <div className={`flex items-center justify-center space-x-2 mb-3 transition-all duration-500 ${
                            robotVerified ? 'text-green-600 animate-bounce' : robotChecked && !robotVerified ? 'text-red-500' : 'text-gray-400'
                          }`}>
                            {robotVerified ? (
                              <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-bold">🎉 HUMAN DETECTED! Welcome to the resistance! 🎉</span>
                              </>
                            ) : robotChecked ? (
                              <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">🤔 Oops! Try again, little human! 👶</span>
                              </>
                            ) : (
                              <>
                                <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                                <span className="text-sm">🤖 Type your answer and click Check!</span>
                              </>
                            )}
                          </div>
                          
                          <div className="text-xs text-purple-400 font-mono mt-2">
                            HumanCAPTCHA™ v2.0 - Now with manual check!
                          </div>
                        </div>
                      </div>
                      
                      <button
                        disabled={!robotVerified}
                        className={`px-8 py-4 rounded-xl transition-all duration-300 flex items-center space-x-3 font-medium text-lg shadow-lg transform w-full ${
                          robotVerified 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white hover:shadow-xl hover:scale-105 cursor-pointer' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-sm scale-95'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                        </svg>
                        <span>
                          {robotVerified 
                            ? 'Submit Application' 
                            : 'Prove Your Humanity First'
                          }
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 