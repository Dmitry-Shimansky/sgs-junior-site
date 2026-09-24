import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 metadataBase:new URL('https://sgs-junior.tohtieva-juhar.chatgpt.site'),
 title:'SGS Junior – Bequeme Jungen-Boxershorts im 10er-Pack',
 description:'SGS Junior: Jungen-Boxershorts aus 95 % Baumwolle und 5 % Elasthan. Entdecke unsere 10er-Packs und EU-Kindergrößen 98–176 auf Amazon.',
 icons:{icon:'/favicon.svg'},
 openGraph:{title:'SGS Junior – Für kleine Helden. Für jeden Tag.',description:'Weiche Jungen-Unterwäsche im 10er-Pack. Entdecke SGS auf Amazon.',locale:'de_DE',type:'website'},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) { return <html lang="de"><body>{children}</body></html>; }
