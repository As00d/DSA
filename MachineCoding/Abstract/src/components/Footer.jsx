const Footer = () => {
  return (
    <div className="flex bg-black text-white justify-around p-8">
      <div>
        <h1 className="text-2xl font-bold">Abstract</h1>
        <ul className="my-4">
          <li>
            <a href="" className="hover:border-b-1">
              Start Trial
            </a>
          </li>
          <li>
            <a className="hover:border-b-1" href="">
              Pricing
            </a>
          </li>
          <li>
            <a className="hover:border-b-1" href="">
              Download
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Resources</h1>
        <ul className="my-4">
          <li>
            <a className="hover:border-b-1" href="">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:border-b-1" href="">
              Help Center
            </a>
          </li>
          <li>
            <a className="hover:border-b-1" href="">
              Release Notes
            </a>
          </li>
          <li>
            <a className="hover:border-b-1" href="">
              Status
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Community</h1>
        <ul className="my-4">
          <li>
            <a className="hover:border-b-1" href="">
              Twitter
            </a>
          </li>
          <li>
            <a className="hover:border-b-1" href="">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="hover:border-b-1" href="">
              Facebook
            </a>
          </li>
          <li>
            <a className="hover:border-b-1" href="">
              Dribble
            </a>
          </li>
          <li>
            <a className="hover:border-b-1" href="">
              Podcast
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Company</h1>
        <ul className="my-4">
          <li>
            <a className="hover:border-b-1" href="">
              About us
            </a>
          </li>
          <li>
            <a className="hover:border-b-1" href="">
              Careers
            </a>
          </li>
          <li>
            <a className="hover:border-b-1" href="">
              Legal
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
