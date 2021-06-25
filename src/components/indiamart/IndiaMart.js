import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'

function IndiaMart() {
  return (
    <div className="imd">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default IndiaMart;
