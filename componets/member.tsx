import Image from 'next/image';

type Props = {
  name: string;
  src: string;
};

const Member = ({ name, src }: Props) => {
  return (
    <>
      <Image src={src} width={180} height={180} alt="member" />
      <p>{name}</p>
    </>
  );
};

export default Member;
