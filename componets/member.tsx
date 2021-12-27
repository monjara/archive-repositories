import Image from 'next/image';

type Props = {
  num: number;
};

const Member = ({ num }: Props) => {
  return <>{num}</>;
};

export default Member;
