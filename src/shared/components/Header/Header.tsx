import Form from "../Form/Form"
import Input from "../Input/Input"

const Header = () => {
    return (
        <div className="container">
            <header className="container__header">
                <h1 className="container__header__logo">Video Catalog</h1>

                <Form>
                    <Input type="text" value="" placeholder="Digite o nome do filme" name="search" className="input__group__search" onChange={() => {}} />
                </Form>

                <div className="container__header__account">
                    <img src="" alt="Perfil do usuário" className="container__header__account__photo" />
                    <span className="container__header__account__name"></span>
                </div>
            </header>
        </div>    
    )
}   

export default Header 