import { useState, WheelEvent } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Member from '../componets/member';

const memberProps: { src: string } = {
  src: '/vercel.svg',
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
        <Member num={pageNum} />
      </div>
    </div>
  );
};

export default Home;
