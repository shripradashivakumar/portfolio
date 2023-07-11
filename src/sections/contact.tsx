import Twitter from "../assets/twitter.svg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";

export default function Contact() {
  return (
    <div
      id="contact"
      className="h-auto bg-gradient-to-t from-white to-primary-light flex items-center justify-center dark:to-dark-bg-1 dark:from-dark"
    >
      <div className="mx-auto container px-4 md:px-0 lg:px-0 my-32">
        <div className="text-4xl font-bold text-dark text-center">
          <h1>Available on these socials</h1>
          <div className="flex justify-center gap-6 my-4">
            <a href="https://twitter.com/shripradaS" className="youtube social">
              <img src={Twitter} className="w-8 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/shriprada"
              className="youtube social"
            >
              <img src={LinkedIn} className="w-8" />
            </a>
            <a
              href="https://github.com/shripradashivakumar"
              className="youtube social"
            >
              <img src={Github} className="w-8" />
            </a>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-dark text-center">
          Or, drop a message :)
        </h1>
        <form className="flex flex-col gap-4 my-4 w-3/4 md:w-1/2 lg:w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 ring-1 ring-light-ring rounded-md focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email-ID"
            className="p-2 ring-1 ring-light-ring rounded-md focus:outline-none"
          />
          <textarea
            cols={30}
            rows={10}
            placeholder="Message..."
            className="p-2 ring-1 ring-light-ring rounded-md focus:outline-none"
          ></textarea>
          <button className="w-1/2 md:w-1/4 lg:w-1/4 rounded-md bg-light-ring p-2 hover:ring-1 hover:ring-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
