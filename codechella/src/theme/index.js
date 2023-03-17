import {IoLogoTwitch, IoLogoWhatsapp, IoLogoInstagram, IoLogoTwitter} from 'react-icons/io';
import { colors } from "@/styles/colors";

export const borealTheme = () => ({
  header: colors.boreal.primary100,
  text: colors.white,
  textHover: colors.boreal.tertiary100,
  highlightColor: colors.boreal.secondary100,
  pageBackground: colors.boreal.gradient,
  pageBackgroundSecondary: colors.boreal.tertiary200,
  button: colors.boreal.primary100,
  buttonHover: colors.boreal.tertiary400,
  secondaryButton: colors.boreal.tertiary300,
  secondaryButtonHover: colors.boreal.tertiary200,
  footer: colors.boreal.primary100,
  images: {
    banner: '/banners/boreal-home-banner.png',
    cta: '/home/boreal-home-top.png',
    lineup:'/home/boreal-home-bottom.png',
  },
  socialIcons: {
    whatsapp: <IoLogoWhatsapp color={colors.white}/>,
    twitch: <IoLogoTwitch color={colors.white}/>,
    instagram: <IoLogoInstagram color={colors.white}/>,
    twitter: <IoLogoTwitter color={colors.white}/>,
  },
  logo: '/logo-white.png',
  logoIcon:'/favicon-white.png'
});

export const summerTheme = () => ({
  header: colors.summer.primary100,
  text: colors.gray,
  textHover: colors.summer.tertiary100,
  highlightColor: colors.summer.secondary100,
  pageBackground: colors.summer.gradient,
  pageBackgroundSecondary: colors.summer.tertiary200,
  button: colors.summer.primary100,
  buttonHover: colors.summer.tertiary400,
  secondaryButton: colors.summer.tertiary300,
  secondaryButtonHover: colors.summer.tertiary200,
  footer: colors.summer.tertiary300,
  images: {
    banner: '/banners/summer-home-banner.png',
    cta: '/home/summer-home-top.png',
    lineup:'/home/summer-home-bottom.png',
  },
  socialIcons: {
    whatsapp: <IoLogoWhatsapp color={colors.gray}/>,
    twitch: <IoLogoTwitch color={colors.gray}/>,
    instagram: <IoLogoInstagram color={colors.gray}/>,
    twitter: <IoLogoTwitter color={colors.gray}/>,
  },
  logo: '/logo-gray.png',
  logoIcon:'/favicon.png'
});