import '../stylesheets/FormAddProduct.css'
import { useForm } from 'react-hook-form';


const FormAddProduct = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = value => {
        console.log(value)
        const file = value.image[0];
        console.log(file.name)
        }





    return (
            <div className="container-FormAddProduct">
                <form className='form-FormAddProduct' onSubmit={handleSubmit(onSubmit)}>
                    <div className='img-FormAddProduct'>
                        <input name="image" type="file"
                            {...register("image", {})
                            }
                        />

                    </div>
                    <div className='inputs-FormAddProduct'>
                        <div className='input1-FormAddProduct'>
                            <label htmlFor='title'>Titulo:</label>
                            <input type="text" autoComplete="off" name="title" placeholder='title'
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: "Necesitas este campo"
                                    }
                                })}
                            />
                        </div>
                        <div className='input2-FormAddProduct'>
                            <label htmlFor='description'>Descripccion:</label>
                            <input type="text" autoComplete="off" name="description" placeholder="description"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "Necesitas este campo"
                                    }
                                })}
                            />
                        </div>
                        <div className='input3-FormAddProduct'>
                            <label htmlFor='price'>Precion:</label>
                            <input type="text" autoComplete="off" name="price" placeholder="price"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "Necesitas este campo"
                                    }
                                })}
                            />
                        </div>
                        <div className='input4-FormAddProduct'>
                            <label htmlFor='stock'>Stock:</label>
                            <input type="text" autoComplete="off" name="stock" placeholder="stock"
                                {...register("stock", {
                                    required: {
                                        value: true,
                                        message: "Necesitas este campo"
                                    }
                                })}
                            />
                        </div>
                        <div className='button-FormAddProduct'>
                            <button type='submit'>Add</button>
                        </div>
                    </div>
                </form>
                <div className='show-FormAddProduct'></div>
            </div>
        )
    }

    export default FormAddProduct
