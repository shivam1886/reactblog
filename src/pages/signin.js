import { Fragment } from 'react';
import Header from '../components/Header';


export default function SignIn() {
    return (
        <Fragment>
            <Header />
            <div className="page-content">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form>
                        <fieldset>
                        <legend>Login</legend>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" name="password" placeholder="Password" />
                            </div>
                            </fieldset>
                            <button type="submit" class="btn btn-primary float-right">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}