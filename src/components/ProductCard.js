import '../stylesheets/ProductCard.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 600,
    bgcolor: '#DFF6FF',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };





const ProductCart = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);





    return (
        <div className='container-ProductCard'>
            <div className='img-productCard'>
                <img src='https://instasam-demo.s3.us-east-2.amazonaws.com/MySQL+1.jpg' ></img>
            </div>
            <div className='title-productCard'>
                    {props.titulo}
            </div>
            <div className='description-productCard'>
                <p>{props.descripccion}</p>
            </div>
            <div className='price-productCard'>
                precio: 200 $
            </div>
            <div className='stock-productCard'>
                stock: 30
            </div>
            <button className='prueba-edit-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
            </svg>
            </button>
            <button className='prueba-edit-2' onClick={handleOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
            </button>
            <div>
                    <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                    >
                    <Box sx={style}>
                        <div className='modal-update'>
                            <div><input placeholder='titulo'></input><button>Cambir</button></div>
                            <div><input placeholder='descripccion'></input><button>Cambir</button></div>
                            <div><input placeholder='precio'></input><button>Cambir</button></div>
                            <div><input placeholder='stock'></input><button>Cambir</button></div>
                        </div>
                    </Box>
                    </Modal>
            </div>


        </div>

    )
}


export default ProductCart