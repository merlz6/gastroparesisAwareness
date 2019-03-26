import Link from 'next/link';
import Header from '../components/Header';
import Head from 'next/head';
import Footer from '../components/Footer';


const Symptoms = () => (
  <div>
    <Head>
      <title>Gastroparesis symptoms </title>
    </Head>
    <Header />
    <div>

    <h3>Some Symptoms include:</h3>
    <div className='symptomListHolder'>

      <ul>
        <li>
          Heartburn or GERD
        </li>
        <li>
          Nausea
        </li>
        <li>
          Vomiting
        </li>
        <li>
          Abdominal bloating
        </li>
        <li>
          Abdominal Pain
        </li>
        <li>
          Early Siety
        </li>
        <li>
          Poor appetite and malnutrition
        </li>
        <li>
          Poor blood sugar control
        </li>
      </ul>
    <img className="symptomPic" src='../static/guythrowingup.jpeg' />
    <img className="symptomPic" src='../static/guyHoldingStomach.jpeg' />
    </div>
    <h3> Some complications of gastroparesis include:</h3>
    <div className="complicationsHolder">

    <ul>
      <li>
        Food that stays in the stomach too long can ferment, which can lead to the growth of bacteria.
      </li>
      <li>
        Food in the stomach can harden into a solid collection, called a bezoar. Bezoars can cause obstructions in the stomach that keep food from passing into the small intestine.
      </li>
      <li>
        People who have both diabetes and gastroparesis may have more difficulty because blood sugar levels rise when food finally leaves the stomach and enters the small intestine, making blood sugar control more of a challenge.
      </li>
    </ul>
    <img className="complicationPic" src='../static/complication.png' />
    </div>
    <Footer />
    </div>

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
      .whatIsItParagraph {
        font-size:20px;
        margin:0 25px;
      }
      .complicationsHolder, .symptomListHolder {
        margin: 25px;
        display:flex;
        flex-direction:row;
        border-bottom:1px solid grey;
      }
      .complicationPic {
        height:300px;
        width:400px;
        margin-bottom:10px;
        margin-left:15px;
      }
      ul {
        margin: auto 20px;
        width:500px;
      }
      h3 {
        margin:25px;
      }
    `}
    </style>
  </div>

)

export default Symptoms
