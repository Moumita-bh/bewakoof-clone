import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaTruck, FaMoneyBillWave, FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaSnapchatGhost, FaApplePay  } from "react-icons/fa";
import {
  SiPaytm,
  SiVisa,
  SiMastercard,
SiAppstore, 
SiGooglepay,// <-- replacement
  // SiRupay, <-- remove this
} from "react-icons/si";

const HomePage = () => {
  const links = [
    "MEN",
    "WOMEN",
    "LIVE NOW",
    "PLUS SIZE",
    "ACCESSORIES",
    "OFFICIAL MERCH",
    "SNEAKERS",
    "BEWAKOOF AIR",
    "HEAVY DUTY",
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // move 1 item at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

 const items = [
    {
      src: "https://images.bewakoof.com/uploads/grid/app/1x1-may15-jogger-common--1--1747366605.jpg",
      alt: "T-shirts",
     
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Buy-2-OS-Common-1x1-HC-Banner--6--1747284792.jpg",
      alt: "Pajamas",
     
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/1x1-MAY-Hot-New-Tee-IKRM-ezgif-com-optimize-1747457245.gif",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/1x1-MAY-superman-graphic-1747382868.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/1x1-16MAY-DOTW-Stitch-common-ezgif-com-optimize-1747381657.gif",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Buy-3-CFT-Common-1x1-HC-Banner--4--1747284793.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/1x1-may15-jogger-common--1--1747366605.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Denim-Verse-1x1-HC-BANNER-Cargo-common-g5-ezgif-com-optimize-1747455186.gif",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/1x1-RM--1--1747399188.jpg",
      alt: "Design of the week",
      
    },
  ];

  const products = [
  {
    img: "https://images.bewakoof.com/t320/women-s-pink-give-me-space-graphic-printed-oversized-t-shirt-660931-1746440619-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-blue-music-garfield-graphic-printed-boyfriend-t-shirt-662738-1744193478-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-skipper-blue-free-spirit-flora-graphic-printed-boyfriend-t-shirt-662752-1744194468-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-navy-blue-log-off-graphic-printed-oversized-t-shirt-659846-1746772591-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-ginger-root-brown-coffee-on-the-rocks-graphic-printed-oversized-t-shirt-671238-1743579590-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-fog-green-things-graphic-printed-oversized-t-shirt-671009-1744634058-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-pink-all-over-printed-wide-leg-pyjamas-645095-1736337439-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-black-cargo-carpenter-pants-651226-1743757375-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-white-special-graphic-printed-oversized-t-shirt-666419-1745584777-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-fog-green-hangin-there-graphic-printed-t-shirt-671002-1744633937-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  
];

 const products1 = [
  {
    img: "https://images.bewakoof.com/t320/men-s-red-pocket-jerry-graphic-printed-t-shirt-241993-1738219124-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-blue-inner-peace-graphic-printed-boyfriend-t-shirt-295707-1745902558-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-white-keep-listening-typography-t-shirt-465268-1738219111-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-blue-trust-your-ability-typography-t-shirt-295625-1739771087-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-black-blue-vibes-graphic-printed-boyfriend-t-shirt-555347-1744630990-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-fog-green-things-graphic-printed-oversized-t-shirt-671009-1744634058-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-pink-all-over-printed-wide-leg-pyjamas-645095-1736337439-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-black-cargo-carpenter-pants-651226-1743757375-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-white-special-graphic-printed-oversized-t-shirt-666419-1745584777-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-fog-green-hangin-there-graphic-printed-t-shirt-671002-1744633937-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  
];

const items1 = [
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Plus-size-T-shirts--1--1747368222.jpg",
      alt: "T-shirts",
     
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Wardrobe-Essentials-Tops--1--1747368223.jpg",
      alt: "Pajamas",
     
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Graphic-Printed--Oversized-T-shirts--2--1747368202.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Wide-Leg-Jeans--3--1747368224.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Oversized-Shirts--8--1747368204.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Effortless-Fit--Baggy-Pants--1--1747032724.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Basic-Minimalistic-T-shirts--1--1747368201.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Boyfriend-T-shirts--4--1747368202.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Lounge-Shorts--3--1747368203.jpg",
      alt: "Design of the week",
      
    },
  ];

  const products2 = [
  {
    img: "https://images.bewakoof.com/t320/men-s-grey-brain-wash-graphic-printed-t-shirt-591440-1739771074-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-brown-beast-within-graphic-printed-oversized-t-shirt-620155-1741259239-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-white-torque-graphic-printed-t-shirt-459652-1737626653-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-black-across-the-spiderverse-graphic-printed-oversized-t-shirt-599566-1730987038-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-white-better-better-graphic-printed-oversized-t-shirt-629620-1736761552-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-fog-green-things-graphic-printed-oversized-t-shirt-671009-1744634058-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-pink-all-over-printed-wide-leg-pyjamas-645095-1736337439-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-black-cargo-carpenter-pants-651226-1743757375-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-white-special-graphic-printed-oversized-t-shirt-666419-1745584777-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-fog-green-hangin-there-graphic-printed-t-shirt-671002-1744633937-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  
];

const items2 = [
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Scroll-collab-captain-america-1738993273.jpg",
      alt: "T-shirts",
     
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/SC-dr-doom-men-1738587355.jpg",
      alt: "Pajamas",
     
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/SC-demon-slayer-men-1738587354.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/SC-joker-men-1738587353.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/SC-deadpool-men-1738587273.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/SC-anime-men-1738586416.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/SC-mickey-women-1738591845.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/SC-marvel-men-1738586657.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/SC-disney-women--1--1738592408.jpg",
      alt: "Design of the week",
      
    },
  ];

  const products3 = [
  {
    img: "https://images.bewakoof.com/t320/men-s-black-hangin-astronaut-graphic-printed-oversized-t-shirt-504166-1741325888-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-black-oversized-t-shirt-439421-1734427687-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-black-dementors-graphic-printed-oversized-t-shirt-589145-1736506915-1.gif",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-brown-beast-within-graphic-printed-oversized-t-shirt-620155-1741259239-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-white-vengeance-typography-oversized-t-shirt-519142-1745907892-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-fog-green-things-graphic-printed-oversized-t-shirt-671009-1744634058-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-pink-all-over-printed-wide-leg-pyjamas-645095-1736337439-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-black-cargo-carpenter-pants-651226-1743757375-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-white-special-graphic-printed-oversized-t-shirt-666419-1745584777-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-fog-green-hangin-there-graphic-printed-t-shirt-671002-1744633937-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  
];

const products4 = [
  {
    img: "https://images.bewakoof.com/t320/women-s-off-white-stay-weird-graphic-printed-oversized-t-shirt-677674-1747310189-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-granite-green-too-rare-graphic-printed-boyfriend-t-shirt-677677-1747310140-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-vapour-blue-alien-graphic-printed-t-shirt-677676-1747310167-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-white-fomos-graphic-printed-oversized-vest-677675-1747310087-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-jet-black-experiment-graphic-printed-oversized-t-shirt-677673-1747310109-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-fog-green-things-graphic-printed-oversized-t-shirt-671009-1744634058-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-pink-all-over-printed-wide-leg-pyjamas-645095-1736337439-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-black-cargo-carpenter-pants-651226-1743757375-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-white-special-graphic-printed-oversized-t-shirt-666419-1745584777-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-fog-green-hangin-there-graphic-printed-t-shirt-671002-1744633937-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  
];

const items3 = [
    {
      src: "https://images.bewakoof.com/uploads/grid/app/13-Camo-Sneakers-HP-Banner-1080x1080-1745992773.jpg",
      alt: "T-shirts",
     
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/1x1-DRESSES--1--1746028241.jpg",
      alt: "Pajamas",
     
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/1x1-Bags--3--1746028243.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/Bestseller-T-Shirts-Common-1x1-HC-Banner-1747250018.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/13-Camo-Sneakers-HP-Banner-1080x1080-1745992773.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/1x1-com-solid-tee-1746033692.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/3x4-Boxers-1746013033.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/1x1-vest-men-1746028239.jpg",
      alt: "Design of the week",
      
    },
    {
      src: "https://images.bewakoof.com/uploads/grid/app/1x1-thunderbolts-flatlay-1747288955.jpg",
      alt: "Design of the week",
      
    },
  ];

  const products5 = [
  {
    img: "https://images.bewakoof.com/t320/men-s-red-moon-rider-plus-size-typography-t-shirt-480016-1746015821-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-black-stay-hydrated-graphic-printed-oversized-plus-size-t-shirt-634132-1715159953-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-black-ashura-graphic-printed-oversized-plus-size-t-shirt-634112-1745580630-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/never-mind-half-sleeves-printed-t-shirt-plus-size-340238-1655815271-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-black-plus-size-t-shirt-326618-1744701777-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-fog-green-things-graphic-printed-oversized-t-shirt-671009-1744634058-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-pink-all-over-printed-wide-leg-pyjamas-645095-1736337439-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-black-cargo-carpenter-pants-651226-1743757375-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/women-s-white-special-graphic-printed-oversized-t-shirt-666419-1745584777-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  {
    img: "https://images.bewakoof.com/t320/men-s-fog-green-hangin-there-graphic-printed-t-shirt-671002-1744633937-1.jpg",
    title: "Men's Fog Green Hangin There Graphic",
    brand: "Bewakoof®",
    price: 449,
    original: 1399,
    discount: "67% OFF",
    rating: 4.5,
  },
  
];




  return (
    <>
    <div className="border-t border-gray-200">
      <nav className="flex gap-22 items-center py-4 text-base font-large pl-8 ">
        {links.map((link, index) => (
          <a key={index} href="#" className="text-black hover:underline">
            {link}
          </a>
        ))}
      </nav>
    </div>
    

    <div className="max-screen-7xl overflow-hidden py-4 ">
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        arrows={false}
        showDots
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {items.map((item, index) => (
          <div key={index} className="relative rounded overflow-hidden">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">
              <div>{item.label}</div>
              {item.offer && <div className="text-2xl">{item.offer}</div>}
            </div>
          </div>
        ))}
      </Carousel>
      
    </div>
    <h2 className="text-lg font-semibold text-center mt-15 mb-4">NEW ARRIVALS</h2>
    <div className="relative mt-4">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full ml-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full mr-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Product List */}
<div
  ref={scrollRef}
  className="flex overflow-x-auto gap-8 px-10 scroll-smooth no-scrollbar"
>
  {products.map((product, index) => (
    <div
      key={index}
      className="md:min-w-[287px] flex-shrink-0 border border-gray-300 rounded-md shadow-sm ml-[-20px]"
    >
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-2 text-sm">
        <div className="font-bold">{product.brand}</div>
        <div className="line-clamp-2">{product.title}</div>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold">₹{product.price}</span>
          <span className="line-through text-gray-400 text-xs">
            ₹{product.original}
          </span>
          <span className="text-green-600 text-xs font-semibold">
            {product.discount}
          </span>
        </div>
        <div className="mt-1 text-yellow-500 text-sm">⭐ {product.rating}</div>
      </div>
    </div>
  ))}
</div>
    </div>


    <h2 className="text-center text-2xl font-semibold my-8 mt-35">Shop by Category - Men</h2>

<div className="w-full flex flex-wrap justify-center">
  {/* Card 1 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-OS-T-Shirts-Desktop-Trending-Category-Icon-1742298312.jpg"
      alt="Oversized T-shirts"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 2 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Joggers-Men-Desktop-Trending-Category-Icon-1742210212.jpg"
      alt="Joggers"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 3 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Cargos-Desktop-Trending-Category-Icon--2--1742210379.jpg"
      alt="Cargos"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 4 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Shirts-Men-Desktop-Trending-Category-Icon-1742210198.jpg"
      alt="Shirts"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 5 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Pyjamas-Men-Desktop-Trending-Category-Icon-1742210211.jpg"
      alt="Pyjamas"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 6 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Shorts-Trending-Category-Icon-1741345298.jpg"
      alt="Shorts"
      className="w-full h-full object-cover"
    />
    
  </div>
</div>

{/* Row-2 */}

<div className="w-full flex flex-wrap justify-center mt-6">
  {/* Card 1 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-CFT-Men-Desktop-Trending-Category-Icon-1742210197.jpg"
      alt="Oversized T-shirts"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 2 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Jeans-Desktop-Trending-Category-Icon-1742203623.jpg"
      alt="Joggers"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 3 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Pants-Men-Desktop-Trending-Category-Icon-1742210197.jpg"
      alt="Cargos"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 4 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Full-Sleeve-Desktop-Trending-Category-Icon-1742203624.jpg"
      alt="Shirts"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 5 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Vests-Trending-Category-Icon-1741345298.jpg"
      alt="Pyjamas"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 6 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Sneakers-Men-Desktop-Trending-Category-Icon-1742210196.jpg"
      alt="Shorts"
      className="w-full h-full object-cover"
    />
    
  </div>
</div>

{/* Row 3 */}

<div className="w-full flex flex-wrap justify-center mt-6">
  {/* Card 1 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Boxers-Trending-Category-Icon.jpg"
      alt="Oversized T-shirts"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 2 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Plus-size-Men-Desktop-Trending-Category-Icon--1--1742210379.jpg"
      alt="Joggers"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 3 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Sliders-Trending-Category-Icon.jpg"
      alt="Joggers"
      className="w-full h-full object-cover"
    />
    
  </div>
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300 bg-gray-200 flex items-center justify-center">
    <span className="text-3xl font-bold text-gray-800 text-center">View All</span>
    
  </div>
  </div>

  {/* Shops by Women */}

  <h2 className="text-center text-2xl font-semibold mb-5 ">Shop by Category- Women</h2>

<div className="w-full flex flex-wrap justify-center">
  {/* Card 1 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Trending-Category-Icon--2--1746093074.jpg"
      alt="Oversized T-shirts"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 2 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Joggers-Desktop-Trending-Category-Icon-1742209705.jpg"
      alt="Joggers"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 3 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Cargos-Desktop-Trending-Category-Icon--1--1742209719.jpg"
      alt="Cargos"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 4 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/CASSIC-FIT-T-SHIRTS-DESKTOP-1742209991.jpg"
      alt="Shirts"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 5 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Dresses-Desktop-Trending-Category-Icon-1742209719.jpg"
      alt="Pyjamas"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 6 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Shirts-Msite-Trending-Category-Icon-1742209703.jpg"
      alt="Shorts"
      className="w-full h-full object-cover"
    />
    
  </div>
</div>

{/* Row-2 */}

<div className="w-full flex flex-wrap justify-center mt-6">
  {/* Card 1 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-BF-T-shirts-Trending-Category-Icon--1--1746093128.jpg"
      alt="Oversized T-shirts"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 2 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/JEANS-DESKTOP-1742209993.jpg"
      alt="Joggers"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 3 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Pants-Desktop-Trending-Category-Icon-1742209702.jpg"
      alt="Cargos"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 4 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Tops-Desktop-Trending-Category-Icon-1742209702.jpg"
      alt="Shirts"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 5 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Pyjamas-Desktop-Trending-Category-Icon-1742209704.jpg"
      alt="Pyjamas"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 6 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/CO-ORDS-DESKTOP-1742209992.jpg"
      alt="Shorts"
      className="w-full h-full object-cover"
    />
    
  </div>
</div>

{/* Row 3 */}

<div className="w-full flex flex-wrap justify-center mt-6">
  {/* Card 1 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Shorts-Trending-Category-Icon-Women-1741345321.jpg"
      alt="Oversized T-shirts"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 2 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Plus-size-Desktop-Trending-Category-Icon-1742209776.jpg"
      alt="Joggers"
      className="w-full h-full object-cover"
    />
    
  </div>

  {/* Card 3 */}
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300">
    <img
      src="https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Bags-Trending-Category-Icon-Women-1741345321.jpg"
      alt="Joggers"
      className="w-full h-full object-cover"
    />
    
  </div>
  <div className="relative w-[250px] h-[350px]  overflow-hidden shadow border border-gray-300 bg-gray-200 flex items-center justify-center">
    <span className="text-3xl font-bold text-gray-800 text-center">View All</span>
    
  </div>
  </div>

  <div>
    <h2 className="text-lg font-semibold text-center mt-15 mb-4">Buy 3 Classic Fit T-shirts at Rs.999</h2>
    <div className="relative mt-4">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full ml-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full mr-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Product List */}
<div
  ref={scrollRef}
  className="flex overflow-x-auto gap-8 px-10 scroll-smooth no-scrollbar"
>
  {products1.map((products1, index) => (
    <div
      key={index}
      className="md:min-w-[287px] flex-shrink-0 border border-gray-300 rounded-md shadow-sm ml-[-20px]"
    >
      <img
        src={products1.img}
        alt={products1.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-2 text-sm">
        <div className="font-bold">{products1.brand}</div>
        <div className="line-clamp-2">{products1.title}</div>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold">₹{products1.price}</span>
          <span className="line-through text-gray-400 text-xs">
            ₹{products1.original}
          </span>
          <span className="text-green-600 text-xs font-semibold">
            {products1.discount}
          </span>
        </div>
        <div className="mt-1 text-yellow-500 text-sm">⭐ {products1.rating}</div>
      </div>
    </div>
  ))}
</div>
    </div>

  </div>

  <div className="max-screen-7xl overflow-hidden py-4 ">
  <h2 className="text-2xl font-semibold text-center mt-15 mb-4">Latest Collections</h2>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        arrows={false}
        showDots
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {items1.map((items1, index) => (
          <div key={index} className="relative rounded overflow-hidden">
            <img
              src={items1.src}
              alt={items1.alt}
              className="w-[600px] h-[600px] object-cover gap-2 "
            />
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">
              <div>{items1.label}</div>
              {items1.offer && <div className="text-2xl">{items1.offer}</div>}
            </div>
          </div>
        ))}
      </Carousel>
      
    </div>

    <div>
    <h2 className="text-lg font-semibold text-center mt-15 mb-4">Bestsellers</h2>
    <div className="relative mt-4">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full ml-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full mr-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Product List */}
<div
  ref={scrollRef}
  className="flex overflow-x-auto gap-8 px-10 scroll-smooth no-scrollbar"
>
  {products2.map((products2, index) => (
    <div
      key={index}
      className="md:min-w-[287px] flex-shrink-0 border border-gray-300 rounded-md shadow-sm ml-[-20px]"
    >
      <img
        src={products2.img}
        alt={products2.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-2 text-sm">
        <div className="font-bold">{products2.brand}</div>
        <div className="line-clamp-2">{products2.title}</div>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold">₹{products2.price}</span>
          <span className="line-through text-gray-400 text-xs">
            ₹{products2.original}
          </span>
          <span className="text-green-600 text-xs font-semibold">
            {products2.discount}
          </span>
        </div>
        <div className="mt-1 text-yellow-500 text-sm">⭐ {products2.rating}</div>
      </div>
    </div>
  ))}
</div>
    </div>

  </div>

  <div className="max-screen-7xl overflow-hidden py-4 ">
  <h2 className="text-2xl font-semibold text-center mt-15 mb-4">Shop by Fandom</h2>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        arrows={false}
        showDots
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {items2.map((items2, index) => (
          <div key={index} className="relative rounded overflow-hidden">
            <img
              src={items2.src}
              alt={items2.alt}
              className="w-[600px] h-[600px] object-cover gap-2 "
            />
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">
              <div>{items2.label}</div>
              {items2.offer && <div className="text-2xl">{items2.offer}</div>}
            </div>
          </div>
        ))}
      </Carousel>
      
    </div>

    <div>
    <h2 className="text-lg font-semibold text-center mt-15 mb-4">DESIGNS OF THE WEEK</h2>
    <div className="relative mt-4">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full ml-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full mr-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Product List */}
<div
  ref={scrollRef}
  className="flex overflow-x-auto gap-8 px-10 scroll-smooth no-scrollbar"
>
  {products3.map((products3, index) => (
    <div
      key={index}
      className="md:min-w-[287px] flex-shrink-0 border border-gray-300 rounded-md shadow-sm ml-[-20px]"
    >
      <img
        src={products3.img}
        alt={products3.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-2 text-sm">
        <div className="font-bold">{products3.brand}</div>
        <div className="line-clamp-2">{products3.title}</div>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold">₹{products3.price}</span>
          <span className="line-through text-gray-400 text-xs">
            ₹{products3.original}
          </span>
          <span className="text-green-600 text-xs font-semibold">
            {products3.discount}
          </span>
        </div>
        <div className="mt-1 text-yellow-500 text-sm">⭐ {products3.rating}</div>
      </div>
    </div>
  ))}
</div>
    </div>

  </div>

  <div>
    <h2 className="text-lg font-semibold text-center mt-15 mb-4">BUY 2 OVERSIZED T-sHIRTS AT RS.999</h2>
    <div className="relative mt-4">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full ml-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full mr-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Product List */}
<div
  ref={scrollRef}
  className="flex overflow-x-auto gap-8 px-10 scroll-smooth no-scrollbar"
>
  {products4.map((products4, index) => (
    <div
      key={index}
      className="md:min-w-[287px] flex-shrink-0 border border-gray-300 rounded-md shadow-sm ml-[-20px]"
    >
      <img
        src={products4.img}
        alt={products3.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-2 text-sm">
        <div className="font-bold">{products4.brand}</div>
        <div className="line-clamp-2">{products4.title}</div>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold">₹{products4.price}</span>
          <span className="line-through text-gray-400 text-xs">
            ₹{products4.original}
          </span>
          <span className="text-green-600 text-xs font-semibold">
            {products4.discount}
          </span>
        </div>
        <div className="mt-1 text-yellow-500 text-sm">⭐ {products4.rating}</div>
      </div>
    </div>
  ))}
</div>
    </div>

  </div>
  

   <div className="max-screen-7xl overflow-hidden py-4 ">
  <h2 className="text-2xl font-semibold text-center mt-25">TOO HOT TO BE MISSED</h2>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        arrows={false}
        showDots
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {items3.map((items3, index) => (
          <div key={index} className="relative rounded overflow-hidden">
            <img
              src={items3.src}
              alt={items3.alt}
              className="w-[600px] h-[600px] object-cover gap-2 "
            />
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">
              <div>{items3.label}</div>
              {items3.offer && <div className="text-2xl">{items3.offer}</div>}
            </div>
          </div>
        ))}
      </Carousel>
      
    </div>
    

    <div>
    <h2 className="text-lg font-semibold text-center mt-15 mb-4">PLUS SIZE STORE: UP TO 70% off</h2>
    <div className="relative mt-4">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full ml-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full mr-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Product List */}
<div
  ref={scrollRef}
  className="flex overflow-x-auto gap-8 px-10 scroll-smooth no-scrollbar"
>
  {products5.map((products5, index) => (
    <div
      key={index}
      className="md:min-w-[287px] flex-shrink-0 border border-gray-300 rounded-md shadow-sm ml-[-20px]"
    >
      <img
        src={products5.img}
        alt={products5.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-2 text-sm">
        <div className="font-bold">{products5.brand}</div>
        <div className="line-clamp-2">{products5.title}</div>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold">₹{products5.price}</span>
          <span className="line-through text-gray-400 text-xs">
            ₹{products5.original}
          </span>
          <span className="text-green-600 text-xs font-semibold">
            {products5.discount}
          </span>
        </div>
        <div className="mt-1 text-yellow-500 text-sm">⭐ {products5.rating}</div>
      </div>
    </div>
  ))}
</div>
    </div>

  </div>

  
  {/* Footer */}

   <footer className="bg-black text-white px-10 py-10 mt-30">
      <div className="grid grid-cols-5 gap-20">
        {/* Column 1: Logo & Info */}
        <div>
          <img
            src="https://images.bewakoof.com/web/ic-desktop-bwkf-tribe-trademark-logo.svg"
            alt="Bewakoof Logo"
            className="h-8 mb-6"
          />
          
          <div>
          <h3 className="text-yellow-400 font-bold mb-4">CUSTOMER SERVICE</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Return Order</li>
            <li>Cancel Order</li>
          </ul>
        </div>
           <div className="space-y-4 text-sm text-gray-300 mt-5">
            <div className="flex items-center gap-3">
              <FaTruck className="text-yellow-400" />
              <span>15 Days Return Policy*</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMoneyBillWave className="text-yellow-400" />
              <span>Cash On Delivery*</span>
            </div>
          </div>
        </div>

       
        

        {/* Column 3: Company */}
        <div>
          <h3 className="text-yellow-400 font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>We are Hiring</li>
          </ul>

          <h3 className="text-yellow-400 font-bold mt-6 mb-2">DOWNLOAD THE APP</h3>
          <div className="flex gap-2 mt-2">
            <a href="#"><SiGooglepay className="text-white text-2xl" /></a>
            <a href="#"><SiAppstore className="text-white text-2xl" /></a>
          </div>
        </div>

        {/* Column 4: Connect */}
        <div>
          <h3 className="text-yellow-400 font-bold mb-4">CONNECT WITH US</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaFacebookF /> 4.7M People like this
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram /> 1M People like this
            </li>
          </ul>
          <div className="flex gap-3 mt-4 text-white text-xl">
            <FaTwitter />
            <FaPinterest />
            <FaSnapchatGhost />
            <FaApplePay />
          </div>

          <h3 className="text-yellow-400 font-bold mt-6 mb-2">100% SECURE PAYMENT</h3>
          <div className="flex gap-2 mt-2 text-white text-xl">
            <SiGooglepay/>
  <SiPaytm />
  <SiVisa />
  <SiMastercard />
          </div>
        </div>

        {/* Column 5: Newsletter */}
         <div>
          <h3 className="text-yellow-400 font-bold mb-4 pl-20">KEEP UP TO DATE</h3>
          <div className="flex pl-20">
            <input
              type="email"
              placeholder="Enter Email Id:"
              className="bg-black text-white border border-gray-500 px-2 py-2 focus:outline-none w-[200px]"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 font-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
       
      <div className="text-white px-8 py-10 border-t border-gray-1000 mt-10">
        {/* Men's Clothing */}
        <div className="flex flex-wrap justify-between gap-6 ml-[-25px]">
        {/* Column 1 */}
        <div className="min-w-[200px]">
          <h2 className="text-lg font-bold mb-4">Men's Clothing</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Top Wear</li>
            <li>Men's New Arrivals</li>
            <li>Men's T-Shirts</li>
            <li>Men's Hoodies & Sweatshirts</li>
            <li>Oversized T-Shirts for Men</li>
            <li>Men's Long Sleeve T-shirts</li>
            <li>Men's White T-shirts</li>
            <li>Men's Crew Neck T-shirts</li>
            <li>Men's Half Sleeve T-Shirts</li>
            <li>Men's Printed T-shirts</li>
            <li>Men's Plain T-shirts</li>
            <li>Men's Plus Size T-shirts</li>
            <li>Men's Vests</li>
            <li>Men's Polo T-Shirts</li>
            <li>Men's tank Tops</li>
            <li>Men's Sweaters</li>
            <li>Men's Jackets</li>
            <li>Men's Combo T-Shirts</li>
            <li>Men's Shirts</li>
            <li>Men's Nightwear</li>
            <li>Men's Innerwear</li>
            <li>Men's Plus Size Store</li>
            <li className="mt-5">Bottom Wear</li>
            <li>Men's Pajamas</li>
            <li>Men's Boxer Shorts</li>
            <li>Men's Shorts</li>
            <li>Men's Jogger</li>
            <li>Men's Cargo Joggers</li>
            <li>Men's Track Pants</li>
            <li>Men's Jeans</li>
            <li>Men's Sweatpants</li>
            <li>Men's Trousers & Pants</li>
            <h2 className="text-lg font-bold mb-4 mt-4">Featured</h2>
            <li>Men's Flip Flops</li>
            <li>Men's Sliders</li>
            <li>Marvel T-Shirts</li>
            <li>Disney T-Shirts</li>
            <li>Avengers T-Shirts</li>
            <li>Star Wars T-Shirts</li>
            <li>Batman T-Shirts</li>
            <li>Superman T-Shirts</li>
            <li>Joker T-Shirts</li>
          </ul>
        </div>

        {/* Women's Clothing */}
        <div className="min-w-[200px]">
          <h2 className="text-lg font-bold mb-4">Women's Clothing</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Women's Top Wear</li>
            <li>Women's New Arrivals</li>
            <li>Women's T-Shirts</li>
            <li>Women's Fashion Tops</li>
            <li>Women's Tank Tops</li>
            <li>Women's Hoodies & Sweatshirts</li>
            <li>Women's Dresses</li>
            <li>Women's 3/4 Sleeve T-Shirts</li>
            <li>Women's Kurtis</li>
            <li>Women's Combo T-Shirts</li>
            <li>Women's Nightwear</li>
            <li>Women's Plus Size Store</li>
            <li className="mt-4">Women's Bottom Wear</li>
            <li>Women's Co-ord Sets</li>
            <li>Women's Pajamas</li>
            <li>Women's Boxer Shorts</li>
            <li>Women's Jeans</li>
            <li>Women's Wide Leg Jeans</li>
            <li>Women's Jeggings</li>
            <li>women's Joggers</li>
            <li>Women's Trousers & Pants</li>
            <li>Women's Cargo Pants</li>
            <li>Women's Track Pants</li>
            <li>Women's Track Shorts</li>
            <li className="mt-4">BAGS</li>
            <li>Laptop Bags</li>
            <li>Small Backpacks</li>
            <h2 className="text-lg font-bold mb-4 mt-4">Featured</h2>
            <li>Women's Slides</li>
            <li>Women's Flip Flops</li>
          </ul>
        </div>

        {/* Mobile Covers */}
         <div className="min-w-[200px]">
       
          <h2 className="text-lg font-bold mb-4">Mobile Covers</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Apple</li>
            <li>iPhone 14 Cases & Covers</li>
            <li>iPhone 13 Back Covers</li>
            <li>iPhone 12 back covers cases</li>
            <li>iPhone 13 Pro Back Covers</li>
            <li>Realme</li>
            <li>Samsung</li>
            <li>Xiaomi</li>
            <li>Oneplus</li>
            <li>Vivo</li>
            <li>Oppo</li>
            <li>Poco</li>
          </ul>
        </div>
      
      {/* Column 4 */}
        <div className="min-w-[200px] text-left">
          <ul className="space-y-6 text-[#00ffff] text-sm font-semibold">
            <li>FANBOOK</li>
            <li>OFFERS</li>
            <li>SITEMAP</li>
          </ul>
        </div>
      </div>
    </div>
      </footer>


    </>
  );
};

export default HomePage;
