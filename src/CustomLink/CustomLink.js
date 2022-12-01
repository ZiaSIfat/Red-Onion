import React from 'react';
import { useMatch, useResolvedPath, Link } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link style={{ borderBottom: match ? '2px solid rgb(220, 117, 117)' : 'none' }}
                to={to}
                {...props}>

                {children}
            </Link>
        </div>
    );
};

export default CustomLink;