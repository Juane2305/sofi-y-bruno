import cancion from "../assets/song.mp3";
import Countdown from "./Countdown";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DressCode from "./DressCode";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import MusicScreen from "./MusicScreen";
import { GalleryPraga } from "./GalleryPraga";
import LugaresPraga from "./LugaresPraga";

const Invitacion = () => {
  const targetDate = new Date("2026-01-23T17:30:00-03:00");

  const colorPrincipal = "#ffba6b";

  return (
    <div className="w-full relative font-modernaText overflow-hidden">
      <div className="absolute">
        <MusicScreen cancion={cancion} />
      </div>
      <div className="relative flex flex-col items-center justify-start pt-30 md:pt-20 h-screen w-full text-center bg-fondo-praga-mobile md:bg-fondo-praga bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <img
          src="https://res.cloudinary.com/dfschbyq2/image/upload/v1759523084/7165d127-07a0-420b-b18e-94ee1bbdd8b0_e2dmoi.jpg"
          alt="Fondo nombres"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div
          data-aos="fade-in"
          className="relative z-10 flex flex-col items-center text-center "
        >
          <p className="text-sm md:text-xl uppercase tracking-widest text-white mb-5 font-montserrat">
            ¡Nos Casamos!
          </p>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-2 font-tangerine">
            Sofi &amp; Bruno
          </h1>
          <p className="text-base md:text-xl text-white font-montserrat">
            23 / 01 / 2026
          </p>
        </div>
      </div>
      <div>
        <section
          id="contador"
          className="bg-beige w-full flex flex-col items-center justify-center gap-y-5 py-10 font-thin"
        >
          <Countdown
            containerClasses={
              "w-full flex flex-col justify-center items-center gap-y-5 font-montserrat"
            }
            targetDate={targetDate}
          />
        </section>

        <LugaresPraga
          linkCeremonia="https://maps.app.goo.gl/2wktbkxZ4AUrDhV96"
          nombreIglesia="Parroquia Nuestra Señora del Rosario"
          horaIglesia="17:30hs"
          linkCivil=""
          linkFiesta="https://maps.app.goo.gl/Bh5xQ6XTKEguh77dA"
          nombreSalon="Eventos Mediterráneo"
          horaFiesta="20:00hs"
          horaCivil="21:15hs"
          claseContainer="flex flex-col md:flex-row items-center justify-center gap-8 my-8 font-montserrat"
          claseTexto="text-gray-900"
        />
        <section className="mb-16">
          <GalleryPraga
            text="❤️"
            sectionClass="bg-white text-gray-700 font-montserrat"
            images={[
              {
                index: 1,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759522141/a9742cb6-f591-48a8-bf40-69dd75c63cb2_innfvg.jpg",
              },
              {
                index: 2,
                img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759522156/c44f1cfd-12fa-455f-bbb8-95aac12db0f4_ntpovo.jpg",
              },
            ]}
          />
        </section>
        <div className="bg-[#ffba6b] text-center text-white relative font-montserrat">
          <GoogleCalendarButton
            background={{ backgroundColor: colorPrincipal }}
            titleCalendar="Casamiento de Sofi y Bruno"
            fechaComienzo="20260123T200000"
            fechaFin="20260124T040000"
            salon="Av. Robustiano Patrón Costas 1023, A4400 Salta"
            imgClass="text-white"
            buttonClass="bg-white hover:bg-transparent text-gray-800 hover:text-white border-white"
          />
        </div>
        <div className="relative">
          <DressCode dress_code="Elegante" />
        </div>
        <DatosBancarios
          texto="Si deseás hacernos un regalo te dejamos nuestros datos"
          claseContenedor=" text-white font-montserrat"
          claseBoton="border-2 border-blue-900 bg-white py-3 px-6 text-gray-800 rounded-full hover:bg-gray-100 hover:text-gray-800 transform transition-transform duration-300 ease-in-out"
          textSize="text-lg"
          background={{ backgroundColor: colorPrincipal }}
          styleBotonModal={{ backgroundColor: "white", borderColor: "white" }}
          claseBotonModal={{
            backgroundColor: colorPrincipal,
            borderColor: colorPrincipal,
          }}
          styleBorderModal={{ borderColor: colorPrincipal }}
          styleTextColor={{ color: colorPrincipal }}
          cbu="0000003100079941692225"
          alias="Casamientobrunoysofi"
          banco="Mercado Pago"
          nombre="Sofia Calabró"
          borderModal="border-blue-500"
          textColor="text-blue-500"
        />
        <section className="px-6 md:px-20 py-10 bg-white text-gray-800 font-montserrat text-center space-y-4">
          <p className="text-lg md:text-xl leading-relaxed">
            Si recibiste mi invitación es porque eres muy importante para mí.
          </p>
        </section>
        <Asistencia
          clase="py-10 bg-fondo-banner font-montserrat"
          claseButton="border-2 py-3 px-6 rounded-full border-gray-800 hover:border-gray-700 hover:bg-white hover:text-gray:800"
          linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSdSzuvd7IgC5WXUBFovRPzjA0awWy_iL0jPm2AXoSxSKn3Fcg/viewform?usp=dialog"
        />
        <section className="px-6 md:px-20 py-10 bg-white text-gray-800 font-montserrat text-center space-y-4">
          <p className="text-lg md:text-xl leading-relaxed">
            Tengo un lugar, un platillo, una copa y momentos especiales
            preparados para ti, porque quiero compartir contigo este día tan
            significativo.
          </p>
          <p className="text-base md:text-lg italic text-gray-600">
            Por eso, te pido por favor confirmar tu asistencia antes del{" "}
            <span className="font-semibold">10-12-25</span>, ya que tu respuesta
            me ayudará a organizar mejor y dar oportunidad a alguien más en caso
            de que no puedas acompañarme.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
