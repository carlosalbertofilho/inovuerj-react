/* eslint-disable react/prop-types */
export const Columns = ({children}) => {
    return <div className="columns">{children}</div>;
};

export const Column = ({children, size}) => {
    return <div className={`column is-${size}`}>{children}</div>;
}