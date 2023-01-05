import { ContactContainer } from '../../Container/ContainerComponent';
import { Title } from '../../Pages/InitialScreen/InitialScreenStyle';
import { Timeline } from './ExperienceStyle';

export default function ExperienceComponent({ experienceRef }) {
	return (
		<ContactContainer
			id='5'
			ref={experienceRef}
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				paddingTop: '20px',
				paddingBottom: '10px',
			}}>
			<Title>
				<h1>Meus projetos</h1>
			</Title>
			<Timeline>
				<div className='container left'>
					<div className='content'>
						<h1>Técnico em eletrotécnica</h1>
						<h2>2015-2016</h2>
						<p>Lorem ipsum..</p>
					</div>
				</div>
				<div className='container right'>
					<div className='content'>
						<h1>Física - Bacharelado</h1>
						<h2>2017-2022</h2>
						<p>Lorem ipsum..</p>
					</div>
				</div>
				<div className='container left'>
					<div className='content'>
						<h1>Desenvolvedor Web Full Stack</h1>
						<h2>2022</h2>
						<p>Lorem ipsum..</p>
					</div>
				</div>
			</Timeline>
		</ContactContainer>
	);
}
