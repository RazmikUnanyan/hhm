'use client';

import styles from './Button.module.css';
import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
    return (
        <button
            className={clsx(styles.baseBtn, styles[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};
