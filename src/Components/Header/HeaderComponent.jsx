import styled from 'styled-components';

function HeaderComponent({
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
		<Header>
			<h3 onClick={() => ScrollSection(topRef)}>Topo</h3>
			<h3 onClick={() => ScrollSection(aboutRef)}>Sobre</h3>
			<h3 onClick={() => ScrollSection(portifolioRef)}>Portifólio</h3>
			<h3 onClick={() => ScrollSection(skillsRef)}>Habilidades</h3>
			<h3 onClick={() => ScrollSection(experienceRef)}>Formação</h3>
			<h3 onClick={() => ScrollSection(contactRef)}>Contato</h3>
		</Header>
	);
}
export default HeaderComponent;

export const Header = styled.div`
	width: 100%;
	height: 50px;

	display: flex;
	align-items: center;
	justify-content: space-around;

	position: fixed;
	top: 0;
	left: 0;

	z-index: 2;

	background-color: rgba(34, 34, 34, 0.8);

	animation-name: example;
	animation-duration: 0.2s;

	h3 {
		height: 30px;

		border: 2px solid transparent;

		font-size: 25px;
		color: #ffffff;

		cursor: pointer;
	}

	h3:hover {
		border-bottom-color: #ffffff;
	}

	@keyframes example {
		from {
			top: -50%;
		}
		to {
			top: 0;
		}
	}
`;
