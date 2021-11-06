import { Link } from "react-router-dom";

const Forgot = () => {

    return (
        <div className="row g-0 auth-wrapper">
            <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div className="auth-background-holder"></div>
                <div className="auth-background-mask"></div>
            </div>

            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                    <div className="auth-body mx-auto">
                        <p>Forgot Password</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" >
                                <div className="email mb-3">
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Forgot Password</button>
                                </div>
                            </form>

                            <hr />
                            <div className="auth-option text-center pt-2"><Link className="text-link" to="/login" >Back to Login</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Forgot;