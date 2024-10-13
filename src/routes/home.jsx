import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderComp from '../components/Header';

const Wrapper = styled.div`
	width: 100%;
`;

const Main = styled.main`
	width: 100%;
	padding: 7rem 8rem 0;
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
`;
const Highlight = styled.strong`
	text-decoration: underline #5040ff;
	text-decoration-thickness: 4px;
	text-underline-offset: 6px;
`;

export default function HomePage() {
	return (
		<Wrapper>
			<HeaderComp />
			<Main>
				<Position>Frontend Developer</Position>
				<Introduce>
					끊임없이 성장하는 <br />
					프론트엔드 개발자 <Highlight>전성우</Highlight>입니다.
				</Introduce>
			</Main>
		</Wrapper>
	);
}
