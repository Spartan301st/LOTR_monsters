// import { ChangeEventHandler } from "react";
import { ChangeEvent } from "react";
import "./search-box.styles.css"
// extend this way
// interface IChangeHandlerProps {
//     onChangeHandler: (a: string) => void;
// }

// interface ISearchBoxProps extends IChangeHandlerProps {
//     className: string;
//     placeholder?: string; // optional with the ? syntax
// }

// // or overload this way 
// interface ISearchBoxProps {
//     className: string;
//     placeholder?: string; // optional with the ? syntax
// }
// // with 2nd definition old and new ones will be combined
// interface ISearchBoxProps {
//     onChangeHandler: (a: string) => void;
// }

// type
type SearchBoxProps = {
    className: string;
    placeholder?: string; // optional with the ? syntax
    // onChangeHandler: (a: string) => void;
    // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

// const SearchBox = ({className, placeholder, onChangeHandler }: ISearchBoxProps) => (
const SearchBox = ({className, placeholder, onChangeHandler }: SearchBoxProps) => (
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)

export default SearchBox;