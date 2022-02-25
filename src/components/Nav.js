const Nav = () => {
  const showPopup = () => {
    const menu = document.querySelector('.pop-up');
    const value = menu.style.display;
    if (value === '') {
      menu.style.display = 'flex';
    } else { menu.style.display = ''; }
  };
  return (
    <>
      <div className="md:inline-flex flex-col w-64 h-screen hidden px-4 py-8 overflow-y-auto border-r">
        <h2 className="text-3xl font-semibold text-center text-blue-800">Logo</h2>
        <div className="flex flex-col justify-between mt-6">
          <aside>
            <ul>
              <li>
                <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md " href="#index">
                  <span className="mx-4 font-medium">Cars</span>
                </a>
              </li>
              <li>
                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#home">
                  <span className="mx-4 font-medium">Reserve</span>
                </a>
              </li>
              <li>
                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#reservations">
                  <span className="mx-4 font-medium">My Reservations</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <div className="lg:hidden bg-white w-100 py-5 px-2 shadow-md">
        <div className="w-5">
          <button type="button" className="text-lg text-blue-600" onClick={showPopup}>&#9776;</button>
        </div>
      </div>
      <div className="pop-up hidden flex flex-col absolute py-5 px-20 bg-white shadow-md">
        <a href="/car" className="pb-3 text-lg text-blue-600">Link</a>
        <a href="/car" className="pb-3 text-lg text-blue-600">Link</a>
        <a href="/car" className="pb-3 text-lg text-blue-600">Link</a>
      </div>
    </>
  );
};
export default Nav;
