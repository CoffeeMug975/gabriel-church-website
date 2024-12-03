// Header.js
import Image from 'next/image';
import Link from 'next/link';
import flag from '../images/flag.jpg';
import cross from '../images/cross.jpg';

export default function Header() {
    return (
        <div className="bg-white fixed left-0 right-0 z-50">
            <section className="flex justify-around p-4 mx-auto" style={{ width: '1400px'}}>
                <Image
                    src={flag}
                    width={150}
                    height={75}
                    alt="Ethiopian Flag"
                />
                <section className="text-black font-serif text-lg font-extrabold">
                    <h1>St. Gabriel Ethiopian Orthodox Tewahedo Church</h1>
                    <h1>ቅዱስ ገብርኤል ኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን</h1>
                    <a 
                        className="flex justify-center text-blue-500 font-bold"
                        href="https://www.google.com/maps/place/263+25+Ave+NE,+Calgary,+AB+T2E+1Y1/@51.0751778,-114.059132,17z/data=!3m1!4b1!4m5!3m4!1s0x5371656eef468e3d:0x14a21ed7c3c95f!8m2!3d51.0751745!4d-114.0565571?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" rel="noopener noreferrer">
                            263 25 Ave NE Calgary AB
                    </a>
                </section>
                <Image
                    src={cross}
                    width={60}
                    height={75}
                    alt="Ethiopian Orthodox Cross"
                />
            </section>
            
            <nav className="bg-amber-900 p-3">
                <h2 className="flex justify-around">
                    <ul>
                        <Link href="/" className="text-white hover:underline">
                            Home
                        </Link>
                    </ul>
                    <ul>
                        <Link href="/about" className="text-white hover:underline">
                            About
                        </Link>
                    </ul>
                    <ul>
                        <Link href="/contact" className="text-white hover:underline">
                            Contact Us
                        </Link>
                    </ul>
                    <ul>
                        <Link href="/join" className="text-white hover:underline">
                            Join Our Service
                        </Link>
                    </ul>
                </h2>
            </nav>
            
        </div>
    );
}
