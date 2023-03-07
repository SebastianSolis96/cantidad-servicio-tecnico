import { ChangeEvent, ChangeEventHandler, FC } from 'react';

type Props = {
    titleStart: string;
    titleEnd: string;
    nameStart: string;
    valueStart: string;
    nameEnd: string;
    valueEnd: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputCard: FC<Props> = ({ 
    titleStart,
    titleEnd,
    nameStart, 
    valueStart, 
    nameEnd, 
    valueEnd, 
    handleInputChange
}) => {
    return (
        <aside className='inputs-container'>
            <label htmlFor={ nameStart }>{ titleStart }</label>
            <input 
                type='time' 
                name={ nameStart }
                id={ nameStart }
                value={ valueStart }
                onChange={ handleInputChange }
            />

            <label htmlFor={ nameEnd }>{ titleEnd }</label>
            <input 
                type='time'
                name={ nameEnd }
                id={ nameEnd }
                value={ valueEnd }
                onChange={ handleInputChange }
            />
        </aside>
    )
}
