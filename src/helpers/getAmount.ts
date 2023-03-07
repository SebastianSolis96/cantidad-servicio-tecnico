export default function getAmount( start: string, end: string, start2: string, end2: string ): string | undefined {
    // Expresión regular para comprobar formato
    const hourFormat = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        
    // Si algún valor no tiene formato correcto sale
    if (!(start.match(hourFormat)   &&  end.match(hourFormat) && 
        start2.match(hourFormat)  &&  end2.match(hourFormat))) return;

    /* Llamar a una función dependiendo de si hay dos o cuatro horas */
    if( start2 === '00:00' && end2 === '00:00' ){
        return getHoursAndMinutes( start, end );  
    }else{
        return (parseFloat(getHoursAndMinutes( start, end )!) + parseFloat(getHoursAndMinutes( start2, end2 )!)) + '';
    }
}

const getHoursAndMinutes = (start: string, end: string): string | undefined => {
    // Calcula los minutos de cada hora
    const startMinutes: string = start.split(':')
        .reduce((p, c) => parseInt(p) * 60 + parseInt(c) + '');
    const endMinutes: string = end.split(':')
        .reduce((p, c) => parseInt(p) * 60 + parseInt(c) + '');

    // Si la hora final es anterior a la hora inicial sale
    if (parseInt(endMinutes) < parseInt(startMinutes)) return;

    // Diferencia de minutos
    const subtraction: number = parseInt(endMinutes) - parseInt(startMinutes);

    // Cálculo de horas y minutos de la diferencia
    const hours: number = Math.floor(subtraction / 60);
    const minutes: number = subtraction % 60;

    const amountInTime: string = hours + ':' + (minutes < 10 ? '0' : '') + minutes;
    const quantity: string = getAmountInQuantity( amountInTime );

    return quantity;
}

const getAmountInQuantity = (amountInTime: string): string => {
    const hoursArr: string[] = amountInTime.split(':');
    const hours: number = parseInt(hoursArr[0]);
    const minutes: number = parseInt(hoursArr[1]);
    const quantity = (hours + (minutes / 60)).toFixed(2) + ''; 

    return quantity;
}