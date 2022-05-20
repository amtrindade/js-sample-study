function getDayWeekText(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaText = '';
            return diaSemanaTexto;
    }
    return diaSemanaTexto;
}

const data = new Date('1976-04-22 00:00:00');
const dayOfWeek = data.getDay();
const diaSemanaTexto = getDayWeekText(dayOfWeek);

console.log(dayOfWeek, diaSemanaTexto);