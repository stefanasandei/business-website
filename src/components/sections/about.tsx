import Image from "next/image";
import portrait from "../../../public/images/pisicuta.webp";

export const AboutSection = () => {
    return <section className="grid lg:grid-cols-2 gap-10 mb-40 items-center">
        <div>
            <h1 className="font-bold text-4xl">Despre mine</h1>
            <p className="text-justify lg:text-xl pt-5">
                Sunt Oana, o “tânăra” între 40-50 ani, absolventă de facultăți și cursuri, cautatoare a sensului propriei mele vieți. Am urmat un profil realist, o carieră mai degrabă ancorată în economia materialistă decât în partea terapiilor și totuși am ajuns și aici. În urmă cu aproape 10 ani am pornit la drum în a descoperi ce îmi aduce fericirea și pacea sufletească. Și rând pe rând am descoperit că sunt lucruri care ne răpesc “momentan” din viață pe parte materială, apoi când reușeșți să le depășești pe acestea dai de sentimente de dată această (orgoliu, cunoștințe, putere) care îți par că sunt mai bune decât lucrurile materiale dar nu sunt cu nimic mai bune și nici acestea nu-ti aduc pacea iar după ce le depășești și pe acestea mai spre urmă dai de sentimentele spirituale care te pot la fel de mult lega și atașa încât să nu obții echilibrul. Conștientizând toate acestea sper că sunt pe calea cea bună, încă lucrând la cunoașterea mea, care e departe de a fi completă. În ultimii doi ani am cercetat canale energetice superioare mie cu scopul de a află care îmi este menirea, ce îmi va aduce pe deplin fericirea și am aflat că asta înseamnă să mă dedic ajutorării semenilor mei, oferindu-le vindecare, alinare prin vorbe sau bioenergie. Vindecarea pe care o facem împreună nu este doar a voastră ci și a mea, pentru că oamenii se oglindesc unii pe ceilalți. Eu nu sunt completă fără voi, trebuie să mă continui. Căutând Calea Mea, Iată-mă pe Calea Ta!
            </p>
        </div>
        <Image src={portrait.src} width={1200} height={1272} alt="portret" className="rounded-2xl" />
    </section>
}
