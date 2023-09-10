"use client";
import React, { useState, useRef } from "react";
import Button from "./Button";
import { FieldValues, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "./Loader";
import { cls } from "../utils/utils";

interface FormProps {
  setEmailSent: React.Dispatch<React.SetStateAction<boolean>>;
  setEmailError: React.Dispatch<React.SetStateAction<boolean>>;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = (props: FormProps) => {
  const { setEmailSent, setEmailError, setLoader } = props;

  const clearMessage = () => {
    setTimeout(() => {
      setEmailSent(false);
    }, 5000);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>();

  const onSubmitForm = async (values: FieldValues) => {
    setLoader(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      });

      if (response.status === 200) {
        setLoader(false);
        setEmailError(false);
        setEmailSent(true);
        clearMessage();
        reset();
      } else {
        setLoader(false);
        setEmailError(true);
        setEmailSent(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setEmailError(true);
      setEmailSent(false);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-6" method="post">
        <div className="flex flex-col items-start">
          <input
            className={cls(
              "bg-neutral-900 border border-neutral-700 px-4 py-2 w-full focus:outline-none focus:border-neutral-200",
              errors.name && "border-red-500"
            )}
            type="text"
            placeholder="name"
            {...register("name", {
              required: true,
            })}
            name="name"
          />
          {errors.name && (
            <span className="text-xs text-red-500 mt-2">
              Let me know your name.
            </span>
          )}
        </div>

        <div className="flex flex-col items-start">
          <input
            className={cls(
              "bg-neutral-900 border border-neutral-700 px-4 py-2 w-full focus:outline-none focus:border-neutral-200",
              errors.email && "border-red-500"
            )}
            type="email"
            placeholder="e-mail"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            })}
            name="email"
          />
          {errors.email && (
            <span className="text-xs text-red-500 mt-2">
              I need your valid e-mail address.
            </span>
          )}
        </div>

        <div className="flex flex-col items-start">
          <input
            className={cls(
              "bg-neutral-900 border border-neutral-700 px-4 py-2 w-full focus:outline-none focus:border-neutral-200",
              errors.subject && "border-red-500"
            )}
            type="text"
            placeholder="subject"
            {...register("subject", { required: true })}
            name="subject"
          />
          {errors.subject && (
            <span className="text-xs text-red-500 mt-2">
              Please enter a subject.
            </span>
          )}
        </div>

        <div className="flex flex-col items-start">
          <textarea
            className={cls(
              "bg-neutral-900 border border-neutral-700 px-4 py-2 w-full focus:outline-none focus:border-neutral-200",
              errors.message && "border-red-500"
            )}
            placeholder="message"
            rows={5}
            {...register("message", { required: true })}
            name="message"
          />
          {errors.message && (
            <span className="text-xs text-red-500 mt-2">
              You need to type your message.
            </span>
          )}
        </div>

        <div className="flex items-end w-full">
          <Button
            type="secondary"
            onClick={handleSubmit(onSubmitForm)}
            className="w-full lg:w-auto lg:ml-auto"
          >
            send message
          </Button>
        </div>
      </form>
    </div>
  );
};

const ContactForm = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loader, setLoader] = useState(false);

  const reRef = useRef<any>();

  return (
    <div className="flex flex-col w-full lg:w-1/2">
      {/* <ReCAPTCHA
        sitekey={
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as unknown as string
        }
        size="invisible"
        ref={reRef}
      /> */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        {emailSent ? <h2>Thanks for your message!</h2> : null}
      </div>
      {emailError ? <h2>Ooops! There was an error. Please retry.</h2> : null}
      {loader ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Loader />
          <h3>Sending your message...</h3>
        </div>
      ) : (
        <Form
          setEmailError={setEmailError}
          setEmailSent={setEmailSent}
          setLoader={setLoader}
        />
      )}
    </div>
  );
};

export default ContactForm;
