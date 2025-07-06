
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Venta Online en 24 Horas" subheadline="Digitaliza tu negocio rápido y fácil con soporte continuo." cta1="Empieza Ahora" />
<How step1Title="Contáctanos" step1Desc="Explícanos tu negocio y necesidades." step2Title="Creamos tu web" step2Desc="Desarrollamos tu tienda online en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para maximizar ventas." />
<Aboutus headline="WebGo: Ventas Digitales, Éxito Real" subheadline="Transformamos recomendaciones en ventas online, sin preocupaciones ni complicaciones técnicas." beneficiotitulo1="Optimización Instantánea" beneficio1="Simplificamos la gestión web" beneficiotitulo2="Aumento de Ventas" beneficio2="Convierta recomendaciones en ingresos" />
<Services heading="Aumenta Tus Ventas Digitalmente" description="Creamos y gestionamos tu portal de ventas online en 24 horas." services={[{"name":"Diseño Web Rápido","icon":"bolt","description":"Tu web lista en menos de un día."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Optimización SEO","icon":"chart-line","description":"Posiciona tu negocio en buscadores."},{"name":"Gestión Integral","icon":"cogs","description":"Nos encargamos de todo por ti."},{"name":"Publicidad Online","icon":"bullhorn","description":"Atrae clientes potenciales diariamente."},{"name":"Análisis de Datos","icon":"chart-bar","description":"Comprende y mejora tus ventas digitales."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en impresionantes realidades digitales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudar a mi negocio a vender más en línea?","respuesta":"WebGo crea sitios web personalizados que muestran tus productos y servicios, lo que aumenta tu visibilidad en línea. Nos encargamos de todo para que puedas enfocarte en tu negocio, atrayendo más clientes sin esfuerzo adicional de tu parte."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿qué soluciones ofrece WebGo?","respuesta":"No te preocupes, en WebGo gestionamos tu sitio web por ti. Nos encargamos del mantenimiento y actualizaciones, así puedes concentrarte en lo que haces mejor: dirigir tu negocio."},{"pregunta":"¿Qué beneficios obtengo al digitalizar las ventas de mi negocio con WebGo?","respuesta":"Digitalizar tu negocio con WebGo te permite llegar a más clientes, mejorar tu imagen de marca y aumentar tus ventas. Además, ahorras tiempo y esfuerzo porque nosotros hacemos el trabajo técnico por ti."},{"pregunta":"¿Es complicado empezar a vender online con WebGo si solo he vendido por recomendaciones?","respuesta":"No, con WebGo es muy fácil empezar. Diseñamos y construimos tu sitio web desde cero, y te guiamos en cada paso para que puedas expandir tus ventas sin complicaciones técnicas."},{"pregunta":"¿Qué diferencia a WebGo de otras agencias digitales en Santiago?","respuesta":"WebGo se especializa en ayudar a dueños de pequeños negocios como tú a digitalizar sus ventas. Ofrecemos un servicio completo, desde la creación hasta la gestión del sitio web, asegurando que no tengas que preocuparte por los detalles técnicos."}]} />
<BookAppointment 
                      heading="Impulsa Tu Negocio Digitalmente" 
                      description="Descubre cómo WebGo transforma recomendaciones en ventas online efectivas con soluciones fáciles y rápidas para empresarios ocupados."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
