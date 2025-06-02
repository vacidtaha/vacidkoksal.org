"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, 
  Copy, 
  ArrowLeft, 
  Shield, 
  Clock, 
  Users, 
  FileText,
  Heart,
  Globe,
  Award,
  Calendar
} from 'lucide-react';

export default function FundingSuccessPage() {
  const [applicationId, setApplicationId] = useState('');
  const [applicationType, setApplicationType] = useState('');
  const [organizationType, setOrganizationType] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Get data from localStorage
    const appId = localStorage.getItem('applicationId') || 'VKF-UNKNOWN';
    const appType = localStorage.getItem('applicationType') || '';
    const orgType = localStorage.getItem('organizationType') || '';
    
    setApplicationId(appId);
    setApplicationType(appType);
    setOrganizationType(orgType);
    
    // Clean up localStorage
    localStorage.removeItem('applicationId');
    localStorage.removeItem('applicationType');
    localStorage.removeItem('organizationType');
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(applicationId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getApplicationTypeText = () => {
    if (applicationType === 'funding') return 'Investment Application';
    if (applicationType === 'grant') return 'Grant Application';
    return 'Impact Application';
  };

  const getOrganizationTypeText = () => {
    if (organizationType === 'individual') return 'Individual Innovator Program';
    if (organizationType === 'startup') return 'Startup Investment Track';
    if (organizationType === 'research') return 'Research Institution Initiative';
    if (organizationType === 'corporation') return 'Corporate Partnership Program';
    return 'Impact Initiative';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-6">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Return to Foundation
              </Link>
              <div>
                <h1 className="text-2xl font-light text-gray-900">Application Submitted Successfully</h1>
                <p className="text-gray-600">Vacid & Köksal Foundation - Impact Investment Portal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Success Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
            Your Vision is Now Part of Our Mission
          </h2>
          
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Thank you for submitting your {getApplicationTypeText().toLowerCase()} to the Vacid & Köksal Foundation. 
            Your commitment to creating meaningful human impact aligns perfectly with our philosophy of 
            engineering solutions that heal, nourish, and educate.
          </p>
        </div>

        {/* Application Details Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Application Reference Details</h3>
            <p className="text-gray-600">Please retain this information for all future correspondence</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-lg font-medium text-gray-900">Application ID</h4>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-blue-200">
                <code className="text-lg font-mono text-blue-800 font-semibold">{applicationId}</code>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-purple-600 mr-3" />
                <h4 className="text-lg font-medium text-gray-900">Program Track</h4>
              </div>
              <div className="bg-white rounded-xl p-4 border border-purple-200">
                <p className="text-purple-800 font-medium">{getOrganizationTypeText()}</p>
                <p className="text-sm text-purple-600 mt-1">{getApplicationTypeText()}</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-orange-900 mb-2">Critical: Secure Your Reference Number</h4>
                <p className="text-orange-800 text-sm leading-relaxed">
                  This unique application identifier is essential for all future communications with our Impact Assessment Team. 
                  Please save this reference number in a secure location. Any inquiries regarding your application status, 
                  additional documentation requests, or follow-up correspondence will require this identifier.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps Timeline */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-12">
          <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">Assessment & Review Timeline</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Initial Review (72 Hours)</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our Impact Assessment Committee will conduct a preliminary evaluation of your submission. 
                  You will receive an acknowledgment email within 72 hours confirming receipt and outlining the review process.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Comprehensive Evaluation (2-3 Weeks)</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our multidisciplinary evaluation panel, comprising impact investment specialists, sector experts, 
                  and sustainability consultants, will conduct an in-depth assessment of your proposal's alignment 
                  with our foundation's strategic objectives and human impact potential.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Decision Communication (Within 30 Days)</h4>
                <p className="text-gray-600 leading-relaxed">
                  You will receive a comprehensive decision letter via email, including detailed feedback regardless of outcome. 
                  Successful applicants will be invited to participate in our structured due diligence process and 
                  partnership development framework.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Foundation Philosophy */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 border border-indigo-100 mb-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-light text-gray-900 mb-6">Our Commitment to You</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">Transparent Process</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every application receives thorough consideration through our standardized evaluation framework. 
                We believe in transparent communication and will provide detailed feedback on all submissions, 
                whether approved for funding or not.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">Beyond Financial Support</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our partnership extends beyond capital deployment. Successful applicants gain access to our 
                strategic advisory network, technical resources, and collaborative ecosystem designed to 
                amplify sustainable impact.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 p-6 bg-white/50 rounded-2xl border border-white/60">
            <p className="text-lg text-gray-700 font-light italic">
              "Our metric of success is not applause: it is empty hospital beds, full plates, 
              skylines that banish carbon to the pages of history, and tiny dreamers' fingers 
              reaching an open screen for the very first time."
            </p>
            <p className="text-sm text-gray-600 mt-2">— Vacid & Köksal Foundation Philosophy</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4">Stay Connected</h3>
            <p className="text-gray-600">For inquiries regarding your application status or additional support</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Application Support</h4>
              <p className="text-gray-600 text-sm">applications@vacidkoksal.org</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Partnership Inquiries</h4>
              <p className="text-gray-600 text-sm">partnerships@vacidkoksal.org</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">General Foundation</h4>
              <p className="text-gray-600 text-sm">info@vacidkoksal.org</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Globe className="w-5 h-5 mr-2" />
              Return to Foundation Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 