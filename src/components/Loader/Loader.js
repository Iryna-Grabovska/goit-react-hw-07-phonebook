import Loader from 'react-loader-spinner';
import s from './Loader.module.css';
function Loading(params) {
  return (
    <div className={s.loaderBox}>
      <Loader type="Circles" color="rgb(46, 46, 131)" height={80} width={80} />;
    </div>
  )
}
export { Loading };