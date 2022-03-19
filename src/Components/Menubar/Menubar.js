
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menubar.css'

const Menubar = (props) => {
    return (
        <div >
            <dir className='item-container mt-0'>
            <div className='row '>
                <div className='col-md-4 col-4'>
                    <span className='item me-4 d-flex align-items-center'>LOGO</span>
                </div>
                <div className='col-md-8 col-8 d-flex justify-content-end'>
                    <span className='item ms-4'>Home</span>
                    <span className='item ms-4'>Product <sup>{props.count}</sup></span>
                    <span className='item ms-4'>Countact</span>
                    <span className='item ms-4'>About</span>
                </div>
            </div>
            </dir>
            
        </div>
    );
};

export default Menubar;