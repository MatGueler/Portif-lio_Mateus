import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi';
import { Container } from '../../Container/ContainerComponent';
import { Painel } from '../../Pages/InitialScreen/InitialScreenStyle';
import {
	ImageProfile,
	ProfileIcons,
	Summary,
	TextProfile,
} from './ApresentationStyle';

export default function ApresentationPage({
	topRef,
	aboutRef,
	experienceRef,
	portifolioRef,
	skillsRef,
	contactRef,
}) {
	const ScrollSection = (elemetRef) => {
		window.scrollTo({
			top: elemetRef.current.offsetTop,
			behavior: 'smooth',
		});
	};

	return (
		<Container id='1' theme='clean' ref={topRef}>
			<Painel height='50%' theme='dark'>
				<ImageProfile>
					<img
						src='https://media-exp1.licdn.com/dms/image/C5603AQES3HRO7mPlpQ/profile-displayphoto-shrink_800_800/0/1668010094226?e=1675900800&v=beta&t=6s7tsa5LsppXosQTWMiH7pbsadFsHo04diSkdpm-K78'
						alt='ImageProfle'
						draggable={false}
					/>
					<ProfileIcons>
						<a
							href='https://www.linkedin.com/in/mateusgueler/'
							target='_blank'
							rel='noopener noreferrer'>
							<BsLinkedin />
						</a>
						<a
							href='https://github.com/MatGueler'
							target='_blank'
							rel='noopener noreferrer'>
							<BsGithub />
						</a>
						<a
							href='#Skills'
							// target="_blank"
							// rel="noopener noreferrer"
						>
							<HiOutlineMail />
						</a>
					</ProfileIcons>
				</ImageProfile>
				<TextProfile>
					<h1>Mateus Gueler Machado</h1>
					<h1>
						{'<'} Desenvolvedor Web Full Stack {'/>'}
					</h1>
					<ProfileIcons>
						<div className='icon'>
							<HiLocationMarker />
						</div>
						<p>Cariacica, ES, Brasil</p>
					</ProfileIcons>
				</TextProfile>
			</Painel>
			<Summary>
				<button onClick={() => ScrollSection(aboutRef)}>Sobre mim</button>

				<button onClick={() => ScrollSection(portifolioRef)}>Portifólio</button>

				<button onClick={() => ScrollSection(skillsRef)}>Habilidades</button>

				<button onClick={() => ScrollSection(experienceRef)}>Formação</button>

				<button onClick={() => ScrollSection(contactRef)}>Contato</button>
			</Summary>
		</Container>
	);
}
