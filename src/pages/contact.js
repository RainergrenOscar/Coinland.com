import Aboutcut from "../components/aboutcomponents/Aboutcut";
import Contactform from "../components/Contactform";
import ContactHeader from "../components/ContactHeader";
import ChartPage from "../dashComponents/chartPage";

const Contact = () => {
  return (
    <section className="contact__main">
      <ContactHeader />
      <Contactform />
    </section>
  );
};

export default Contact;
