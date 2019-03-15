import Link from 'next/link';
import Header from '../components/Header';
import Head from 'next/head';
import Footer from '../components/Footer';

const Index = () => (
  <div>
    <Head>
      <title>Gastroparesis info </title>
    </Head>
    <Header />
    <div className="indexPageBody">
    <img className="stomachExample" src='../static/stomachExample.jpg' />
    <div className="introToGP">
      <h2 className="whatIsIt"> What is it? </h2>
      <p className="whatIsItParagraph">
      Gastroparesis is a condition in which your stomach cannot empty itself of food in a normal fashion. It can be caused by damage to the vagus nerve, which regulates the digestive system. A damaged vagus nerve prevents the muscles in the stomach and intestine from functioning, preventing food from moving through the digestive system properly. Often, the cause of gastroparesis is unknown.
      <br />
      < br />
      <small>
      * Fewer than 200,000 US cases per year
      </small>
      </p>

    </div>
    </div>
    <div className="howItsDiagnosed">
      <div>
        <h2 className="howHeader"> How is it diagnosed?</h2>
        <p className="whatIsItParagraph">
        Your doctor will go over your symptoms and medical history with you. He or she will also give you a physical examination and may order certain blood tests, including blood sugar levels.
        < br />
        < br />
        Other tests that are used to diagnose gastroparesis include:
        < br />
        < br />
        <strong>4-hour solid gastric emptying study. </strong> This is a test to determine the time is takes a meal to move through a person’s stomach. A technologist will take you to a room and give you a meal to eat that is tagged with a radioactive isotope. After you eat this meal, a one-minute image of your stomach will be taken. You will be allowed to leave the department, but you must return in 1, 2, and 4 hours.
        < br />
        < br />
        <strong>SmartPill. </strong> This is a capsule that contains a small electronic device. You swallow the capsule, and as it moves through your digestive tract, it sends information to a receiver you are wearing on how quickly food is traveling through the digestive tract.

        </p>
      </div>
      <div className="howItsDiagnosedPictureHolder">
      <img className="diagnosedPics" src='../static/eggs.jpeg' />
      <img className="diagnosedPics" src='../static/emptyingScan.jpeg' />
      </div>
    </div>
    <Footer />
    <style jsx global> {`

      .head {
        display:flex;
        flex-direction:row;
        justify-content:space-between;
      }
      .logo {
        text-decoration:none;
        font-size:26px;
        color:blue;
      }
      .indexPageBody {
        margin-top:100px;
        margin-right:25px;
        margin-left:25px;
        display:flex;
        flex-direction:row;
      }
      .stomachExample {
        height:500px;
      }
      .whatIsIt {
        margin-top:75px;

        text-align:center;
      }
      .howHeader {
        margin-top:25px;

        text-align:center;
      }
      .whatIsItParagraph {
        font-size:20px;
        margin:0 25px;
      }
      .howItsDiagnosed {
        margin-top:100px;

        display:flex;
        flex-direction:row;
      }
      .howItsDiagnosedPictureHolder{
        display:flex;
        flex-direction:row;
      }
      .foot {
        margin-top:50px;
      }
    `}
    </style>
  </div>

)

export default Index
