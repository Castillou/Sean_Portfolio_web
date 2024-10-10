import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.main``;

export default function Layout() {
	return (
		<Wrapper>
			<Outlet />
		</Wrapper>
	);
}
