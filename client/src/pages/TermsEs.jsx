import React from "react";
import { Link } from "react-router-dom";
export default function TermsEs() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            Terms of Service and Privacy Policy
          </h2>
        </div>
        <div className="mt-8">
          <Link className="inline-flex items-center justify-center py-2 px-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" to="/termsVn">
            English
          </Link>
      </div>
      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-black sm:text-3xl">
            Terms of Service
          </h3>
          <div className="mt-4 text-lg text-gray-600">
            <h4 className="text-xl font-bold text-gray-800">1. Acceptance of Terms</h4>
            <p className="mt-2">By accessing or using our app, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.</p>

            <h4 className="mt-6 text-xl font-bold text-gray-800">2. Description of Service</h4>
            <p className="mt-2">Our app provides food and restaurant recommendations using data from the Google Maps API. This service is provided "as is" and is intended for informational purposes only.</p>

            <h4 className="mt-6 text-xl font-bold text-gray-800">3. User Conduct</h4>
            <p className="mt-2">You agree to use the app for lawful purposes only. You must not use the app in a way that could harm, disable, overburden, or impair our services or interfere with any other party's use and enjoyment of the app.</p>

            <h4 className="mt-6 text-xl font-bold text-gray-800">4. Intellectual Property</h4>
            <p className="mt-2">All content and materials available on the app, including but not limited to text, graphics, website name, code, images, and logos, are the intellectual property of Anji and are protected by applicable copyright and trademark law.</p>

            <h4 className="mt-6 text-xl font-bold text-gray-800">5. Disclaimer of Warranties</h4>
            <p className="mt-2">The app is provided on an "as is" and "as available" basis. We do not warrant that the app will be uninterrupted or error-free. We make no warranties or representations about the accuracy or completeness of the content provided through the app.</p>

            <h4 className="mt-6 text-xl font-bold text-gray-800">6. Limitation of Liability</h4>
            <p className="mt-2">In no event shall Anji be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the app.</p>

            <h4 className="mt-6 text-xl font-bold text-gray-800">7. Changes to Terms</h4>
            <p className="mt-2">We reserve the right to modify these terms at any time. Any changes will be posted on this page and your continued use of the app constitutes acceptance of those changes.</p>

            <h4 className="mt-6 text-xl font-bold text-gray-800">8. Contact Information</h4>
            <p className="mt-2">For any questions about these Terms of Service, please contact us at ...</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-black sm:text-3xl">
            Privacy Policy
          </h3>
          <div className="mt-4 text-lg text-gray-600">
            <h4 className="text-xl font-bold text-gray-800">1. Information We Collect</h4>
            <p className="mt-2">We collect information through the Google Maps API to provide food and restaurant recommendations. This may include location data and other information available through the API.</p>

            <h4 className="mt-6 text-xl font-bold text-gray-800">2. How We Use Information</h4>
            <p className="mt-2">The information we collect is used solely to provide personalized food and restaurant recommendations. We do not sell or share your personal information with third parties.</p>

            <h4 className="mt-6 text-xl font-bold text-gray-800">3. Data Security</h4>
            <p className="mt-2">We take reasonable measures to protect the information we collect from unauthorized access, disclosure, alteration, or destruction.</p>

            <h4 className="mt-6 text-xl font-bold text-gray-800">4. Third-Party Services</h4>
            <p className="mt-2">Our app may contain links to third-party services, such as Google Maps. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party services you use.</p>

            <h4 className="mt-6 text-xl font-bold text-gray-800">5. Changes to This Privacy Policy</h4>
            <p className="mt-2">We may update this Privacy Policy from time to time. Any changes will be posted on this page and are effective immediately upon posting.</p>

            <h4 className="mt-6 text-xl font-bold text-gray-800">6. Contact Us</h4>
            <p className="mt-2">If you have any questions about this Privacy Policy, please contact us at …</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8 text-center md:mt-12">
        <a
          href="/contactus"
          title="Contact Us"
          className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700"
          role="button"
        >
          Contact Us
        </a>
      </div>
    </div>
    </section >
  );
}
