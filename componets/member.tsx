import Image from 'next/image';
import useWindowSize from '../hooks/useWindowSize';

type Props = {
  name: string;
  src: string;
  skills: string[];
  description: string;
};

const Member = ({ name, src, skills, description }: Props) => {
  const windowSize = useWindowSize();

  return (
    <>
      <div
        style={{
          width: windowSize.width * 0.8,
          padding: windowSize.height * 0.05,
          margin: 'auto',
          display: 'flex',
        }}
      >
        <div>
          <Image
            src={src}
            width={windowSize.width * 0.25}
            height={windowSize.width * 0.25}
            alt="member"
          />
          <p>{name}</p>
        </div>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Member;
