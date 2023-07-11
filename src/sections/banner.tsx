export default function Banner() {
  return (
    <div className="bg-gradient-to-t from-primary-light dark:from-dark-bg-1 dark:to-dark flex items-center justify-center h-128">
      <div className="space-y-2 mx-10 text-center">
        <p className="text-4xl my-2 font-bold text-dark dark:text-dark-text">
          HELLO, MY NAME IS SHRIPRADA.
        </p>
        <p className="text-2xl">I am a Front-End Developer</p>
        <p className="text-xl">
          I{" "}
          <span className="italic font-bold text-dark dark:text-dark-text">
            try
          </span>{" "}
          to make websites and apps using react. And{" "}
          <span className="italic font-bold text-dark dark:text-dark-text">
            succeed
          </span>{" "}
          sometimes 😬
        </p>
        <a
          href="#about"
          className="text-sm underline decoration-dark decoration-2 underline-offset-4"
        >
          Know more about me!
        </a>
      </div>
    </div>
  );
}
