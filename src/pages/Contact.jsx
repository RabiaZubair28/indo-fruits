import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null);

    emailjs
      .sendForm(
        "service_levr829", // Replace with your EmailJS service ID
        "template_9pj59gp", // Replace with your EmailJS template ID
        formRef.current,
        "jcVI9RMOUyvYiqeSL" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitSuccess(true);
          setResponseMessage("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitSuccess(false);
          setResponseMessage("Failed to send message.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="pt-24 pb-8 xs:pb-8 sm:pb-8 md:pb-16 lg:pb-16 xl:pb-16 xxl:pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-2 xs:mb-2 sm:mb-2 md:mb-12 lg:mb-12 xl:mb-12 xxl:mb-12"
        >
          <h1 className="text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl xxl:text-4xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600">
            Get in touch with us for any questions or concerns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-4 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-8 xxl:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="contactNumber"
                >
                  Contact Number
                </label>
                <input
                  type="phone"
                  name="contactNumber"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Contact Number"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitSuccess !== null && (
                <p
                  className={`mt-2 ${
                    submitSuccess ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {responseMessage}
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 xs:space-x-4 sm:space-x-4 md:space-x-8  lg:space-x-8  xl:space-x-8  xxl:space-x-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">Mumbai, India.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 9227111610</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@indofruits.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
