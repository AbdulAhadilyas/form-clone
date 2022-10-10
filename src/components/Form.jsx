import './css/index.css'

function Form() {
    return (
        <div>
            <div className="main">
                <div className="img">
                </div>
                <div className="form">
                    <h1>Login to continue</h1>
                    <form action="">
                        <div className="box">
                            <div className="inputbox">
                                <input type="email" placeholder='Email' />
                            </div>
                        </div>
                        <div className="box">
                            <div className="inputbox" >
                                <input type="password" placeholder='Password' />
                            </div>
                        </div>
                        <div className="cheak-box">
                            <div className="check-input-box">
                                <div className="check">
                                    <input type="checkbox" />
                                </div>
                                <span className='cheak-span'>Remeber me</span>
                            </div>
                            <span className='forget'>Forget password?</span>
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;