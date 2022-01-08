import './Loader.css';

function Loader({ loaderError }) {

    return (
        <div className='loader-position'>
            <div className="loader"><div></div><div></div><div></div></div>
            {
                loaderError
                    ? <p className='loader__error'>Проблема с загрузкой данных :(</p>
                    : null
            }

        </div>
    );
}

export default Loader;