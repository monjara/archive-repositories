import Image from 'next/image';
import useWindowSize from '../hooks/useWindowSize';

type Props = {
  name: string;
  src: string;
};

const Member = ({ name, src }: Props) => {
  const windowSize = useWindowSize();

  return (
    <div
      style={{
        width: windowSize.width * 0.9,
        padding: windowSize.height * 0.05,
        margin: 'auto',
      }}
    >
      <Image
        src={src}
        width={windowSize.width * 0.25}
        height={windowSize.width * 0.25}
        alt="member"
      />
      <p>{name}</p>
    </div>
  );
};

export default Member;
