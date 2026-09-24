import type { Metadata } from 'next';
import styles from './design-two.module.css';

export const metadata: Metadata = {
  title: 'SGS Junior – Anziehen. Losziehen.',
  description: 'Bequeme Jungen-Boxershorts im 10er-Pack. 95 % Baumwolle, 5 % Elasthan und Platz für jedes Abenteuer. Entdecke SGS Junior auf Amazon.',
  openGraph: { title: 'SGS Junior – Anziehen. Losziehen.', description: 'Jungen-Unterwäsche für Schule, Freizeit und alles dazwischen.', locale: 'de_DE', type: 'website' },
};

const amazon = 'https://amzn.eu/d/01feguzW';
const products = [
  { number: '01', name: 'Klassischer Mix', subtitle: 'Die Klassiker. Immer dabei.', file: 'klassischer-mix.png', alt: 'Vier schwarze, drei blaue und drei graue SGS Jungen-Boxershorts im 10er-Pack', description: 'Schwarz, Blau und Grau: drei klassische Farben für jeden Tag.', composition: '4 × Schwarz · 3 × Blau · 3 × Grau', colors: ['#181a1e', '#23416c', '#898788'] },
  { number: '02', name: 'Bunter Mix', subtitle: 'Mehr Farbe. Mehr Lieblingsstücke.', file: 'bunter-mix.jpg', alt: 'Zehn SGS Jungen-Boxershorts in Bordeauxrot, Petrol, Blau, Grau und Hellblau', description: 'Von Bordeauxrot bis Hellblau – für alle, die es gern bunt mögen.', composition: 'Je 2 × Bordeauxrot, Petrol, Blau, Grau und Hellblau', colors: ['#a03145', '#437f88', '#23416c', '#898788', '#b9dfe8'] },
  { number: '03', name: 'Ganz in Schwarz', subtitle: 'Einfach. Schwarz. Gut.', file: 'schwarz.png', alt: 'Zehn schwarze SGS Jungen-Boxershorts mit schwarzem Markenbund', description: 'Ein klarer Look, zehnmal im Pack. Für den täglichen Wechsel.', composition: '10 × Schwarz', colors: ['#181a1e'] },
];

function Brand() {
  return <a className={styles.brand} href="#oben" aria-label="SGS Junior – nach oben"><span className={styles.logoCrop}><img src="/images/sgs-logo.jpg" alt="SGS" width="2048" height="1280" /></span><span className={styles.junior}>JUNIOR<span className={styles.brandSquare} aria-hidden="true" /></span></a>;
}

function AmazonLink({ children, className }: { children: React.ReactNode; className: string }) {
  return <a className={className} href={amazon} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true">↗</span><span className="sr-only"> (Amazon, öffnet in einem neuen Tab)</span></a>;
}

