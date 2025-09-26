import React from 'react';

interface IconProps {
  className?: string;
}

const CartIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}
        aria-hidden="true"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.095-.828l2.91-6.833c.123-.288-.043-.623-.343-.623H6.11M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export default CartIcon;
