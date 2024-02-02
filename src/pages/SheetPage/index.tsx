import './index.scss'
import { Link } from "react-router-dom";
import ChacInfo from "../../components/Sheets/ChacInfo";
import SkillsList from '../../components/Sheets/SkillList';

const SheetPage = () => {
  return (
    <>
      <header className="header-sheets">
        <Link to={"/"} style={{textDecoration: 'none', color: 'inherit'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      </header>
      <main className='main-content'>
        <div className="aside-bar">
          <ChacInfo />
        </div>
        <div className="main-content">
          <SkillsList FOR={4} AGI={2} INT={2} VIG={1} PRE={10}/>
        </div>
      </main>
    </>
  );
};

export default SheetPage;
