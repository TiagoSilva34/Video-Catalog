import { FormProps } from "./Form.interface";

const Form: React.FC<FormProps> = ({ children }) => {
    return (
        <form className="form_control">
            {children}
        </form>
    );
}

export default Form;
