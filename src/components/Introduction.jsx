import styled from 'styled-components';

const Intro = styled.section`
	width: 100%;
	padding: 4rem 8rem 0;
`;

const Position = styled.div`
	text-align: center;
	font-size: 2.7rem;
	margin-bottom: 2rem;
`;
const Introduce = styled.p`
	text-align: center;
	font-size: 5rem;
	font-weight: 700;
	line-height: 1.5;
	margin-bottom: 5rem;
`;
const Highlight = styled.strong`
	text-decoration: underline #5040ff;
	text-decoration-thickness: 4px;
	text-underline-offset: 6px;
`;
const ImgBox = styled.article`
	width: 100%;
	height: calc(100vh - 38rem);
	background-color: #5040ff10;
	border-radius: 3rem 3rem 0 0;
`;

export default function Introduction() {
	return (
		<>
			<Intro>
				<Position>Frontend Developer</Position>
				<Introduce>
					끊임없이 성장하는 <br />
					프론트엔드 개발자 <Highlight>전성우</Highlight>입니다.
				</Introduce>
				<ImgBox></ImgBox>
			</Intro>
		</>
	);
}
