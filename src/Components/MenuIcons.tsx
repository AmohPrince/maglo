import React from "react";

export const DashBoardIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6998 5.68471L11.8998 2.32637C10.5915 1.40971 8.58318 1.45971 7.32487 2.43471L3.14987 5.69304C2.31654 6.34304 1.6582 7.67637 1.6582 8.72633V14.4763C1.6582 16.6013 3.3832 18.3347 5.5082 18.3347H14.4915C16.6165 18.3347 18.3415 16.6097 18.3415 14.4847V8.83466C18.3415 7.70971 17.6165 6.32637 16.6998 5.68471ZM10.6248 15.0013C10.6248 15.343 10.3415 15.6263 9.99985 15.6263C9.65818 15.6263 9.37485 15.343 9.37485 15.0013V12.5013C9.37485 12.1597 9.65818 11.8763 9.99985 11.8763C10.3415 11.8763 10.6248 12.1597 10.6248 12.5013V15.0013Z"
        fill={isActive ? "#1B212D" : "#929EAE"}
      />
    </svg>
  );
};

export const TransactionIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.492 1.66675H6.50866C3.47533 1.66675 1.66699 3.47508 1.66699 6.50841V13.4834C1.66699 16.5251 3.47533 18.3334 6.50866 18.3334H13.4837C16.517 18.3334 18.3253 16.5251 18.3253 13.4917V6.50841C18.3337 3.47508 16.5253 1.66675 13.492 1.66675ZM14.3837 8.30008L12.4587 10.7834C12.217 11.0917 11.8753 11.2917 11.4837 11.3334C11.092 11.3834 10.7087 11.2751 10.4003 11.0334L8.87533 9.83342C8.81699 9.78342 8.75033 9.78342 8.71699 9.79175C8.68366 9.79175 8.62533 9.80842 8.57533 9.87508L6.59199 12.4501C6.46699 12.6084 6.28366 12.6917 6.10033 12.6917C5.96699 12.6917 5.83366 12.6501 5.71699 12.5584C5.44199 12.3501 5.39199 11.9584 5.60033 11.6834L7.58366 9.10842C7.82533 8.80008 8.16699 8.60008 8.55866 8.55008C8.94199 8.50008 9.33366 8.60841 9.64199 8.85008L11.167 10.0501C11.2253 10.1001 11.2837 10.1001 11.3253 10.0917C11.3587 10.0917 11.417 10.0751 11.467 10.0084L13.392 7.52508C13.6003 7.25008 14.0003 7.20008 14.267 7.41675C14.542 7.64175 14.592 8.03342 14.3837 8.30008Z"
        fill={isActive ? "#1B212D" : "#929EAE"}
      />
    </svg>
  );
};

export const InvoicesIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1503 1.66675H6.85033C3.70033 1.66675 2.91699 2.50841 2.91699 5.86675V15.2501C2.91699 17.4667 4.13366 17.9917 5.60866 16.4084L5.61699 16.4001C6.30033 15.6751 7.34199 15.7334 7.93366 16.5251L8.77533 17.6501C9.45033 18.5417 10.542 18.5417 11.217 17.6501L12.0587 16.5251C12.6587 15.7251 13.7003 15.6667 14.3837 16.4001C15.867 17.9834 17.0753 17.4584 17.0753 15.2417V5.86675C17.0837 2.50841 16.3003 1.66675 13.1503 1.66675ZM12.292 8.95842H7.70866C7.36699 8.95842 7.08366 8.67508 7.08366 8.33342C7.08366 7.99175 7.36699 7.70842 7.70866 7.70842H12.292C12.6337 7.70842 12.917 7.99175 12.917 8.33342C12.917 8.67508 12.6337 8.95842 12.292 8.95842Z"
        fill={isActive ? "#1B212D" : "#929EAE"}
      />
    </svg>
  );
};

