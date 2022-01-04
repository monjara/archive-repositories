import Image from 'next/image';
import useWindowSize from '../hooks/useWindowSize';

type Props = {
  name: string;
  src: string;
  skills: string[];
  years: number;
  description: string;
};

const Member = ({ name, src, skills, years, description }: Props) => {
  const windowSize = useWindowSize();

  return (
    <>
      <div className="container">
        <div className="left-container">
          <div
            className="profile-image-wrapper"
            style={{
              width: windowSize.width * 0.4,
              height: windowSize.height * 0.4,
            }}
          >
            <Image
              layout="fixed"
              objectFit="cover"
              src={src}
              width={windowSize.width * 0.4}
              height={windowSize.height * 0.4}
              alt="profile"
            />
          </div>
          <p className="name">{name}</p>
          <p className="year">{years}</p>
        </div>
        <div className="right-container">
          <ul>
            {skills.map((skill, index) => (
              <li className="skill-item" key={index}>
                {skill}
              </li>
            ))}
          </ul>
          <div className="descriptionArea">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: auto;
          display: flex;
          width: 70%;
          height: 100%;
        }
        .left-container {
          background-color: red;
        }
        .profile-image-wrapper {
          margin-top: 50px;
          overflow: hidden;
        }
        .name {
          font-size: 40px;
        }
        .year {
          font-size: 40px;
        }
        .right-container {
          background-color: blue;
        }
        .skill-item {
          font-size: 60px;
        }
        li {
          list-style-type: none;
        }
      `}</style>
    </>
  );
};

export default Member;
