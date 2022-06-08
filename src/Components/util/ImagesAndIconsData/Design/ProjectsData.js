import AirHuaracheImg from "../../../../assets/DesignProj/airhuarache.png";
import NikeAirmax from "../../../../assets/DesignProj/airmax.png";
import CovidTracker from "../../../../assets/DesignProj/CovidTracker.png";
import SkatedboardBoy from "../../../../assets/homePage.png";
import CartImg from "../../../../assets/DesignProj/icons8-fast-cart-64.png";
export const projectsData = [
  {
    className: "landscapeProj",
    data: "fade-up",
    delay: "1000",
    duration: "650",
    link:
      "https://www.behance.net/gallery/104309977/Nike-Air-Huarache-Page-Design",
    Img: AirHuaracheImg,
    altText: "AirHuaracheImg",
    text: "Air Huarache Page Design",
    innerClass: "imgWrapper",
    innerdata: "fade-up",
    innerduration: "1000",
    innerdelay: "400"
  },
  {
    className: "leftProj",
    data: "fade-right",
    delay: "300",
    duration: "700",
    link:
      "https://www.behance.net/gallery/104309477/Front-End-Developer-Portfolio-UI",
    Img: SkatedboardBoy,
    altText: "SkatedboardBoy Image",
    text: "Portfolio Desgin UI",
    innerClass: "imgWrapper",
    innerTextClass: "titleHead portfoliodesign",
    innerdata: "",
    innerduration: "",
    innerdelay: ""
  },
  {
    className: "rightProj",
    data: "fade-left",
    delay: "300",
    duration: "700",
    link: "https://www.behance.net/gallery/106317571/Ecommerce-Website",
    Img: CartImg,
    altText: "Cart Image",
    text: "Ecommerce Website Design",
    innerClass: "imgWrapper",
    innerTextClass: "titleHead",
    innerdata: "",
    innerduration: "",
    innerdelay: ""
  },
  {
    className: "landscapeProj airmaxdesign",
    data: "fade-up",
    delay: "650",
    duration: "1000",
    link: "https://www.behance.net/gallery/104338651/Nike-Airmax-Page-Design",
    Img: NikeAirmax,
    altText: "NikeAirmax Image",
    text: "Nike Airmax Page Design",
    innerClass: "imgWrapper",
    innerTextClass: "titleHead",
    innerdata: "fade-up",
    innerduration: "1000",
    innerdelay: "400"
  },

  {
    className: "landscapeProj coviddesign",
    data: "fade-up",
    delay: "750",
    duration: "1000",
    link:
      "https://www.behance.net/gallery/104342443/Corona-Virus-Tracker-Web-App-Design",
    Img: CovidTracker,
    altText: "CovidTracker Image",
    text: "",
    innerClass: "imgWrapper",
    innerTextClass: "",
    innerdata: "",
    innerduration: "",
    innerdelay: ""
  }
];
