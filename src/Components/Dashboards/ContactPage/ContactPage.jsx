import { ContactContainer } from '../../Container/ContainerComponent';
import { ContactBox, TextContact } from './ContactStyle';

export default function ContactPage({ contactRef }) {
	return (
		<ContactContainer id='6' theme='dark' ref={contactRef}>
			<TextContact>
				<h3>Ficou alguma dúvida? Mande uma mensagem!</h3>
			</TextContact>
			<ContactBox>
				<form action=''>
					<div className='sender-box'>
						<input type='text' placeholder='Nome' />
						<input type='text' placeholder='email' />
						<input type='text' placeholder='Assunto' />
						<button>Enviar</button>
					</div>
					<textarea></textarea>
				</form>
			</ContactBox>
		</ContactContainer>
	);
}
