// Footer.js

const Footer = () => {
  return (
    <footer className="mt-10 text-white p-4 mb-16 ">
      <div className="flex justify-between items-center">
      This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.

      <p>&copy; {new Date().getFullYear()} Movie Magnet</p> 
      </div>
    </footer>
  );
};

export default Footer;
