import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	width: 48rem;
	height: 8rem;
	border-radius: 4rem;
	font-family: 'Knewave', system-ui;
	font-size: 4rem;
	color: #f25c54;
	cursor: pointer;
	background-color: #edf2f4;
	animation: pulse 2s infinite ease-in-out;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: #ec8782;
		color: #edf2f4;
		transform: translateY(-5%);
		animation: step-end;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(242, 92, 84, 0.6);
		}
		50% {
			box-shadow: 0 0 0 1.5rem rgba(242, 92, 84, 0.1);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(242, 92, 84, 0.1);
		}
	}
`;

export default function StartPage() {
	const naviagte = useNavigate();
	const onClick = () => {
		naviagte('/match');
	};

	return (
		<Wrapper>
			<Button onClick={onClick}>Click Here!</Button>
		</Wrapper>
	);
}