export const MyWalletsIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3747 3.29232V6.45898H11.1247V3.29232C11.1247 3.06732 10.9247 2.95898 10.7913 2.95898C10.7497 2.95898 10.708 2.96732 10.6663 2.98398L4.05801 5.47565C3.61634 5.64232 3.33301 6.05898 3.33301 6.53398V7.09232C2.57467 7.65898 2.08301 8.56733 2.08301 9.59233V6.53398C2.08301 5.54232 2.69134 4.65898 3.61634 4.30898L10.233 1.80898C10.4163 1.74232 10.608 1.70898 10.7913 1.70898C11.6247 1.70898 12.3747 2.38398 12.3747 3.29232ZM17.9169 12.0833V12.9167C17.9169 13.1417 17.7419 13.325 17.5086 13.3333H16.2919C15.8503 13.3333 15.4503 13.0083 15.4169 12.575C15.3919 12.3167 15.4919 12.075 15.6586 11.9083C15.8086 11.75 16.0169 11.6667 16.2419 11.6667H17.5003C17.7419 11.675 17.9169 11.8583 17.9169 12.0833Z"
        fill={isActive ? "#1B212D" : "#929EAE"}
      />
      <path
        d="M16.233 10.7916H17.083C17.5413 10.7916 17.9163 10.4166 17.9163 9.95825V9.59159C17.9163 7.86659 16.508 6.45825 14.783 6.45825H5.21634C4.50801 6.45825 3.85801 6.69159 3.33301 7.09159C2.57467 7.65825 2.08301 8.56659 2.08301 9.59159V15.1999C2.08301 16.9249 3.49134 18.3333 5.21634 18.3333H14.783C16.508 18.3333 17.9163 16.9249 17.9163 15.1999V15.0416C17.9163 14.5833 17.5413 14.2083 17.083 14.2083H16.358C15.558 14.2083 14.7913 13.7166 14.583 12.9416C14.408 12.3083 14.6163 11.6999 15.033 11.2916C15.3413 10.9749 15.7663 10.7916 16.233 10.7916ZM11.6663 10.6249H5.83301C5.49134 10.6249 5.20801 10.3416 5.20801 9.99992C5.20801 9.65825 5.49134 9.37492 5.83301 9.37492H11.6663C12.008 9.37492 12.2913 9.65825 12.2913 9.99992C12.2913 10.3416 12.008 10.6249 11.6663 10.6249Z"
        fill={isActive ? "#1B212D" : "#929EAE"}
      />
    </svg>
  );
};

export const SettingsIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7503 7.68458C15.242 7.68458 14.6253 6.61792 15.3753 5.30958C15.8087 4.55125 15.5503 3.58458 14.792 3.15125L13.3503 2.32625C12.692 1.93458 11.842 2.16792 11.4503 2.82625L11.3587 2.98458C10.6087 4.29292 9.37533 4.29292 8.61699 2.98458L8.52533 2.82625C8.15033 2.16792 7.30033 1.93458 6.64199 2.32625L5.20033 3.15125C4.44199 3.58458 4.18366 4.55958 4.61699 5.31792C5.37533 6.61792 4.75866 7.68458 3.25033 7.68458C2.38366 7.68458 1.66699 8.39291 1.66699 9.26791V10.7346C1.66699 11.6012 2.37533 12.3179 3.25033 12.3179C4.75866 12.3179 5.37533 13.3846 4.61699 14.6929C4.18366 15.4512 4.44199 16.4179 5.20033 16.8512L6.64199 17.6762C7.30033 18.0679 8.15033 17.8346 8.54199 17.1762L8.63366 17.0179C9.38366 15.7096 10.617 15.7096 11.3753 17.0179L11.467 17.1762C11.8587 17.8346 12.7087 18.0679 13.367 17.6762L14.8087 16.8512C15.567 16.4179 15.8253 15.4429 15.392 14.6929C14.6337 13.3846 15.2503 12.3179 16.7587 12.3179C17.6253 12.3179 18.342 11.6096 18.342 10.7346V9.26791C18.3337 8.40125 17.6253 7.68458 16.7503 7.68458ZM10.0003 12.7096C8.50866 12.7096 7.29199 11.4929 7.29199 10.0012C7.29199 8.50958 8.50866 7.29292 10.0003 7.29292C11.492 7.29292 12.7087 8.50958 12.7087 10.0012C12.7087 11.4929 11.492 12.7096 10.0003 12.7096Z"
        fill={isActive ? "#1B212D" : "#929EAE"}
      />
    </svg>
  );
};
