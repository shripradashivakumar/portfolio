export default function AboutMe() {
  return (
    <div
      id="about"
      className="bg-gradient-to-t from-white to-primary-light dark:to-dark-bg-1 dark:from-dark h-auto md:h-128 lg:h-128 flex items-center justify-center"
    >
      <div className="mx-auto container">
        <div className="flex items-center justify-center gap-10 flex-wrap md:flex-nowrap lg:flex-nowrap">
          <img
            src="/portrait5.png"
            alt="baby with headphones"
            className="w-56 h-56 rounded-full object-cover"
          />
          <div className="space-y-4 px-4 md:px-0 lg:px-0">
            <h1 className="text-4xl font-bold text-dark dark:text-dark-text">
              About
            </h1>
            <p className="text-black text-base font-medium">
              I am a frontend developer with 2.5 years experience in building
              apps with{" "}
              <span className="font-extrabold text-dark dark:text-dark-text">
                react{" "}
              </span>{" "}
              and
              <span className="font-extrabold text-dark dark:text-dark-text">
                {" "}
                react-native
              </span>
              . With a total of 6.5 years of experience as a working
              professional, I switched to frontend development in 2019. My last
              job was at Walmart Global Tech, India. I quit in April 2022 to
              take care of my health - mental and phycial well being.
            </p>
            <>
              <p className="text-xl text-black">
                <span className="italic font-bold text-dark dark:text-dark-text">
                  Skillset:
                </span>{" "}
                HTML, CSS, Javascript, Typescript, ReactJS, React-native, Redux,
                Tailwind-css
              </p>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
