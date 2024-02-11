import { FormEvent, useRef } from 'react';
import "./Header.css";
import { SEARCH_PLACEHOLDER } from '../../Flight.interface';
import { CONSTANTS } from '../../Constants';

interface InputFieldProps {
    placeholder: string
    type: string
    category: SEARCH_PLACEHOLDER
    id: string
    handleOnChange: (type: SEARCH_PLACEHOLDER, value: string) => void
}

interface HeaderProps {
    handleOnSubmit: (event: FormEvent) => void
}

const InputField = ({ placeholder, category, type, id, handleOnChange }: InputFieldProps) => {

    return (
        <div className="field">
            <input
                onChange={(event) => handleOnChange(category, event.target.value)}
                required
                id={id}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export const Header = ({ handleOnSubmit }: HeaderProps) => {
    const fromRef = useRef<string>()
    const toRef = useRef<string>()
    const dateRef = useRef<string>()
    const passengersRef = useRef<string>()


    const handleOnChange = (category: SEARCH_PLACEHOLDER, value: string) => {
        if (category === SEARCH_PLACEHOLDER.FROM) {
            fromRef.current = value
        } else if (category === SEARCH_PLACEHOLDER.TO) {
            toRef.current = value
        } else if (category === SEARCH_PLACEHOLDER.DATE) {
            dateRef.current = value
        } else if (category === SEARCH_PLACEHOLDER.PASSENGERS) {
            passengersRef.current = value
        }
    }
    return (
        <div className="header-logo-container">
            <div className="company-name">{CONSTANTS.COMPANY_LOGO}</div>
            <div className="header-container">
                <form className='input-wrap' onSubmit={handleOnSubmit}>
                    <InputField placeholder='From...' type='text' id="1" category={SEARCH_PLACEHOLDER.FROM} handleOnChange={handleOnChange} />
                    <InputField placeholder='To...' type='text' id="2" category={SEARCH_PLACEHOLDER.TO} handleOnChange={handleOnChange} />
                    <InputField placeholder='Date' type='date' id="3" category={SEARCH_PLACEHOLDER.DATE} handleOnChange={handleOnChange} />
                    <InputField placeholder='Passengers...' type='number' id="4" category={SEARCH_PLACEHOLDER.PASSENGERS} handleOnChange={handleOnChange} />
                    <input className='custom-button' type='submit' />
                </form>
            </div>
        </div>

    )
}