let ex1 = document.getElementById('ex1')
let ex2 = document.getElementById('ex2')
let ex3 = document.getElementById('ex3')
let ex4 = document.getElementById('ex4')



let tituloDia = document.getElementById ('tituloDia')
let botaoBuscar = document.getElementById('botaoBuscar')
let dia = document.getElementById('dia')

botaoBuscar.onclick = function () {

    if(dia.value == 'dia1'){

        tituloDia.innerHTML = 'Dia 1 - André Carvalho'

        ex1.innerHTML =  '10 min cromatismo 1423 em semínima e colcheia'
        ex2.innerHTML =  '10 min 5 shapes da pentatônica m7 em semínima e colcheia - Cm'
        ex3.innerHTML =  '20 min ler e praticar a melodia de “Mr. Pc”'
        ex4.innerHTML =  '20 min ler e praticar a harmonia de “Mr. Pc”'


        

    } else if(dia.value == 'dia2'){

        tituloDia.innerHTML = 'Dia 2 - André Carvalho'
        
        ex1.innerHTML =  '10 min cromatismo 4132 em semínima e colcheia'
        ex2.innerHTML =  '10 min 5 shapes da pentatônica m6 em semínima e colcheia - Cm'
        ex3.innerHTML =  '20 min praticar a melodia de “Mr. Pc” e improvisar sobre a base (penta Cm7)'
        ex4.innerHTML =  '20 min praticar os arpejos de Cm7, Eb7M, Fm7 e G7'

        

    } else if(dia.value == 'dia3'){

        tituloDia.innerHTML = 'Dia 3 - André Carvalho'

        ex1.innerHTML =  '10 min cromatismo 1324 em semínima e colcheia'
        ex2.innerHTML =  '10 min 5 shapes da pentatônica M7 em semínima e colcheia - F'
        ex3.innerHTML =  '20 min praticar a melodia de “Mr. Pc” e improvisar sobre a base (penta Cm7 + Arpejos de Cm7 e Eb7M)'
        ex4.innerHTML =  '20 min praticar os arpejos de Cm7, Eb7M, Fm7 e G7'

    } else if(dia.value == 'dia4'){

        tituloDia.innerHTML = 'Dia 4 - André Carvalho'

        ex1.innerHTML =  ''
        ex2.innerHTML =  ''
        ex3.innerHTML =  ''
        ex4.innerHTML =  ''

    } else if(dia.value == 'dia5'){

        tituloDia.innerHTML = 'Dia 5 - André Carvalho'

        ex1.innerHTML =  ''
        ex2.innerHTML =  ''
        ex3.innerHTML =  ''
        ex4.innerHTML =  ''

    } else if(dia.value == 'dia6'){

        tituloDia.innerHTML = 'Dia 6 - André Carvalho'

        ex1.innerHTML =  ''
        ex2.innerHTML =  ''
        ex3.innerHTML =  ''
        ex4.innerHTML =  ''

    } else if(dia.value == 'dia7'){

        tituloDia.innerHTML = 'Dia 7 - André Carvalho'    

        ex1.innerHTML =  ''
        ex2.innerHTML =  ''
        ex3.innerHTML =  ''
        ex4.innerHTML =  ''

    } else if(dia.value == 'dia8'){

        tituloDia.innerHTML = 'Dia 8 - André Carvalho'

        ex1.innerHTML =  ''
        ex2.innerHTML =  ''
        ex3.innerHTML =  ''
        ex4.innerHTML =  ''

    } else if(dia.value == 'dia9'){

        tituloDia.innerHTML = 'Dia 9 - André Carvalho'

        ex1.innerHTML =  ''
        ex2.innerHTML =  ''
        ex3.innerHTML =  ''
        ex4.innerHTML =  ''

    } else if(dia.value == 'dia10'){

        tituloDia.innerHTML = 'Dia 10 - André Carvalho'

        ex1.innerHTML =  ''
        ex2.innerHTML =  ''
        ex3.innerHTML =  ''
        ex4.innerHTML =  ''

    }
    
}



let botao = document.getElementById('botao')

    botao.onclick = function () {

        window.location = 'https://www.swiss-jazz.ch/standards-jazz/Mr.PC.pdf'

    }