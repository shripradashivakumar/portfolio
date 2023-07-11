export default function Portfolio() {
  return (
    <div
      id="projects"
      className="h-auto md:h-128 lg:h-128 bg-gradient-to-t from-primary-light flex items-center justify-center dark:from-dark-bg-1 dark:to-dark"
    >
      <div className="mx-auto container my-32">
        <h1 className="text-4xl font-bold text-dark text-center dark:text-dark-text">
          Projects
        </h1>
        <div className="px-4 md:px-0 lg:px-0 mt-4 h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-[minmax(100px,auto)] gap-4">
          <div className="border-2">Project1</div>
          <div className="border-2">Project2</div>
          <div className="border-2">Project3</div>
          <div className="border-2">Project4</div>
          <div className="border-2">Project5</div>
          <div className="border-2">Project6</div>
        </div>
      </div>
    </div>
  );
}
