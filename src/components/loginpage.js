import React, { useState } from 'react';

function LoginSignupComponent() {
  const [isLoginVisible, setLoginVisible] = useState(true);

  const handleLoginClick = () => {
    setLoginVisible(false);
  };

  const handleSignupClick = () => {
    setLoginVisible(true);
  };

  return (
    <div>
      {isLoginVisible ? (
        <div className="slide-up">
          {/* Login form */}
          <button id="login" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      ) : (
        <div>
          {/* Signup form */}
          <button id="signup" onClick={handleSignupClick}>
            Signup
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginSignupComponent;
