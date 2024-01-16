// Footer.js

const Footer = () => {
  return (
    <footer className="mt-10 text-white  ">
      <div className="flex flex-col text-center justify-between items-center text-sm md-text-lg text-wrap">
        <p>This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</p>
      

      <p className="text-sm md-text-lg mt-4">&copy; {new Date().getFullYear()} Movie Magnet</p> 
      </div>
    </footer>
  );
};

export default Footer;
