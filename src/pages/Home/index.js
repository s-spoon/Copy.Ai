import React from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import ActionButton from "./ActionButton";
import { KeyboardBackspace } from "@material-ui/icons";
import OutlinedButton from "./OutlinedButton";
import BorderImage from "./BorderImage";
import VerticalIntroCard from "./VerticalIntroCard";
import VideoSection from "./VideoSection";
import HorizontalIntroCard from "./HorizontalIntroCard";
import FooterSection from "./FooterSection";

const verticalIntroList = [
	{
		title: " كتابة مقالات طويلة",
		des: "قد تكون كتابة المقالات الطويلة أمرًا شاقًا للغاية، لكن مع ذكي يمكنك الكتابة بشكل أسرع وأسهل. بدءًا من توليد الأفكار حول المحتوى الخاص بك إلى كتابة المقدمة والمحتويات المطلوبة وليس انتهاءًا بالخاتمة بل إن هنالك الكثير ينتظرك مع ذكي.",
		act: "اكتب مقالة طويلة",
	},
	{
		title: "كتابة محتوى وسائل التواصل الاجتماعي",
		des: "إذا كنت تتطلع بأن تكون شخصًا بارزًا بمحتواك على وسائل التواصل الاجتماعي، فإن ذكي شريكك المثالي في الكتابة لإنشاء محتوى جذاب ورائع. كل ما عليك فعله الاستعداد ببعض الأفكار والأسلوب الذي تريد اتباعه وبعدها أخبر ذكي وقم بالاطلاع على النتائج.",
		act: "اكتب محتوى لوسائل التواصل الاجتماعي",
	},
	{
		title: "كتابة وصف المنتج",
		des: "إن وصف المنتج من أكثر الأشياء التي يتكاسل الكثيرون في الكتابة عنها فيقومون بنسخ المحتويات الموجودة على المواقع الأخرى ويغفلون عن أهميتها. ولكن مع ذكي يمكنك إنشاء أوصافًا مقنعة لمنتجاتك، لاستخدامها على المواقع ووسائل التواصل الاجتماعي ورسائل البريد الإلكتروني.",
		act: "اكتب وصف لمنتجك",
	},
	{
		title: "كتابة نسخة إعلانية",
		des: "باعتبار ذكي أداة كتابة مدعومة بالذكاء الاصطناعي فقد تم تدريبه على كتابة نسخة إعلانية مقنعة وجذابة لجمهورك المستهدف في وقت قياسي. حيث يمكنه كتابة نسخة أعلانية للفيس بوك وجوجل وتويتر والكثير.",
		act: "اكتب نسخة إعلانية",
	},
];

const HorizontalIntroList = [
	{
		title: "صوت علامتك التجارية",
		des: "إن أسلوبك في الكتابة هو ما يجعلك مميزًا وفريدًا عن منافسيك. فإذا كنت تتبع اسلوبًا أو طريقة محددة في الكتابة فبدون أدنى شك أنك ترغب بالكتابة بنفس ذلك الأسلوب الذي تقوم به بصياغة محتواك. باستخدام ذكي يمكنك الأن بالكتابة بنفس أسلوب علامتك التجارية بدون فقدان هويتك.",
		isImgLeft: true,
		icon: 'speaker-colored.png',
		img: "",
	},
	{
		title: "القوالب",
		des: "يمكنك الوصول إلى الكثير من القوالب التي تسهل عليك تحديد أفكارك في الكتابة. كل ما عليك فعله هو اختيار القالب الذي ترغب بالكتابة عنه وسيقوم ذكي بتوجيهك لتحديد أفكارك وتوجيهه للكتابة بشكل مناسب لضمان حصولك على أفضل النتائج.",
		isImgLeft: false,
		icon: 'laptop-colored.png',
		img: "",
	},
	{
		title: "المشاريع",
		des: "يمكنك الوصول إلى آخر مشاريعك بضغطة زر واحدة من خلال الشاشة البديهة لحفظ المشاريع وحسب التواريخ التي قمت فيها بحفظ أعمالك.",
		isImgLeft: true,
		icon: 'chart-colored.png',
		img: "",
	},
	{
		title: "محرر النصوص",
		des: "يمنحك موقعنا ميزة نقل النصوص من دردشة ذكي إلى محرر النصوص بضغطة زر واحدة بدون أن تضطر للخروج من الموقع والذهاب إلى محرر نص خارجي.",
		isImgLeft: false,
		icon: 'pen-colored.png',
		img: "",
	},
];

