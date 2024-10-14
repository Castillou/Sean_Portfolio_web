import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
	width: 100%;
	height: 9rem;
	padding: 0 8rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Logo = styled.h1`
	a {
		display: block;
		font-size: 3.5rem;
		font-weight: 900;
		color: #5040ff;
		text-decoration: none;
		outline: none;
	}
`;
const Navigation = styled.nav`
	ul {
		display: flex;
		align-items: center;
		gap: 3rem;
	}
	ul > li > a {
		display: block;
		color: #333;
		font-size: 2rem;
		text-decoration: none;
		outline: none;
	}
	ul > li:hover > a {
		opacity: 0.6;
	}
`;
const Remixbox = styled.div`
	a {
		display: block;
		padding: 1rem 1.3rem;
		font-size: 1.5rem;
		border-radius: 2rem;
		text-decoration: none;
		color: #fff;
		border: 1px solid #333;
		background-color: #333;
		transition: all 0.2s ease-in-out;
		outline: none;
	}
	a:hover {
		color: #333;
		background-color: #fff;
	}
`;

export default function HeaderComp() {
	return (
		<Header>
			<Logo>
				<Link to="/">SEAN</Link>
			</Logo>
			<Navigation>
				<ul>
					<li>
						<Link to="/">Work</Link>
					</li>
					<li>
						<Link to="/">About</Link>
					</li>
					<li>
						<Link to="/">Contact</Link>
					</li>
					<Remixbox>
						<Link to="/">Remix</Link>
					</Remixbox>
				</ul>
			</Navigation>
		</Header>
	);
}
