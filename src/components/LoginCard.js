import React from 'react';
import '../styles/Cards.css';

function LoginCard() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <li className='cards__item'>
                            <div className='cards__item__link'>
                                <figure className='cards__item__pic-wrap' data-category={'login'}>
                                    <div className='cards__item__info'>
                                        <form>
                                            <h3>Sign In</h3>
                                            <br />

                                            <div className="form-group">
                                                <label>Email address: </label>
                                                <input type="email" className="form-control" placeholder="Enter email" />
                                            </div>
                                            <br />

                                            <div className="form-group">
                                                <label>Password: </label>
                                                <input type="password" className="form-control" placeholder="Enter password" />
                                            </div>

                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" htmlFor="customCheck1"> Remember me</label>
                                                </div>
                                            </div>
                                            <br />

                                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                        </form>
                                    </div>
                                </figure>
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    );
}

export default LoginCard;
