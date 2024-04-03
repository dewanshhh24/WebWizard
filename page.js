import Image from "next/image";
import Header from "./about/header";
import Landing from "./about/landing";
import Footer from "./about/Footer";




export default function Home() {
  return (
    <main className="">
     <div> <Header /></div>
    
     
     
      <div>
       
      
        <Landing />
        
      </div>
      
     <div>
      <Footer />
      
     </div>
      
    </main>
  );
}
