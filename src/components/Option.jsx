import styled from 'styled-components';

const Wrapper = styled.article`
	width: 47%;
	border-radius: 1rem;
	background-color: #fff;
	overflow: hidden;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	cursor: pointer;
`;

const Name = styled.h2`
	width: 100%;
	height: 7vh;
	font-size: 3.5vh;
	font-weight: 600;
	background-color: #dadada;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease-in-out;

	&.clicked {
		background-color: #84dcc6;
	}
`;

const ImgBox = styled.div`
	height: 73vh;
`;

export default function Option({ name, onClick, clicked }) {
	return (
		<Wrapper onClick={onClick}>
			<Name className={clicked ? 'clicked' : ''}>{name}</Name>
			<ImgBox></ImgBox>
		</Wrapper>
	);
}
