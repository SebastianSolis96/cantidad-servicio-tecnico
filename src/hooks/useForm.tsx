import { ChangeEvent, useState } from 'react';

type Form = {
    start: string,
    end: string,
    start2: string,
    end2: string,
}

export const useForm = ( initialState: Form ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        
        if( target.type === 'checkbox' ){
            setValues({
                ...values,
                [target.name]: target.checked /* Esto se llama computar: Crea una nueva propiedad y el contenido de [objeto.propiedad] será el nombre de la propiedad */
            });
        }else{
            setValues({
                ...values,
                [target.name]: target.value /* Esto se llama computar: Crea una nueva propiedad y el contenido de [objeto.propiedad] será el nombre de la propiedad */
            });
        }
    };

    return {
        values, 
        handleInputChange,
        reset
    };
    
};