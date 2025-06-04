"use client";

import {useRef, useState, useEffect} from "react";
import React from "react";

import {motion, useScroll, useTransform, MotionValue} from "framer-motion";

// Types
interface iIPicture {
	src: string;
	scale: MotionValue<number>;
}

interface iImmersiveScrollGalleryProps {
	images?: iIPicture[]; // Optional custom images array
	className?: string; // Optional className for container customization
	language?: 'en' | 'tr'; // Language support
}

// Constants - Foundation relevant images - Updated with diverse children in hopeful moments
const DEFAULT_IMAGES = [
	{
		// Kaliteli çocuk fotoğrafı - Pexels'den
		src: "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=2940", // High quality child photo from Pexels
		scale: null,
	},
	{
		// Güzel çocuk portresi
		src: "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=2940", // Beautiful child portrait
		scale: null,
	},
	{
		// Mutlu çocuklar birlikte
		src: "https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=2940", // Happy children together
		scale: null,
	},
	{
		// Doğal çocuk anı
		src: "https://images.pexels.com/photos/1796230/pexels-photo-1796230.jpeg?auto=compress&cs=tinysrgb&w=2940", // Natural child moment
		scale: null,
	},
	{
		// Gülümseyen çocuk
		src: "https://images.pexels.com/photos/1129116/pexels-photo-1129116.jpeg?auto=compress&cs=tinysrgb&w=2940", // Smiling child
		scale: null,
	},
	{
		// Çocuk dostluğu
		src: "https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&w=2940", // Child friendship
		scale: null,
	},
	{
		// Sevimli çocuk anı
		src: "https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg?auto=compress&cs=tinysrgb&w=2940", // Lovely child moment
		scale: null,
	},
];

const IMAGE_STYLES = [
	"w-[25vw] h-[25vh]",
	"w-[35vw] h-[30vh] -top-[30vh] left-[5vw]",
	"w-[20vw] h-[55vh] -top-[15vh] -left-[25vw]",
	"w-[25vw] h-[25vh] left-[27.5vw]",
	"w-[20vw] h-[30vh] top-[30vh] left-[5vw]",
	"w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]",
	"w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]",
];

/**
 * ImmersiveScrollGallery Component
 *
 * A scroll-based image zoom effect component that creates a parallax-like experience.
 * Images scale up as the user scrolls, creating an immersive visual effect.
 *
 * @param {ImmersiveScrollGalleryProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
const ImmersiveScrollGallery: React.FC<iImmersiveScrollGalleryProps> = ({
	images = DEFAULT_IMAGES,
	className = "",
	language = 'en',
}) => {
	// Content based on language
	const content = {
		tr: {
			title: 'Ortak Noktayı Görüyor musun?',
			description: 'Her birinin gözlerinde aynı parıltı var. Aynı masumiyet, aynı mutluluk, aynı saf sevinç... Hepsinin yüzünde o güzel gülümseme. Renkleri, dilleri, kültürleri farklı ama kalpleri aynı dilde atıyor. Her biri güzel bir hayatı hak ediyor. Her biri sevgiyi, güvenliği, sağlıklı olmayı, eğitim almayı, hayallerini gerçekleştirmeyi hak ediyor. Çünkü onlar bizlerin çocukları. Hepimizin çocukları.',
			quote: '"Bir çocuğun gözlerindeki parıltının sönmesi, hepimizin kaybıdır. Bu yüzden onlar için çalışıyoruz."',
			altTexts: [
				'Eğitim hayal eden gerçek çocuklar',
				'Güzel bir gelecek isteyen çocuklar', 
				'Temiz su içmek isteyen çocuklar',
				'Teknoloji ile büyümek isteyen çocuklar',
				'Sağlıklı olmak isteyen çocuklar',
				'Mutlu olmayı hak eden çocuklar',
				'Gelecekten korkusuza yaşamak isteyen çocuklar'
			]
		},
		en: {
			title: 'Do You See the Common Point?',
			description: 'Each of them has the same sparkle in their eyes. The same innocence, the same happiness, the same pure joy... All of them have that beautiful smile on their faces. Their colors, languages, cultures are different, but their hearts beat in the same language. Each one deserves a beautiful life. Each one deserves love, security, health, education, and the chance to make their dreams come true. Because they are our children. All of our children.',
			quote: '"When a child\'s eyes lose their sparkle, we all lose. That\'s why we work for them."',
			altTexts: [
				'Real children dreaming of education',
				'Children wanting a beautiful future',
				'Children wanting to drink clean water',
				'Children wanting to grow up with technology',
				'Children wanting to be healthy',
				'Children who deserve to be happy',
				'Children wanting to live fearlessly about the future'
			]
		}
	};

	const currentContent = content[language];

	// Refs
	const container = useRef<HTMLDivElement | null>(null);

	// Scroll and transform hooks
	const {scrollYProgress} = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	// Transform values
	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
	const opacityImage = useTransform(scrollYProgress, [0, 1], [1, 0]);
	const opacitySection2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

	// Assign scales to images
	const pictures = images.map((img, index) => {
		return {
			...img,
			scale: [scale4, scale5, scale6, scale5, scale6, scale8, scale9][
				index % 7
			],
		};
	});

	return (
		<div ref={container} className={`relative h-[150vh] bg-black ${className}`}>
			<div className="sticky top-0 h-[100vh] overflow-hidden bg-black">
				{/* Zooming Images */}
				{pictures.map(({src, scale}, index) => {
					return (
						<motion.div
							key={index}
							style={{scale, opacity: opacityImage}}
							className="absolute flex items-center justify-center w-full h-full top-0"
						>
							<div className={`relative ${IMAGE_STYLES[index]}`}>
								<img
									src={src}
									alt={currentContent.altTexts[index] || 'İnsanlığın çözülmesi gereken problemi'}
									className="object-cover w-full h-full rounded-2xl"
								/>
							</div>
						</motion.div>
					);
				})}

				{/* Content Section */}
				<motion.div
					style={{
						opacity: opacitySection2,
						scale: useTransform(scrollYProgress, [0.3, 0.6], [0.9, 1]),
					}}
					className="w-full h-full flex items-center justify-center max-w-5xl mx-auto p-6 relative"
				>
					<div className="text-center bg-black/20 backdrop-blur-md rounded-2xl p-12 shadow-xl border border-white/10 w-full">
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-12 font-[family-name:var(--font-inter)]">
							{currentContent.title}
						</h2>
						<p className="text-lg md:text-xl text-white leading-relaxed font-light max-w-3xl mx-auto mb-8">
							{currentContent.description}
						</p>
						<p className="text-base text-white/80 italic font-medium">
							{currentContent.quote}
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ImmersiveScrollGallery;
