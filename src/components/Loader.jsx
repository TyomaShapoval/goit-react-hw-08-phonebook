import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="lightgreen"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};