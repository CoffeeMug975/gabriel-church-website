//This is the contact Page

import Header from "../menu/header";        // Error on deployment(Module not found)
import Footer from "../menu/footer";        // Error on deployment(Module not found)

export default function ContactPage(){


    return(
        <main>
            <Header />
            <section className="bg-white w-auto pt-[171.4px] text-black">
                <p>This is the Contact Page.</p>
            </section>
            <Footer />
        </main>
    );
}