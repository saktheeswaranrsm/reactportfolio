import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <section className="contact-section container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10 md:p-16">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Me...</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              My inbox is always open. 
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            <div className="contact-details space-y-4 mb-8">
              <p>
                <strong className="text-black mr-2">Email:</strong>
                <span>saktheeswaranrsm@gmail.com</span>
              </p>
              <p>
                <strong className="text-black mr-2">Phone:</strong>
                <span>+91 9566354449</span>
              </p>
              <p>
                <strong className="text-black mr-2">Location:</strong>
                <span>Chennai, India</span>
              </p>
            </div>
            <div>
              <a
                href="mailto:saktheeswaranrsm@gmail.com"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;