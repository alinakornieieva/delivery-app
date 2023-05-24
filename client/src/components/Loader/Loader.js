import {Circles} from 'react-loader-spinner'
import './Loader.scss'

export const Loader = () => {
    return <div className='loader'><Circles
        height="80"
        width="80"
        color="#FE5F1E"
        ariaLabel="circles-loading"
    />
  </div>
}