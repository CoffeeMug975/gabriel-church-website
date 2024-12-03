// This is the about us page

import Header from "../menu/header";
import Footer from "../menu/footer";            

export default function AboutPage() {


    return(
        <div>
            <Header />
            <section className="bg-white w-auto pt-[171.4px] text-black">
                <h1>Inside body of About Page</h1>
            </section>
            <Footer/>
        </div>
    );
}