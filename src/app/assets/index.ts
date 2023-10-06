import Image, { StaticImageData } from "next/image";
import Copy from '../assets/services/copy.png'
import Site from '../assets/services/site.png'
import Traffic from '../assets/services/trafego.png'
import Branding from '../assets/services/branding.png'
import Seo from '../assets/services/seo.png'
import SocialMedia from '../assets/services/socialmedia.png'
import AboutImg from '../assets/aboutimg.png'


interface Service {
    image: StaticImageData,
    title: string,
    content: Array<string>
}

export const ServicesList: Service[] = [

         { image: Traffic, title: 'TRÁFEGO PAGO', content: ["GOOGLE ADS", "FACEBOOK ADS", "OUTRAS REDES", "PLANEJAMENTO", "EXECUÇÃO", "ANÁLISE", "OTIMIZAÇÃO", "RELATÓRIO SEMANAL", "REMARKETING", "PALAVRAS CHAVES" ]},

        { image: Copy, title: 'COPYWRITING', content:  ["SCRIPT PARA VÍDEOS", "TEXTOS PARA SITES", "TEXTO PARA EMAIL", "LEGENDAS PARA REDES SOCIAIS" ]},

        { image: Seo, title: 'SEO', content:  ["CONSULTORIA", "CONFIGURAÇÃO", "LINK BUILDING", "OTIMIZAÇÃO DE TEXTOS DE SITE", "POSICIONAMENTO NO GOOGLE"]},

        { image: Site, title: 'SITE', content:  ["CRIAÇÃO", "CONFIGURAÇÃO DE PLUGINS E PIXEL", "CUSTOMIZAÇÃO DE DESIGN", "LANDING PAGE" ]},

        { image: SocialMedia, title: 'CONTEÚDO PARA REDES SOCIAIS', content:  ["CRIATIVOS/ARTES" ,"SCRIPTS PARA VÍDEOS", "CONFIGURAÇÃO DE PIXEL", "LEGENDAS"]},

        { image: Branding, title: 'BRANDING', content:  ["PLANEJAMENTO DA COMUNICAÇÃO", "POSICIONAMENTO", "IDENTIDADE VISUAL", "PRESENÇA NAS MÍDIAS SOCIAIS", "PONTOS DE CONTATO COM O CONSUMIDOR"]},

];
