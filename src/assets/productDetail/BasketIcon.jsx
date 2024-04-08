import React from "react";

const BasketIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      fill="black"
      className="productDetail-icon hover:fill-white"
      width="24.000000"
      height="24.000000"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip1_9731">
          <rect
            id="material-symbols:shopping-cart-outline-rounded"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="material-symbols:shopping-cart-outline-rounded"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_9731)">
        <path
          id="shopping-bag 1 (Traced)"
          d="M14.2295 1.77588C12.832 2.07495 11.709 3.20923 11.4199 4.61133C11.374 4.83643 11.3564 5.15186 11.3564 5.7666L11.3564 6.6123L9.73926 6.61255C8.19629 6.61255 8.11621 6.61621 7.99121 6.69263C7.91895 6.73633 7.82422 6.8313 7.78027 6.90332C7.70312 7.02979 7.70117 7.10986 7.7002 9.23462L7.7002 11.4351L4.91797 11.4353C2.21289 11.4353 2.13184 11.4375 2.00488 11.5151C1.93262 11.5591 1.83789 11.6541 1.79395 11.7261C1.71582 11.8547 1.71387 11.9375 1.71387 16.3044C1.71387 20.5479 1.7168 20.7629 1.78906 20.9951C1.89355 21.3303 2.0293 21.5481 2.28516 21.79C2.52734 22.019 2.71289 22.1252 3.03711 22.2214C3.23438 22.2803 4.07617 22.2861 11.9971 22.2856C21.3652 22.2852 20.9111 22.2949 21.3184 22.0869C21.5459 21.9705 21.9023 21.6333 22.0332 21.4111C22.0889 21.3162 22.168 21.1289 22.21 20.9951C22.2822 20.7607 22.2852 20.4985 22.2852 13.8931C22.2852 7.12012 22.2842 7.03271 22.2051 6.90332C22.1611 6.8313 22.0664 6.73633 21.9941 6.69263C21.8691 6.61621 21.7891 6.61255 20.2529 6.61255L18.6416 6.6123L18.6152 6.16016C18.6006 5.91162 18.5889 5.53101 18.5889 5.31445C18.5879 3.604 17.373 2.12036 15.6875 1.77295C15.3027 1.6936 14.6074 1.69507 14.2295 1.77588ZM15.6201 3.01978C16.2266 3.198 16.7939 3.65283 17.0684 4.18091C17.3262 4.6748 17.3525 4.81226 17.373 5.7583L17.3926 6.6123L15.002 6.6123L12.6104 6.6123L12.582 5.99072C12.5391 5.08813 12.5996 4.71069 12.8672 4.20093C13.2051 3.55688 13.8525 3.08643 14.5771 2.95752C14.8516 2.90869 15.3418 2.93799 15.6201 3.01978ZM11.3975 8.20996C11.3975 8.53003 11.4121 8.62573 11.4766 8.73267C11.7139 9.12085 12.2852 9.12085 12.5225 8.73267C12.5869 8.62573 12.6016 8.53003 12.6025 8.20996L12.6025 7.81812L15.0127 7.81812L17.4238 7.81812L17.4238 8.20996C17.4238 8.53003 17.4385 8.62573 17.5039 8.73267C17.7402 9.12085 18.3125 9.12085 18.5488 8.73267C18.6143 8.62573 18.6289 8.53003 18.6289 8.20996L18.6289 7.81812L19.8555 7.81812L21.0811 7.81812L21.0703 14.2454C21.0596 20.6663 21.0596 20.6729 20.9775 20.7837C20.9316 20.8447 20.8447 20.9321 20.7832 20.9775C20.6748 21.0586 20.623 21.0608 18.4199 21.0718L16.168 21.0833L16.2021 20.9915C16.2217 20.9409 16.2412 18.865 16.248 16.3784C16.2588 11.9199 16.2578 11.8552 16.1787 11.7261C16.1348 11.6541 16.04 11.5591 15.9678 11.5151C15.8398 11.4373 15.7588 11.4353 12.3711 11.4353L8.90625 11.4351L8.90625 9.62646L8.90625 7.81812L10.1514 7.81812L11.3965 7.81812L11.3975 8.20996ZM15.0439 16.6567C15.0332 20.6418 15.0322 20.6736 14.9502 20.7837C14.9043 20.8447 14.8174 20.9321 14.7568 20.9775C14.6455 21.0603 14.6396 21.0605 8.98633 21.0605C3.33301 21.0605 3.32715 21.0603 3.21582 20.9775C3.1543 20.9321 3.06738 20.8447 3.02246 20.7837C2.93945 20.6736 2.93945 20.6418 2.92871 16.6567L2.91797 12.6409L8.98633 12.6409L15.0547 12.6409L15.0439 16.6567ZM5.66113 13.9265C5.40625 14.082 5.37012 14.1973 5.37012 14.863C5.37012 15.5259 5.42969 15.9031 5.61035 16.3677C5.95801 17.2671 6.77148 18.0808 7.6709 18.4292C8.50098 18.7507 9.4707 18.7507 10.3018 18.4292C11.2002 18.0808 12.0137 17.2671 12.3623 16.3677C12.542 15.9031 12.6025 15.5259 12.6025 14.863C12.6016 14.3406 12.5918 14.2524 12.5225 14.1375C12.2881 13.7537 11.7139 13.749 11.4824 14.1294C11.4209 14.2295 11.4033 14.3645 11.3857 14.863C11.3721 15.2686 11.3418 15.5486 11.2969 15.6951C11.0449 16.5115 10.4268 17.124 9.60938 17.3672C9.28516 17.4634 8.6875 17.4634 8.36328 17.3672C7.5459 17.124 6.92676 16.5115 6.67578 15.6951C6.63086 15.5486 6.60059 15.2686 6.58594 14.863C6.56836 14.3645 6.55078 14.2295 6.49023 14.1294C6.38379 13.9539 6.1875 13.8467 5.97266 13.8467C5.86328 13.8467 5.74023 13.8782 5.66113 13.9265Z"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default BasketIcon;
