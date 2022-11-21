import {Link} from "react-router-dom";

export default function Index() {
	return (
		<div className="bg-slate-300 dark:bg-slate-800 dark:text-white h-screen">
    <div className="pt-5 w-100 lg:w-4/5 m-auto flex flex-col items-center">
      <h1>Short</h1>
      <p className="mb-2">
        Welcome! This website is used mostly by myself for shortening links I
        use daily!
      </p>
      <p className="mb-2">
        You can have a look around, here are the availables codes !
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/vsc">vsc - Visual Studio Code installer</Link>
          </li>
          <li>
            <Link to="/pwned">pwned - Have I been pned?</Link>
          </li>
          <li>
            <Link to="/mld">mld - DrawSql.app</Link>
          </li>
          <li>
            <Link to="/rr">rr - Check it out yourself!</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
	);
}
