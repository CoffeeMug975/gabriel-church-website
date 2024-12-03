// This is the footer of the website

import Image from 'next/image';
import youtube from "../images/YouTube-Square.png"
import gitHub from "../images/GitHub-Logo-Blue.jpg"

export default function Footer() {


    return(
        <section className="flex justify-around bg-amber-900 p-5">
            <div>
                <p className="flex justify-center text-black"><b>CalgaryEthiopianOrthodoxGabriel.ca</b></p>
                <div className="flex justify-between">
                    <p className="pr-2 text-green-300">Copyright-2024</p>
                    <p className="pr-2 text-yellow-300">All-Rights-Reserved</p>
                    <p className="text-red-300">License</p>
                </div>
            </div>
            
            <p className="text-black"><b>Phone Number: (403)-266-1178</b></p>
            
            <a 
                href="https://www.youtube.com/@dkebede1/featured"
                target="_blank" rel="noopener noreferrer"
                className="mt-2">
                    <Image
                        src={youtube}
                        width={60}
                        height="auto"
                        alt="YouTube Link"
                        className="rounded-lg"
                    />
            </a>
            <a 
                href="https://github.com/CoffeeMug975/gabriel-church-website" 
                target="_blank" rel="noopener noreferrer"
                className="mt-1">
                    <Image
                        src={gitHub}
                        width={50}
                        height={50}
                        alt="GitHub"
                        className="rounded-lg"
                    />
            </a>
        </section>
    );
}