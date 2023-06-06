
import {useState} from 'react';


/**
 * Dashboard header left
 * @return {mixed}
 */
function DashboardHeaderLeft() {
  /**
   * Handle click event
   */
  function handleClick() {
    console.log('a');
  }
  console.log();
  return (
    <div id="dashboard-header-left">
      <h1 onClick={handleClick}><span id="menu-icon">&#8592;</span></h1>
    </div>
  );
}

function DashboardHeaderRight() {
  return (
    <div id="dashboard-header-right"></div>
  );
}

function DashboardCenterLeft() {
  return (
    <div id="dashboard-center-left"></div>
  );
}

function DashboardCenterRight() {
  return (
    <div id="dashboard-center-right"></div>
  );
}

function DashboardBottomLeft() {
  return (
    <div id="dashboard-bottom-left"></div>
  );
}

function DashboardBottomRight() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
    console.log(likes);
  }

  return (
    <div id="dashboard-bottom-right"><button onClick={handleClick}>Like</button></div>
  );
}


function Main() {
  return (
    <main>
      <section id="spex-dashboard">
        <DashboardHeaderLeft />
        <DashboardHeaderRight />
        <DashboardCenterLeft />
        <DashboardCenterRight />
        <DashboardBottomLeft />
        <DashboardBottomRight />
      </section>
    </main>
  );
}

function NavigationPrimary() {
  return (
    <ul>
      <li>
        <i id="icon-dashboard" className="nav-icon"></i>
        <a>Dashboard</a>
      </li>
      <li>
        <i id="icon-submissions" className="nav-icon"></i>
        <a>Submissions</a>
      </li>
      <li>
        <i id="icon-settings" className="nav-icon"></i>
        <a>Settings</a>
      </li>
    </ul>
  );
}

function NavigationSecondary() {
  return (
    <ul>
      <li>
        <i id="icon-music_library" className="nav-icon"></i>
        <a>Music Library</a>
      </li>
      <li>
        <i id="icon-artists" className="nav-icon"></i>
        <a>Artists</a>
      </li>
    </ul>
  );
}

function NavigationTertiary() {
  return (
    <ul>
      <li>
        <i id="icon-faq" className="nav-icon"></i>
        <a>FAQ</a>
      </li>
      <li>
        <i id="icon-contact" className="nav-icon"></i>
        <a>Contact Us</a>
      </li>
      <li>
        <i id="icon-about" className="nav-icon"></i>
        <a>About Us</a>
      </li>
    </ul>
  );
}

function NavigationLogout() {
  return (
    <ul>
      <li>
        <i id="icon-logout" className="nav-icon"></i>
        <a>Log Out</a>
      </li>
    </ul>
  );
}

function Navigation() {
  function handleClick() {
    console.log('b');
  }
  return (
    <div id="nav-overlay" onClick={handleClick}>
      <nav id="main-menu">
        <NavigationPrimary />
        <NavigationSecondary />
        <NavigationTertiary />
        <NavigationLogout />
      </nav>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <Main />
    </div>
  );
}


