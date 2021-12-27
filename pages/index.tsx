import { useState, WheelEvent } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Member from '../componets/member';

const memberProps: { src: string } = {
  name: 'monjara',
  src: '/images/test/profile.jpg',
};

const Home: NextPage = () => {
  const [pageNum, setPageNum] = useState(0);

  const handlePage = (e: WheelEvent<HTMLDivElement>) => {
    e.deltaY > 0 ? setPageNum(pageNum + 1) : setPageNum(pageNum - 1);
  };

  return (
    <div>
      <Head>
        <title>catalog</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div onWheel={(e) => handlePage(e)}>
        <Member src={memberProps.src} name={memberProps.name} />
      </div>
    </div>
  );
};

export default Home;
