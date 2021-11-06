import { Link } from "react-router-dom";

const Register = () => {

    return (
        <div className="row g-0 auth-wrapper">
            <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div className="auth-background-holder"></div>
                <div className="auth-background-mask"></div>
            </div>

            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                    <div className="auth-body mx-auto">
                        <p>Create your Account</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" >

                                <div className="name mb-3">
                                    <input type="name"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                    />
                                </div>

                                <div className="email mb-3">
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="password mb-3">
                                    <div className="input-group">
                                        <input type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Sign up</button>
                                </div>
                            </form>

                            <hr />
                            <div className="auth-option text-center pt-2">Have an account? <Link className="text-link" to="/login" >Sign in</Link>.</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;