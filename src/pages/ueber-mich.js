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
            Heute sehen wir auf dem Internet, dass viele Menschen alles können und zwar bestens! Da scheint es manchmal unmöglich mitmachen zu können.
            Mir ist es wichtig den Spass vermitteln zu können.
            Wenn jemand Freude an der Sache hat fühlt er sich wohl, ist bereit mehr zu lernen und gestaltet so eine sichere Basis.
          </p>
          <img className="md:w-6/12 inline-block object-contain" alt="schim logo" src={'/schwim.png'} />
        </div>
        <div className="flex flex-wrap">
          <img className="md:w-6/12 inline-block p-2 object-contain" alt="adinda im wasser" src={'/adinda-wasser.jpg'} />
          <p className="md:w-6/12">
            Ich unternehme viel im sportlichen Bereich: Skitouren, Schlittschuhlaufen, Kajakfahren, Velofahren, Bergtouren und natürlich schwimmen.
            Bei all diesen Sportarten ist das Konzept beim Lernen gleich.
            Die persönliche Leistung steht im Schwimmen oft hoch angeschrieben. Ich bin aber der Meinung, dass man die Leistung optimal geniessen kann, wenn es durch die Umgebung anerkannt ist. 
            Deshalb soll es einen Austausch geben die für alle Teilnehmer gleichwertig ist.
            Am Schönsten ist es, wenn man lernt sich auch auf die anderen Teilnehmer verlassen zu können, gemeinsam Ziele erreichen zu können und so
            ganz tolle Freundschaften und/oder Erinnerungen entstehen.
          </p>
        </div>
        <br />
        <p>
          Über das <Link className="underline block mt-4 sm:inline-block sm:mt-0 hover:text-pink-500" to="/kontakt/">
            Kontaktformular</Link> gibt es die Möglichkeit mehr zu erfahren, einfach durch zu fragen beim Ausfüllen.
        </p>
        <br />
        <hr />
        <p>
          Herzliche Grüsse, <br />
          Adinda
      </p>
      </div>
    </Layout>
  );
}