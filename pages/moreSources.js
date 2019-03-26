import Link from 'next/link';
import Header from '../components/Header';
import Head from 'next/head';


const Sources = () => (
  <div>
    <Head>
      <title>Gastroparesis Sources </title>
    </Head>
    <Header />
    <div>
    More Information
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


    `}
    </style>
  </div>

)

export default Sources
