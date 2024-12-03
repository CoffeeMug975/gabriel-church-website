

import Header from "../menu/header";            // Error on deployment(Module not found)
import Footer from "../menu/footer";

export default function HomePage() {

    return (
        <div>
            <Header />
            <h1>Inside body of Home</h1>
            <Footer />
        </div>
    );
}