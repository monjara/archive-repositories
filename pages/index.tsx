import { useState, WheelEvent } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useWindowSize from '../hooks/useWindowSize';
import Member from '../componets/member';
import Logo from '../componets/logo';

const memberProps: {
  name: string;
  src: string;
  skills: string[];
  years: number;
  description: string;
} = {
  name: 'monjara',
  src: '/images/test/profile.jpg',
  skills: ['Java', 'PHP', 'JavaScript'],
  years: 2,
  description:
    'testyiwsdfasdfasdfasdfsadfsdafsaddddd\ndddddddddddddddddddddddddddddddddddddddddddddd',
};

const Home: NextPage = () => {
  const [pageNum, setPageNum] = useState(0);
  const windowSize = useWindowSize();

  const handlePage = (e: WheelEvent<HTMLDivElement>) => {
    e.deltaY > 0 ? setPageNum(pageNum + 1) : setPageNum(pageNum - 1);
  };

  return (
    <>
      <Head>
        <title>catalog</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo />
      <div
        onWheel={(e) => handlePage(e)}
        style={{
          width: windowSize.width,
          height: windowSize.height,
        }}
      >
        <Member
          src={memberProps.src}
          name={memberProps.name}
          skills={memberProps.skills}
          years={memberProps.years}
          description={memberProps.description}
        />
      </div>
    </>
  );
};

export default Home;
