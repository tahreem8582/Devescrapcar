"use client";
import { useState } from "react";
import Image from "next/image";

export default function AboutContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  // Validation functions
  const validateName = (name: string): string => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (name.trim().length > 50) return "Name must be less than 50 characters";
    if (!/^[a-zA-Z\s]+$/.test(name.trim()))
      return "Name can only contain letters and spaces";
    return "";
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim()))
      return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return "Phone number is required";
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, "");
    if (!phoneRegex.test(cleanPhone))
      return "Please enter a valid phone number";
    if (cleanPhone.length < 10)
      return "Phone number must be at least 10 digits";
    return "";
  };

  const validateMessage = (message: string): string => {
    if (message.trim().length > 500)
      return "Message must be less than 500 characters";
    return "";
  };

  const validateField = (fieldName: string, value: string): string => {
    switch (fieldName) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "phone":
        return validatePhone(value);
      case "message":
        return validateMessage(value);
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate field in real-time if it's been touched
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const messageError = validateMessage(formData.message);

    const newErrors = {
      name: nameError,
      email: emailError,
      phone: phoneError,
      message: messageError,
    };

    setErrors(newErrors);

    // Check if form is valid
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      // Handle form submission
      console.log("Form submitted:", formData);

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTouched({
        name: false,
        email: false,
        phone: false,
        message: false,
      });

      setErrors({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // You could add a success message here
      alert("Message sent successfully!");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white py-8 sm:py-12 md:py-16 lg:py-16 px-6 sm:px-6 lg:px-16"
    >
      <div className="w-full mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Contact Form - Left Side */}
          <div id="contact-form" className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-2 text-[#000000] font-['Poppins',sans-serif]">
              Get in <span className="text-[#CE0613]">Touch</span>
            </h2>
            <p className="text-[#000000] mb-6 sm:mb-8 text-sm sm:text-base font-['Poppins',sans-serif]">
              Need towing or roadside help? Fill out the form below and our team
              will reach out right away.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 focus:border-yellow-500 rounded focus:outline-none text-[#FFFFFF] placeholder-gray-400 text-sm sm:text-base font-['Poppins',sans-serif]"
                />
                {errors.name && touched.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 font-['Poppins',sans-serif]">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 focus:border-yellow-500 rounded focus:outline-none text-[#FFFFFF] placeholder-gray-400 text-sm sm:text-base font-['Poppins',sans-serif]"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 font-['Poppins',sans-serif]">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 focus:border-yellow-500 rounded focus:outline-none text-[#FFFFFF] placeholder-gray-400 text-sm sm:text-base font-['Poppins',sans-serif]"
                />
                {errors.phone && touched.phone && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 font-['Poppins',sans-serif]">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 focus:border-yellow-500 rounded focus:outline-none text-white placeholder-gray-400 resize-vertical text-sm sm:text-base min-h-[80px] sm:min-h-[100px] md:min-h-[120px] font-['Poppins',sans-serif]"
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message && touched.message && (
                    <p className="text-red-500 text-xs sm:text-sm font-['Poppins',sans-serif]">
                      {errors.message}
                    </p>
                  )}
                  <p
                    className={`text-xs sm:text-sm ml-auto font-['Poppins',sans-serif] ${
                      formData.message.length > 450
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    {/*} {formData.message.length}/500*/}
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className={`w-full font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-2xl transition-colors duration-200 text-sm sm:text-base  sm:mt-1 font-['Poppins',sans-serif] ${
                  formData.name && formData.phone
                    ? "bg-[#CE0613] text-[#FFFFFF] cursor-pointer"
                    : "bg-[#CE0613] text-[#FFFFFF] cursor-not-allowed"
                }`}
              >
                SEND
              </button>
            </form>
          </div>

          {/* About Us - Right Side */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <Image
              src="/man2.svg"
              alt="Tow truck and operator"
              width={800}
              height={520}
              className="w-full h-64 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Smooth transition so the shift is not janky */
        #contact {
          transition: transform 280ms ease;
        }

        @media (max-width: 768px) {
          /* shift the entire contact section slightly upward on small viewports */
          #contact {
            transform: translateY(-30px);
          }
        }

        @media (min-width: 2000px) and (max-width: 3000px) {
          /* scale the form container typography */
          #contact-form {
            font-size: 3rem !important;
          }

          /* heading larger */
          #contact-form h2 {
            font-size: 4rem !important;
            line-height: 1.04 !important;
          }

          /* paragraph slightly larger */
          #contact-form p {
            font-size: 2rem !important;
            line-height: 1.4 !important;
          }

          /* inputs, textarea, button — larger text and padding for readability */
          #contact-form input,
          #contact-form textarea,
          #contact-form button {
            font-size: 1.125rem !important;
            padding: 0.9rem 1.65rem !important;
          }

          /* make the send button more prominent */
          #contact-form button {
            border-radius: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
