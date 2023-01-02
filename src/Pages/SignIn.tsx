import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/Assets";

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const thirtyDaysCheckboxRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    console.log(emailRef.current?.value);
    console.log(passwordRef.current?.value);
    console.log(thirtyDaysCheckboxRef.current?.checked);
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/2 py-[4%] px-[10%] h-full dark:bg-magloBlack">
        <div className="flex items-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0C3.58172 0 0 3.58172 0 8V22C0 22.1899 0.00661649 22.3783 0.0196315 22.5648C0.0129944 22.5744 0.00645061 22.5836 0 22.5927C0 22.9378 0.0426053 23.2176 0.127821 23.4321C0.80282 27.167 4.07057 30 8 30H22C26.4183 30 30 26.4183 30 22L30 19.9851L30 8C30 3.58172 26.4183 0 22 0H8ZM30 19.9851C30 20.2986 29.9163 20.5978 29.749 20.8828C29.6095 21.1393 29.3863 21.3388 29.0795 21.4813C28.8563 21.6238 28.4519 21.8517 27.8661 22.1652L26.0251 23.1057C25.3556 23.4192 24.7141 23.7326 24.1004 24.0461C23.5146 24.3596 23.0962 24.5733 22.8452 24.6873C22.2873 24.9438 21.855 25.1148 21.5481 25.2003C21.2692 25.2573 20.8787 25.2858 20.3766 25.2858C19.8466 25.2858 19.3584 25.1861 18.9121 24.9866C18.4937 24.7871 18.145 24.5021 17.8661 24.1316C17.5872 23.7611 17.3919 23.3479 17.2803 22.8919C17.1688 22.4075 17.1827 21.8945 17.3222 21.353C17.3222 20.4411 17.4756 19.6004 17.7824 18.8309C18.1172 18.033 18.4798 17.2778 18.8703 16.5653C19.2887 15.8243 19.6513 15.0976 19.9582 14.3852C20.2929 13.6442 20.4603 12.8605 20.4603 12.0341C19.8466 12.0341 19.1911 12.2336 18.4937 12.6325C17.7964 13.0315 17.0851 13.5587 16.3598 14.2142C15.6625 14.8696 14.9651 15.6106 14.2678 16.4371C13.5983 17.235 12.9568 18.0472 12.3431 18.8737C11.7573 19.6716 11.2413 20.4411 10.795 21.182C10.3766 21.923 10.0558 22.5357 9.83264 23.0202C9.77685 23.0487 9.63738 23.0772 9.41423 23.1057H8.99582C8.54951 23.3337 8.27057 23.3337 8.159 23.1057C8.07531 22.8492 8.07531 22.4645 8.159 21.9515C8.27057 21.4385 8.43794 20.8686 8.66109 20.2416C8.88424 19.5861 9.09344 18.9734 9.2887 18.4034C9.51186 17.805 9.67922 17.3205 9.79079 16.95C9.90237 16.5511 9.91632 16.3516 9.83264 16.3516C9.91632 16.2376 10.0139 16.0523 10.1255 15.7958C10.2371 15.5394 10.3487 15.2686 10.4603 14.9836C10.5718 14.6987 10.6695 14.4422 10.7531 14.2142C10.8368 13.9577 10.8787 13.7582 10.8787 13.6157C10.8787 13.3592 10.781 13.2025 10.5858 13.1455C10.4184 13.06 10.251 13.0173 10.0837 13.0173C9.58159 12.7323 9.03766 12.9033 8.45188 13.5302C7.894 14.1287 7.28033 14.9979 6.61088 16.1378C5.96932 17.2493 5.25802 18.5317 4.47699 19.9851C3.72385 21.41 2.88703 22.7922 1.96653 24.1316C1.32497 24.1316 0.83682 24.0461 0.502092 23.8751C0.336255 23.7904 0.211496 23.6427 0.127821 23.4321C0.0764672 23.148 0.0401206 22.8586 0.0196315 22.5648C0.242597 22.2452 0.570781 21.6703 1.00418 20.8401C1.45049 19.9566 1.95258 18.9877 2.51046 17.9332C3.06834 16.8788 3.65411 15.8101 4.26778 14.7272C4.90934 13.6442 5.50907 12.7323 6.06695 11.9913C6.65272 11.2219 7.16876 10.7089 7.61506 10.4524C8.08926 10.1674 8.46583 10.2957 8.74477 10.8371C9.21897 10.5237 9.73501 10.2529 10.2929 10.0249C10.8787 9.79694 11.4644 9.68295 12.0502 9.68295C12.4407 9.68295 12.7615 9.81119 13.0126 10.0677C13.2915 10.2957 13.5007 10.5949 13.6402 10.9654C13.8075 11.3074 13.9331 11.6778 14.0167 12.0768C14.1004 12.4473 14.1423 12.775 14.1423 13.06C14.4491 12.8605 14.9512 12.5185 15.6485 12.0341C16.3738 11.5211 17.1409 11.0081 17.9498 10.4952C18.7866 9.98218 19.5955 9.54046 20.3766 9.16998C21.1855 8.771 21.841 8.57151 22.3431 8.57151C22.7894 8.57151 23.166 8.7425 23.4728 9.08448C23.8075 9.39797 23.9749 9.79694 23.9749 10.2814C22.9707 12.7893 22.1757 14.7984 21.59 16.3088C21.0321 17.8192 20.6555 19.0019 20.4603 19.8569C20.2929 20.6833 20.2929 21.2818 20.4603 21.6523C20.6555 21.9942 20.9902 22.265 21.4644 22.4645C22.2176 22.4645 22.9428 22.3362 23.6402 22.0797C24.3375 21.8232 25.0209 21.5383 25.6904 21.2248C26.3877 20.9113 27.0851 20.6263 27.7824 20.3698C28.4798 20.1133 29.219 19.9851 30 19.9851Z"
              fill="#1B212D" //change this to #fff on dark mode
              className="logo"
            />
          </svg>
          <p className="font-bold text-lg dark:text-white ml-2">Maglo</p>
        </div>
        <p className="font-semibold text-3xl mt-[14%] dark:text-white">
          Welcome back
        </p>
        <p className="font-normal text-base text-gray-400">
          Welcome back please enter your details
        </p>
        <p className="text-sm font-medium mt-6 mb-2 dark:text-white">Email</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="py-3 px-4 text-sm border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
          ref={emailRef}
        />
        <p className="text-sm font-medium mt-4 mb-2 dark:text-white">
          Password
        </p>
        <input
          type="password"
          className="py-3 px-4 border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
          placeholder="Password"
          ref={passwordRef}
        />
        <div className="flex items-center mt-5 mb-6">
          <input
            type="checkbox"
            className="w-4 h-4 mr-2 dark:bg-transparent"
            ref={thirtyDaysCheckboxRef}
          />
          <p className="text-sm font-medium dark:text-white">
            Remember for 30 days
          </p>
          <p className="font-medium text-sm ml-auto dark:text-white">
            Forgot password
          </p>
        </div>
        <button
          className="text-sm font-semibold bg-magloGreen w-full px-5 py-3 rounded-lg"
          onClick={handleLogin}
        >
          Sign in
        </button>
        <div className="flex justify-center mt-4 mb-6 cursor-pointer items-center">
          <img src={assets.google} alt="google icon" className="w-5 h-5" />
          <p className="font-medium ml-2 text-gray-600">Sign in with google</p>
        </div>
        <p className="text-sm text-gray-400 text-center">
          Don’t have an account?{" "}
          <Link
            className="text-black cursor-pointer dark:text-white"
            to="/sign-up"
          >
            Sign up its free!
          </Link>
        </p>
      </div>
      <div className="w-1/2 h-full">
        <img
          src={assets.handWithCoin}
          alt="hand holding with icon"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignIn;
