import { Image } from '../../../types/image';

export interface HeroProps {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: Image;
}

export function Hero({ heroTitle, heroSubtitle, heroImage }: HeroProps) {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-4xl mb-2">{heroTitle}</h1>
      <p className="text-xl mb-4">{heroSubtitle}</p>
      <img src={heroImage?.fields?.file?.url} alt={heroTitle} />
    </div>
  );
};
