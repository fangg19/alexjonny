import ContactForm from "../Form";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col  w-full flex-wrap lg:flex-nowrap mb-12 gap-2"
    >
      <h1 className="text-xl font-bold text-neutral-600">
        -- let&apos;s talk about it --
      </h1>
      <div className="w-full h-[2px] bg-neutral-800 mb-6" />

      <div
        id="contact"
        className="flex flex-col lg:flex-row w-full flex-wrap lg:flex-nowrap mb-12 gap-y-10"
      >
        <div className="flex flex-col gap-8 w-full lg:w-1/2 text-justify lg:pr-12">
          {/* <h2 className="text-xl lg:text-2xl font-bold">
          Let&apos;s talk about it.
        </h2> */}

          <p>
            Getting those ideas out of your head could lead to something truly
            remarkable.
          </p>
          <p>
            So, if you like programming, have something interesting to discuss
            about or just simply want to say hi, just hit me up and we can have
            a chat over a cup of coffee. I&apos;m enthusiastic to work with nice
            individuals and creative minds so don&apos;t hesitate to fill out
            the form or simply send me an e-mail{" "}
            <a
              className="underline underline-offset-2 text-neutral-800 font-bold px-2 bg-neutral-200"
              href="mailto:hello@alexjonny.com"
              itemProp="email"
            >
              here
            </a>{" "}
            if that&apos;s more convenient for you, to hopefully build good and
            cool things together.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
