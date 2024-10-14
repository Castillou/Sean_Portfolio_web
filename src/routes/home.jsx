// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderComp from '../components/Header';
import Introduction from '../components/Introduction';

const Wrapper = styled.div`
	width: 100%;
`;

const Main = styled.main`
	width: 100%;
`;

export default function HomePage() {
	return (
		<Wrapper>
			<HeaderComp />
			<Main>
				<Introduction />
			</Main>
		</Wrapper>
	);
}
