import AppStore from "../assets/icons/Apple.svg";
import Google from "../assets/icons/Google.svg";
import Movies from "../assets/icons/video-player.svg";
import TvShows from "../assets/icons/show.svg";
import Home from "../assets/icons/home.svg";
import SearchIcon from "../assets/icons/Search.svg";

export const FooterExternalLinks = [
  {
    title: "https://Google Play",
    url: "play.google.com",
    id: 0,
    icon: Google,
  },
  {
    title: "App Store",
    id: 1,
    url: "https://store.apple.com",
    icon: AppStore,
  },
];
export const AppbarDatas = [
  {
    id: 0,
    title: "Movies",
    path: "/movies",
  },
  {
    id: 1,
    title: "TV shows",
    path: "/tv-show",
  },
  {
    id: 2,
    title: "TV",
    path: "/tv",
  },
  {
    id: 3,
    title: "Cartoons",
    path: "/cartoons",
  },
  {
    id: 4,
    title: "Collection",
    path: "/collection",
  },
];
export const BannerConfig = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const VideosConfig = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};
export const MoviesConfig = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const SimilarConfig = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
export const ImagesConfig = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
export const ShowsData = ["About", "Comments", "Images", "Videos"];
export const ProfileData = [
  {
    title: "Account",
    url: "/profile",
  },
  {
    title: "Wishlist",
    url: "/profile/wishlist",
  },
  {
    title: "Settings",
    url: "/profile/settings",
  },
  {
    title: "Friends",
    url: "/profile/friends",
  },
];
export const filterHTMLsemanticDatas = [
  {
    label: "Genre",
    id: "genre",
    defaultValue: "Select Genre",
    options: ["Action", "Melodrama", "Fantacy", "Triller"],
  },
  {
    label: "Country",
    id: "country",
    defaultValue: "Select Country",
    options: ["Uzbekistan", "Russia", "USA", "England"],
  },
  {
    label: "Year",
    defaultValue: "Select Year",
    id: "year",
    options: [],
  },
  {
    label: "Quality",
    defaultValue: "Select Quality",
    id: "country",
    options: ["4K", "UHD", "HD", "SD"],
  },
];
export const MobileAppbarDatas = [
  {
    link: "/",
    title: "Home",
    icon: Home,
  },
  {
    link: "/movies",
    title: "Movies",
    icon: Movies,
  },
  {
    link: "/tv-show",
    title: "Tv Shows",
    icon: TvShows,
  },
  {
    link: "/search",
    title: "Searcg",
    icon: SearchIcon,
  },
];
