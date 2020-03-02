import React from 'react';
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout title="Über mich">
      <div className="md:w-6/12 sm:w-full">
        <h2 className="text-xl py-4">Hallo liebe Interessierten,</h2>
        <div className="flex flex-wrap">
          <p className="md:w-6/12">
            Heute sehen wir auf Internet, dass viele Menschen alles können und zwar bestens! Da scheint es manchmal unmöglich mitmachen zu können.
            Mir ist es wichtig den Spass vermitteln zu können.
            Wenn jemand Spass an der Sache hat fühlt er sich wohl, ist bereit mehr zu lernen und gestaltet so einen sicheren Basis.
          </p>
          <img className="md:w-6/12 inline-block object-contain" alt="schim logo" src={'/schwim.png'} />
        </div>
        <div className="flex flex-wrap">
          <img className="md:w-6/12 inline-block p-2 object-contain" alt="adinda im wasser" src={'/adinda-wasser.jpg'} />
          <p className="md:w-6/12">
            Ich unternehme viel im sportlichen Bereich: Skitouren, Schlittschuhlaufen, Kajakfahren, Velofahren, Bergtouren und natürlich schwimmen.
            Bei all diese Sportarten ist das Konzept in Lernen gleich.
            Die persönliche Leistung steht im Schwimmen oft hoch angeschrieben, ich bin aber der Meinung, dass man die Leistung optimal geniessen kann, wenn es durch die Umgebung anerkannt ist, deshalb soll es einen Austausch geben die für alle Teilnehmern gleichwertig ist.
            Am schönsten ist es, wenn man lernt sich auch auf die andere Teilnehmer verlassen zu können, gemeinsam Ziele erreichen zu können und so ganz tolle Freundschaften und/oder Erinnerungen entstehen.
          </p>
        </div>
        <br />
        <p>
          In das <Link className="underline block mt-4 sm:inline-block sm:mt-0 hover:text-pink-500" to="/kontakt/">
            Kontaktformular</Link> gibt es die Möglichkeit mehr zu erfahren, einfach durch zu fragen beim ausfüllen.
        </p>
        <br />
        <hr />
        <p>
          Herzlichen Grüssen, <br />
          Adinda
      </p>
      </div>
    </Layout>
  );
}