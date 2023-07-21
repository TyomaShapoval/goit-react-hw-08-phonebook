import img404 from '../images/404.png';
const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        overflow: "hidden"
      }}
    >
      <img src={img404} alt="404" style={{maxWidth: "600px"}} />
    </div>
  );
};
export default NotFound;