function Home() {
	return (
		<div className="bg-home w-screen">
			<div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-8 lg:py-12">
				<div className="pb-10 md:pb-0 md:min-h-screen xl:min-h-full xl:pb-32">
					<HeaderSection />
					<HeroSection />
				</div>
				<div className="w-full">
					<VideoSection />
					<div className="mt-32 mb-2 md:flex items-center justify-between">
						<div className="md:w-6/12">
							<BorderImage img={"./assets/imgs/test.jpg"} />
						</div>
						<div className="md:w-5/12 text-right mt-6 md:mt-0">
							<p className="text-2xl md:text-3xl lg:text-[40px] text-white">
								محادثة ذكي
							</p>
							<p className="text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 lg:mt-[30px] text-white">
								هي محادثة تم تصميمها بشكل فعال وجذاب لتساعدك على
								انجاز أعمالك بشكل أسهل وأسرع وكأنك تتحدث إلى
								بشر. كل ما عليك فعله هو كتابة الأمر الذي تريده
								من ذكي وسيأتيك الرد في ثواني.
							</p>
							<div className="mt-4 md:mt-6 lg:mt-[30px] flex items-center justify-end">
								<OutlinedButton text="المزيد" />
								<div className="px-2 lg:px-3" />
								<ActionButton
									text={
										<div>
											<KeyboardBackspace />
											<span>قم بتجربة ذكي مجانا</span>
										</div>
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="rounded-[48px] bg-gradient-radial -mt-24 md:-mt-28 lg:-mt-32 pt-28 md:pt-32 lg:pt-44">
				<div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-8 lg:py-12">
					{verticalIntroList.map((item, index) => {
						return (
							<div
								key={index}
								className="mb-20 md:mb-24 lg:mb-28"
							>
								<VerticalIntroCard
									title={item?.title}
									des={item?.des}
									act={item?.act}
								/>
							</div>
						);
					})}

					<div className="mb-16 lg:mb-20">
						<p className="text-3xl md:text-4xl lg:text-[40px] text-center text-white">
							هناك الكثير من المميزات تنتظرك مع ذكي
						</p>
					</div>

					{HorizontalIntroList.map((item, index) => {
						return (
							<div
								key={index}
								className="mb-24 lg:mb-28"
							>
								<HorizontalIntroCard
									title={item?.title}
									des={item?.des}
									icon ={item?.icon}
									isImgLeft={item?.isImgLeft}
								/>
							</div>
						);
					})}

					<div className="bg-no-repeat bg-cover bg-free-service flex items-center justify-center rounded-[32px] h-80 mb-16 lg:mb-20">
						<div className="w-fit-content text-center text-white">
							<p className="text-3xl md:text-4xl lg:text-[40px]">
								ابدأ باستخدام ذكي مجانا
							</p>
							<p className="pt-4 text-xl lg:text-2xl">
								ضع لمسات ذكي الرائعة على أعمالك
							</p>
							<div className="pt-4 flex justify-center">
								<ActionButton
									text={
										<div>
											<KeyboardBackspace />
											<span>إنشاء حساب مجاني</span>
										</div>
									}
								/>
							</div>
						</div>
					</div>

					<FooterSection />
				</div>
			</div>
		</div>
	);
}

export default Home;
