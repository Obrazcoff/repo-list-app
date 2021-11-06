import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

// api
import { getDetails } from '../api/getRequests';

// constants
import { spinnerUrl } from '../common/constants';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const DescLabel = styled.section`
  font-weight: 700;
`;

const Wrapper = styled.section`
  padding: 4em;
  flex: 4;
`;

const LoadingMsg = styled.section`
  color: blue;
  font-weight: 700;
  font-size: 1em;
`;

const ErrorMsg = styled.section`
  color: red;
  font-weight: 700;
  font-size: 1.5em;
`;

const Details = ({ repo }) => {
  const { data, status } = useQuery(['details', repo], () => getDetails(repo));

  return (
    <Wrapper>
      <Title>Repo details:</Title>
      {status === 'success' && (
        <ul>
          <li>
            <DescLabel>Repo name: </DescLabel>
            {data?.full_name}
          </li>
          <li>
            <DescLabel>Description: </DescLabel>
            {data?.description}
          </li>
          <li>
            <DescLabel>Count of stars: </DescLabel>
            {data?.stargazers_count}
          </li>
        </ul>
      )}

      {status === 'loading' && (
        <LoadingMsg>
          Loading...
          <img src={spinnerUrl} height="18px" width="18px"></img>
        </LoadingMsg>
      )}

      {status === 'error' && <ErrorMsg>Error fetching data</ErrorMsg>}
    </Wrapper>
  );
};

export default Details;
