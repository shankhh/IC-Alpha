const LoremCheckbox = () => {
  return (
    <div className="flex ">
      <div className="flex  items-center">
        <input
          className="appearance-none rounded-lg min-w-[2rem] max-h-[2rem] min-h-[2rem]
        
        relative peer shrink-0
        checked:bg-white checked:border-0
        "
          checked
          type="checkbox"
        />
        <svg
          className="absolute min-w-[2rem] max-h-[1.5rem] mt-1 hidden peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente totam
        vitae dicta saepe nobis iure?
      </h2>
    </div>
  );
};

export default LoremCheckbox
