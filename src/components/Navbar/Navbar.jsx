const Navbar = () => {
  return (
    <header className="backdrop-blur flex-none lg:border-b sticky top-0 z-50">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <h1 className="flex-none md:w-auto mr-3">ToDo list</h1>
            <div className="lg:flex ml-auto">
              <div className="cursor-default bg-slate-400/10 hover:bg-slate-400/20 items-center leading-5 px-3 py-1 rounded-full text-xs text-slate-800">
                count
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
