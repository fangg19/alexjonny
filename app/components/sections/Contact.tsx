import ContactForm from "../Form";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row w-full flex-wrap lg:flex-nowrap mb-12"
    >
      <div className="flex flex-col gap-8 w-full lg:w-1/2 text-justify lg:pr-12">
        <h2 className="text-lg lg:text-3xl font-bold">
          Let&apos;s talk about it.
        </h2>

        <p>
          Getting those ideas out of your head might create something really
          cool.
        </p>
        <p>
          So, if you love web development and clean and smooth design as much as
          I do, have something interesting to discuss about or just simply want
          to say hi, just hit me up and we can have a chat over a cup of coffee.
          I&apos;m open to work with nice people and creative minds so
          don&apos;t hesitate to complete that form or simply send me an e-mail{" "}
          <a
            className="underline underline-offset-2"
            href="mailto:hello@alexjonny.com"
          >
            here
          </a>{" "}
          if that&apos;s easier for you, to hopefully build good and cool things
          together.
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
