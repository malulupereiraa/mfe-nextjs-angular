import React from "react";
import dynamic from "next/dynamic";

// const AppComponent = dynamic(() => import("mfeAngular/AppComponent").then(mod => mod.default), {  
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

const CatalogComponent = dynamic(()=> import("mfeAngular/AppComponent"))
// const AppComponent = dynamic(() =>
//   import('mfeAngular/AppComponent').then((mod) => { console.log(mod); return mod.AppComponent; }), { ssr: false,
//   loading: () => <p>Loading...</p>, }
// );
export default function Home() {
  return (
    <React.Suspense fallback="Loading Remote Component...">
      Abaixo Renderizar o Angular Remote
      {/* <AppComponent /> */}
      <CatalogComponent />
    </React.Suspense>
  );
}
