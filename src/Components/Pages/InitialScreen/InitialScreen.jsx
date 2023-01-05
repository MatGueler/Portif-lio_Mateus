//  # Components

import { Container } from '../../Container/ContainerComponent';

import {
	Arrow,
	Carousel,
	OpenProject,
	Portifolio,
	Project,
	Skill,
	Skills,
	Slider,
	Title,
} from './InitialScreenStyle';

//  # Icons
import { AiOutlineZoomIn } from 'react-icons/ai';
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';

import { useRef, useState } from 'react';
import HeaderComponent from '../../Header/HeaderComponent';

//  # Data
import { projects, skills } from '../../../Services/Data';
import ContactPage from '../../Dashboards/ContactPage/ContactPage';
import ApresentationPage from '../../Dashboards/ApresentationPage/ApresentationPage';
import AboutMeComponent from '../../Dashboards/AboutMeComponent/AboutMeComponent';
import ExperienceComponent from '../../Dashboards/ExperiencePage/ExperienceComponent';

//  # Libs

function InitialScreen() {
	const [current, setCurrent] = useState(1);
	const [openProject, setOpenProject] = useState(false);
	const [headerVisible, setHeaderVisible] = useState(false);

	const carousel = useRef(null);

	const topRef = useRef(null);
	const aboutRef = useRef(null);
	const experienceRef = useRef(null);
	const portifolioRef = useRef(null);
	const skillsRef = useRef(null);
	const contactRef = useRef(null);

	function Scrolar() {
		const scroolPage = window.scrollY;

		if (scroolPage > 400) {
			setHeaderVisible(true);
		} else {
			setHeaderVisible(false);
		}
	}

	function PutProjects({ data }) {
		const [isOverProject, setIsOverProject] = useState(false);
		return (
			<Project
				onClick={() => setOpenProject(true)}
				onMouseOver={() => setIsOverProject(true)}
				onMouseLeave={() => setIsOverProject(false)}
				image={data.image}>
				<h1>{data.title}</h1>
				<div className='project-box'>
					{isOverProject ? <AiOutlineZoomIn /> : null}
				</div>
			</Project>
		);
	}

	document.addEventListener('scroll', Scrolar);

	return (
		<>
			{headerVisible ? (
				<HeaderComponent
					topRef={topRef}
					aboutRef={aboutRef}
					experienceRef={experienceRef}
					portifolioRef={portifolioRef}
					skillsRef={skillsRef}
					contactRef={contactRef}
				/>
			) : (
				''
			)}

			<ApresentationPage
				topRef={topRef}
				aboutRef={aboutRef}
				experienceRef={experienceRef}
				portifolioRef={portifolioRef}
				skillsRef={skillsRef}
				contactRef={contactRef}
			/>

			<AboutMeComponent aboutRef={aboutRef} />

			<Container
				id='3'
				theme='clean'
				ref={portifolioRef}
				onClick={() => {
					if (openProject) setOpenProject(false);
				}}>
				<Title>
					<h1>Meus projetos</h1>
				</Title>

				<Portifolio>
					{openProject ? (
						<OpenProject image='https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg'>
							<div className='project-box'>
								<div className='description'>
									<h1>Título</h1>
									<p>descrição</p>
									<div className='action-buttons'>
										<button>Github</button>
										<button>Site</button>
									</div>
								</div>
							</div>
						</OpenProject>
					) : null}

					{projects.map((item, index) => (
						<PutProjects key={index} data={item} />
					))}
				</Portifolio>
			</Container>

			{/* Próximo a componentizar */}
			<Container id='4' theme='dark' ref={skillsRef}>
				<Title>
					<h1>Habilidades</h1>
				</Title>

				<Skills>
					<Slider>
						<Arrow
							onClick={(e) => {
								carousel.current.scrollLeft -= carousel.current.offsetWidth;
								if (current !== 1) {
									setCurrent((prev) => {
										return prev - 1;
									});
								}
							}}>
							<BsFillArrowLeftCircleFill className='previous' />
						</Arrow>

						<div className='skill-box' ref={carousel}>
							{skills.map((item, index) => {
								return (
									<Skill key={index}>
										<img src={item.image} alt='js' />
										<h2>{item.name}</h2>
									</Skill>
								);
							})}
						</div>

						<Arrow
							onClick={() => {
								carousel.current.scrollLeft += carousel.current.offsetWidth;
								if (current < skills.length) {
									setCurrent((prev) => {
										return prev + 1;
									});
								} else {
									setCurrent(1);
									carousel.current.scrollLeft = 0;
								}
							}}>
							<BsFillArrowRightCircleFill className='next' />
						</Arrow>
					</Slider>

					<Carousel>
						{skills.map((item, index) => {
							if (index + 1 === current) {
								return <p key={index} className='current'></p>;
							} else {
								return <p key={index}></p>;
							}
						})}
					</Carousel>
				</Skills>
			</Container>

			<ExperienceComponent experienceRef={experienceRef} />

			<ContactPage contactRef={contactRef} />
		</>
	);
}

export default InitialScreen;
