import './globals.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="layout">
          <Sidebar />

          <div className="main">
            <Header />
            <main className="content">
              {children}        
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
