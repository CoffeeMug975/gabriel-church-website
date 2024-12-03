// This is the about us page

import Header from "../menu/header";
import Footer from "../menu/footer";            // Error on deployment(Module not found)

export default function AboutPage() {


    return(
        <main>
            <Header />
            <p>This is the About Page.</p>
            <Footer />
        </main>
    );
}