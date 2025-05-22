"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { t } = useTranslation();
  const text = t("sayHello");

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          user_message: userMessage,
          user_email: userEmail,
          email: "rshaar559@gmail.com",
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          console.error(error);
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl xl:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            👋
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          className="h-4/5 my-auto lg:w-1/2 bg-red-50 dark:bg-red-950 rounded-xl text-xl xl:text-2xl flex flex-col gap-y-4 xl:gap-y-8 justify-center p-10"
        >
          <label>{t("dearRami")}</label>
          <textarea
            className="bg-transparent border-b-2 border-b-black outline-none"
            name="user_message"
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <span>{t("myEmailAdressIs")}</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <span>{t("regards")}</span>
          <button className="bg-red-500 rounded font-semibold p-4 hover:opacity-75">
            {t("send")}
          </button>
          {success && (
            <span className="text-red-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
