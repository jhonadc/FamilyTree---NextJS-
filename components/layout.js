import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
