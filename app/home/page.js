

import Header from "../menu/header";            
import Footer from "../menu/footer";
import Image from "next/image";
import ChurchImg from "../images/Building-image-2.jpg";
import ChurchImg2 from "../images/Building-image-3.jpg";

export default function HomePage() {

    return (
        <div>
            <div>
                <Header />
                <video width="100%" height="auto" autoPlay muted loop preload="none">
                    <source src="/media/Calgary-St-Gabriel-07-01-24.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <section className="bg-white pb-5 pt-5 text-black">
                <section className="mx-auto bg-yellow-700 rounded-lg p-5" style={{ width: '1400px'}}>

                    <section className="flex justify-between items-center p-2">
                        <div className="flex-1 flex justify-center">
                            <Image
                                src={ChurchImg}
                                alt="St. Gabriel Church"
                                className="w-2/3 rounded-lg">
                            </Image>
                        </div>
                        <div className="flex-1 px-6 bg-gray-400 rounded-lg">
                            <h3 className="text-lg font-bold mb-4">St. Gabriel Church</h3>
                            <p
                                className=""
                                style={{width: "100%"}}>
                                St. Gabriel Church is apart of the Ethiopian Orthodox Tewahedo denomination. The 
                                church is located at 263 25 Ave NE Calgary AB. It offers a place for worship, prayer, and cultural celebrations, adhering to traditional 
                                Ethiopian Orthodox practices.
                            </p>
                        </div>
                    </section>

                    <section className="flex justify-between items-center p-2">
                        <div className="flex-1 px-6 bg-gray-400 rounded-lg">
                            <h3 className="text-lg font-bold mb-4">Whats New</h3>
                            <p
                                className=""
                                style={{width: "100%"}}>
                                Lean about current events happing a St. Gabriel Church and
                                join us in prayer and worship every sunday at
                                263 25 Ave NE Calgary AB T2E 1Y1, from 6AM-11AM.
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <Image
                                src={ChurchImg2}
                                alt="New St. Gabriel Church"
                                className="w-2/3 rounded-lg">
                            </Image>
                        </div>
                    </section>
                </section>
            </section>

            <Footer />
        </div>
    );
}