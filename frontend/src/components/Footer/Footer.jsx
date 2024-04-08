const Footer = () => {
  return <footer className=" min-h-[5rem] border-2 border-purple-400 min-w-full">
    <div className="flex flex-col min-w-full min-h-full justify-start items-start md:px-36">
       <div className="flex flex-col gap-2">
        <div>About</div>
        <div className="flex flex-col gap-1">
            <p>Brands & Agencies</p>
            <p>How it works</p>
            <p>Success Stories</p>
            <p>Connect With us</p>
        </div>
       </div>
       
    </div>
  </footer>;
};

export default Footer;
