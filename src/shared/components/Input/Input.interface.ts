export interface InputProps {
    type: string
    value: string
    placeholder: string
    name: string
    className: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}