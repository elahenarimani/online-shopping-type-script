interface IButtonParameter {
    children: string | JSX.Element;
    onClickHandler: Function;
    className?: string;
    disabled?: any
  }
  function Button({ onClickHandler, children, className ,disabled}: IButtonParameter) {
    return (
      <div>
        <button onClick={() => onClickHandler()} className={className} >
          {children}
        </button>
      </div>
    );
  }
  export default Button;