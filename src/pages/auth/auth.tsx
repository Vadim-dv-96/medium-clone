import { FormEvent, useEffect, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const Auth = () => {
  console.log('authrender');

  const location = useLocation();
  const { pathname } = location;
  const isLogin = pathname === '/login';
  const pageTitle = isLogin ? 'Sign in' : 'Sign up';
  const descriptionLink = isLogin ? '/register' : '/login';
  const descriptionText = isLogin ? 'Need an account?' : 'Have an account?';
  const apiUrl = isLogin ? '/users/login' : '/users';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { response, isLoading, error, doFetch } = useFetch(apiUrl);
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);

  console.log('EMAIL', email);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('data', email, password);
    const user = isLogin ? { email, password } : { email, password, username };
    doFetch({
      user,
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    localStorage.setItem('token', response.user.token);
    setIsSuccessfullSubmit(true);
  }, [response]);

  if (isSuccessfullSubmit) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{pageTitle}</h1>
            <p className="text-xs-center">
              <Link to={descriptionLink}>{descriptionText}</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                {!isLogin && (
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.currentTarget.value)}
                    />
                  </fieldset>
                )}
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </fieldset>
                <button
                  disabled={isLoading}
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  {pageTitle}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// axios.post<RequestType>('https://api.realworld.io/api/users/login', {
// 	// 		user: {
// 	// 			email: "gfdg@fdh.com",
// 	// 			password: "dghg"
// 	// 		}
// 	// 	}).then((res) => {
// 	// 		console.log('success', res);

// 	// 	}).catch((err) => {
// 	// 		console.log('error', err);

// 	// 	})
