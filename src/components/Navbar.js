import React from 'react';
import styled from 'styled-components';

// constants
import { repoList } from '../common/constants';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  flex: 1;
  border-right: 1px dashed brown;
`;

const Buttons = styled.section`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const ActiveRepo = styled.section`
  border: 1px dotted brown;
  font-weight: 700;
`;

const Navbar = ({ currentRepo, setNextRepo }) => {
  const findRepo = (repo) => repo === currentRepo;

  const changeRepo = (direction) => {
    const currentRepoIndex = repoList.findIndex(findRepo);
    const step = direction === 'next' ? 1 : -1;
    const next =
      currentRepoIndex + step >= repoList.length
        ? 0
        : currentRepoIndex + step < 0
        ? repoList.length - 1
        : currentRepoIndex + step;

    setNextRepo(next);
  };

  return (
    <Wrapper>
      <Title>List of repositaries:</Title>
      <ul>
        {repoList.map((item) => {
          return item === currentRepo ? (
            <li key={item}>
              <ActiveRepo>{item}</ActiveRepo>
            </li>
          ) : (
            <li key={item}>{item}</li>
          );
        })}
      </ul>
      <Buttons>
        <Button onClick={() => changeRepo('prev')}>Prev</Button>
        <Button onClick={() => changeRepo('next')}>Next</Button>
      </Buttons>
    </Wrapper>
  );
};

export default Navbar;
