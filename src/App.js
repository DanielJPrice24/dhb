import Header from './header/header';
import Main from './main/main'
import Footer from './footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
