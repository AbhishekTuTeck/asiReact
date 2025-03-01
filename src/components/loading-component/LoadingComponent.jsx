import Spinner from 'react-bootstrap/Spinner';

function LoadingComponent() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100  position-fixed w-100 loader-container'>
      <div className='card loader-card'>
        <div className='card-body'>

        <Spinner animation='border' variant='primary'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
      <h5>Loading, please wait...</h5>
      <p>We’re getting everything ready for you. This won’t take long.  
      Thank you for your patience!</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingComponent;
