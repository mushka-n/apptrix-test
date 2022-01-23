import React from "react";

const ArrowDown = ({ className, fill = "myDark" }) => {
    return (
        <svg
            className={`${className} rotate-180`}
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.6874 19.2616C10.5712 19.1486 10.0747 18.7219 9.66622 18.3244C7.09735 15.9942 2.89266 9.91525 1.60923 6.73356C1.403 6.25037 0.966508 5.02874 0.938477 4.37604C0.938477 3.75061 1.08264 3.15441 1.37496 2.58548C1.78342 1.87628 2.42614 1.30736 3.18498 0.995616C3.71157 0.794934 5.28733 0.483195 5.31536 0.483195C7.03929 0.171456 9.84041 0 12.9359 0C15.8852 0 18.5722 0.171456 20.3221 0.426693C20.3501 0.455918 22.3083 0.767657 22.9791 1.10862C24.2044 1.73405 24.9653 2.95567 24.9653 4.26303V4.37604C24.9353 5.22747 24.1744 7.01802 24.1464 7.01802C22.8609 10.0283 18.8625 15.9669 16.2055 18.3536C16.2055 18.3536 15.5228 19.0258 15.0963 19.3181C14.4836 19.774 13.7247 20 12.9659 20C12.119 20 11.3301 19.7448 10.6874 19.2616Z"
                fill={fill}
            />
        </svg>
    );
};

export default ArrowDown;
