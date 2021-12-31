import useWindowSize from '../hooks/useWindowSize';

const Logo = () => {
  const windowSize = useWindowSize();

  return (
    <div
      style={{
        backgroundColor: 'white',
        border: 'solid',
        width: windowSize.width * 0.1,
        height: windowSize.width * 0.1,
        position: 'absolute',
        top: 10,
        left: 10,
      }}
    ></div>
  );
};
export default Logo;
