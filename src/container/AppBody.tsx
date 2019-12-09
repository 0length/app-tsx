import React, { ReactNode } from 'react';
// import './AppBody.css';
const AppBody: React.FC<{ header:string, quote?:string, children:ReactNode}> = ({
    header,
    quote,
    children
}) => (
    <section className="app-body">
        <section className="body-constent">
            <h2>{header}</h2>
                {quote && <blockquote>{quote}</blockquote>}
        </section>
        {children && children}
    </section>
)

export default AppBody;