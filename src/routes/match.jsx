import styled from 'styled-components';
import Option from '../components/Option';
import { useState } from 'react';

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
	&.choosen {
		color: #84dcc6;
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
	justify-content: space-between;
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

	return (
		<Wrapper>
			<Top className={clicked && 'choosen'}>
				{clicked ? 'CHOOOOOOSEN!' : 'GAME PAGE'}
			</Top>
			<Bottom>
				<OptionContainer>
					<Option name="1번" onClick={() => onClick(1)} />
					<MidText>VS</MidText>
					<Option name="2번" onClick={() => onClick(2)} />
				</OptionContainer>
			</Bottom>
		</Wrapper>
	);
}
