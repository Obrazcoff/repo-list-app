import { useState } from 'react';
import styled from 'styled-components';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

// components
import Details from './components/Details';
import Navbar from './components/Navbar';

// constants
import { repoList } from './common/constants';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// Create a client
const queryClient = new QueryClient();

function App() {
  const [repo, setRepo] = useState(repoList[0]);

  const setNextRepo = (nextRepo) => {
    setRepo(repoList[nextRepo]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <Navbar currentRepo={repo} setNextRepo={setNextRepo} />
        <Details repo={repo} />
      </Wrapper>
    </QueryClientProvider>
  );
}

export default App;
