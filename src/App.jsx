import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Layout from './components/layout';
import HomePage from './routes/home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <HomePage />,
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
    font-family: Pretendard, sans-serif;
  }
`;

const Wrapper = styled.div``;

function App() {
	return (
		<Wrapper>
			<GlobalStyles />
			<RouterProvider router={router} />
		</Wrapper>
	);
}

export default App;