export default function SecondDesign() {
  return <div className={styles.page} id="oben">
    <a className="skip-link" href="#inhalt-2">Zum Inhalt springen</a>
    <header className={styles.header}><div className={styles.headerInner}><Brand /><nav aria-label="Hauptnavigation"><a href="#kollektion-2">Die Kollektion</a><a href="#material-2">Material & Größen</a></nav><AmazonLink className={styles.headerShop}>Auf Amazon kaufen</AmazonLink></div></header>
    <main id="inhalt-2">
      <section className={styles.hero} aria-labelledby="hero-2-title"><div className={styles.heroInner}>
        <div className={styles.heroCopy}><p className={styles.kicker}>JUNGEN-UNTERWÄSCHE VON SGS</p><h1 id="hero-2-title">ANZIEHEN.<br /><span>LOSZIEHEN.</span></h1><p className={styles.heroText}>Bequeme Boxershorts für Jungen – aus weicher, atmungsaktiver Baumwolle mit Elasthan. Für Schule, Freizeit und alles, was der Tag bringt.</p><AmazonLink className={styles.yellowButton}>Jetzt auf Amazon kaufen</AmazonLink><a className={styles.heroExplore} href="#kollektion-2">Die Kollektion entdecken <span aria-hidden="true">↓</span></a></div>
        <div className={styles.heroArt} aria-label="SGS Junior Boxershorts in Schwarz und Bordeauxrot">
          <span className={styles.backgroundType} aria-hidden="true">10</span>
          <figure className={`${styles.productPrint} ${styles.printBlack}`}><div className={styles.singleProduct}><img src="/images/schwarz.png" alt="Schwarze SGS Junior Boxershorts mit Markenbund" width="1537" height="1023" fetchPriority="high" /></div><figcaption><span>SGS JUNIOR</span><span>SCHWARZ</span></figcaption></figure>
          <figure className={`${styles.productPrint} ${styles.printRed}`}><div className={styles.singleProduct}><img src="/images/bunter-mix.jpg" alt="Bordeauxrote SGS Junior Boxershorts mit Markenbund" width="1537" height="1023" fetchPriority="high" /></div><figcaption><span>SGS JUNIOR</span><span>BORDEAUXROT</span></figcaption></figure>
          <div className={styles.packStamp}><strong>10</strong><span>BOXERSHORTS<br />PRO PACK</span></div>
        </div>
      </div></section>
      <div className={styles.factRibbon} aria-label="Produktmerkmale"><div><span>95 % BAUMWOLLE</span><i aria-hidden="true">/</i><span>5 % ELASTHAN</span><i aria-hidden="true">/</i><span>GRÖSSEN 98–176</span><i aria-hidden="true">/</i><span>10ER-PACK</span></div></div>
      <section className={styles.collection} id="kollektion-2" aria-labelledby="collection-2-title"><div className={styles.sectionHeading}><div><p className={styles.darkKicker}>DIE KOLLEKTION</p><h2 id="collection-2-title">Dein Tag.<br />Deine Farben.</h2></div><p>Drei Looks. Ein gutes Gefühl.<br />Entdecke unsere Jungen-Boxershorts im 10er-Pack.</p></div>
        <div className={styles.productRows}>{products.map((product,index) => <article className={`${styles.productRow} ${index === 1 ? styles.colorRow : ''} ${index === 2 ? styles.blackRow : ''}`} key={product.number}>
          <div className={styles.packVisual}><span className={styles.rowNumber} aria-hidden="true">{product.number}</span><div className={styles.packPhoto}><img src={'/images/'+product.file} alt={product.alt} width="1537" height="1023" loading="lazy" /></div><div className={styles.photoCaption}><span>SGS JUNIOR</span><span>10 STÜCK / PACK</span></div></div>
          <div className={styles.productInfo}><p className={styles.productSubtitle}>{product.subtitle}</p><h3>{product.name}</h3><div className={styles.swatches} aria-hidden="true">{product.colors.map(color=><span key={color} style={{backgroundColor:color}} />)}</div><p className={styles.productDescription}>{product.description}</p><p className={styles.composition}>{product.composition}</p><AmazonLink className={styles.productShop}>Auf Amazon ansehen</AmazonLink></div>
        </article>)}</div><p className={styles.availability}>Verfügbare Modelle, Größen und aktuelle Preise findest du auf Amazon.</p>
      </section>
      <section className={styles.material} id="material-2" aria-labelledby="material-2-title"><div className={styles.materialInner}><div className={styles.materialLead}><p className={styles.kicker}>DAS GUTE GEFÜHL DARUNTER</p><h2 id="material-2-title">Weniger Zwicken.<br />Mehr Bewegen.</h2><div className={styles.bigFact}><strong>95<span>%</span></strong><div>BAUMWOLLE<span>+ 5 % Elasthan</span></div></div></div><div className={styles.materialDetails}>
        <article><span>01</span><div><h3>Weich & atmungsaktiv</h3><p>Die Baumwolle fühlt sich angenehm auf der Haut an. Elasthan sorgt für einen elastischen Sitz.</p></div></article>
        <article><span>02</span><div><h3>Platz für Bewegung</h3><p>Die körpergerechte Passform bietet Bewegungsfreiheit beim Spielen, Toben und Sport.</p></div></article>
        <article><span>03</span><div><h3>Einfach im Alltag</h3><p>Das praktische 10er-Pack erleichtert den täglichen Wechsel. Für die Maschinenwäsche geeignet.</p></div></article>
        <article><span>04</span><div><h3>Die passende Größe</h3><p>EU-Kindergrößen von 98 bis 176. Die Größentabelle auf Amazon hilft dir bei der Auswahl.</p></div></article>
      </div></div></section>
      <section className={styles.finalCall} aria-labelledby="final-2-title"><div><p className={styles.darkKicker}>FÜR ALLES, WAS MORGEN KOMMT.</p><h2 id="final-2-title">Kleine Wäsche.<br />Große Pläne.</h2></div><div><p>Entdecke SGS Jungen-Boxershorts auf Amazon.</p><AmazonLink className={styles.darkButton}>Jetzt auf Amazon kaufen</AmazonLink></div></section>
    </main>
    <footer className={styles.footer}><div className={styles.footerTop}><Brand /><p>Jungen-Unterwäsche für jeden Tag.</p><AmazonLink className={styles.footerService}>Bestellung & Kundenservice über Amazon</AmazonLink></div><div className={styles.footerBottom}><span>© {new Date().getFullYear()} SGS Junior</span><a href="#oben">Nach oben ↑</a></div></footer>
  </div>;
}
