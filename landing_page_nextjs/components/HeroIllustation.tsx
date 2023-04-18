import NextImage from 'next/image';
import heroImg from '../public/hero.svg';

export default function HeroIllustration() {
  return (
  <NextImage src={heroImg}
  alt="hero" 
  layout="fill" 
  objectFit="contain"/>
  )
}