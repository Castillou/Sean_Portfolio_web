import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Layout from './components/layout';
import StartPage from './routes/start';
import MatchPage from './routes/match';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <StartPage />,
			},
			{
				path: 'match',
				element: <MatchPage />,
			},
		],
	},
]);

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%
  }
  body {
    background-color: #edf2f4;
    font-family: "Knewave", system-ui;
  }
	a {
		text-decoration: none;
	}
`;

const Wrapper = styled.div`
	background-color: #2b2d42;
`;

function App() {
	return (
		<Wrapper>
			<GlobalStyles />
			<RouterProvider router={router} />
		</Wrapper>
	);
}

export default App;
