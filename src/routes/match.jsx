import styled from 'styled-components';
import Option from '../components/Option';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
	background-color: #edf2f4;
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const Top = styled.div`
	width: 100vw;
	height: 10vh;
	background-color: #2b2d42;
	font-size: 6vh;
	color: #f25c54;
	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;
	&.choosen {
		color: #84dcc6;
	}
`;

const HomeButton = styled.button`
	position: absolute;
	right: 5vh;
	top: calc(50% - 25px);
	width: 50px;
	height: 50px;
	border-radius: 25px;

	svg {
		fill: #2b2d42;
	}
`;

const Bottom = styled.div`
	width: 100%;
	background-color: #edf2f4;
	padding: 3vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const OptionContainer = styled.div`
	width: 98%;
	padding: 2vh;
	border-radius: 1.5rem;
	background-color: #8d99ae;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1vw;
	transition: all 0.5s ease-in-out;
`;

const MidText = styled.span`
	font-size: 7vh;
`;

export default function MatchPage() {
	const [clicked, setClicked] = useState(false);
	const [clickedOption, setClickedOption] = useState('');

	const onClick = (num) => {
		setClicked(true);
		setClickedOption(num);
		console.log(clickedOption);
	};

	let showOption = (
		<>
			<Option
				name="1번"
				clicked={clickedOption === 1}
				onClick={() => onClick(1)}
			/>
			<MidText>VS</MidText>
			<Option
				name="2번"
				clicked={clickedOption === 2}
				onClick={() => onClick(2)}
			/>
		</>
	);

	if (clickedOption === 1) {
		showOption = (
			<Option
				name="1번"
				clicked={clickedOption === 1}
				onClick={() => onClick(1)}
			/>
		);
	}
	if (clickedOption === 2) {
		showOption = (
			<Option
				name="2번"
				clicked={clickedOption === 2}
				onClick={() => onClick(2)}
			/>
		);
	}

	return (
		<Wrapper>
			<Top className={clicked && 'choosen'}>
				<p>{clicked ? `${clickedOption} CHOOOOOOSEN!` : 'GAME PAGE'}</p>
				<HomeButton>
					<Link to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-6"
						>
							<path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
							<path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
						</svg>
					</Link>
				</HomeButton>
			</Top>
			<Bottom>
				<OptionContainer>{showOption}</OptionContainer>
			</Bottom>
		</Wrapper>
	);
}
