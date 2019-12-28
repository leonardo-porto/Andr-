let ex1 = document.getElementById('ex1')
let ex2 = document.getElementById('ex2')
let ex3 = document.getElementById('ex3')
let ex4 = document.getElementById('ex4')
let video1 = document.getElementById('video1')
let video2 = document.getElementById('video2')
let titulo1 = document.getElementById('titulo1')
let titulo2 = document.getElementById('titulo2')
let download = document.getElementById('download')

video1.style.display = 'none'
video2.style.display = 'none'
titulo1.style.display = 'none'
titulo2.style.display = 'none'
download.style.display = 'none'



let tituloDia = document.getElementById('tituloDia')
let botaoBuscar = document.getElementById('botaoBuscar')
let dia = document.getElementById('dia')



botaoBuscar.onclick = function () {

    if (dia.value == 'dia1') {

        tituloDia.innerHTML = 'Dia 1 - André Carvalho'

        ex1.innerHTML = '10 min cromatismo 1423 em semínima e colcheia'
        ex2.innerHTML = '10 min 5 shapes da pentatônica m7 em semínima e colcheia - Cm'
        ex3.innerHTML = '20 min ler e praticar a melodia de “Mr. Pc”'
        ex4.innerHTML = '20 min ler e praticar a harmonia de “Mr. Pc”'
        video1.style.display = 'block'
        video2.style.display = 'block'
        titulo1.style.display = 'block'
        titulo2.style.display = 'block'
        download.style.display = 'block'




    } else if (dia.value == 'dia2') {

        tituloDia.innerHTML = 'Dia 2 - André Carvalho'

        ex1.innerHTML = '10 min cromatismo 4132 em semínima e colcheia'
        ex2.innerHTML = '10 min 5 shapes da pentatônica m6 em semínima e colcheia - Cm'
        ex3.innerHTML = '20 min praticar a melodia de “Mr. Pc” e improvisar sobre a base (penta Cm7)'
        ex4.innerHTML = '20 min praticar os arpejos de Cm7, Eb7M, Fm7 e G7'

        video1.style.display = 'none'
        video2.style.display = 'none'
        titulo1.style.display = 'none'
        titulo2.style.display = 'none'
        download.style.display = 'none'



    } else if (dia.value == 'dia3') {

        tituloDia.innerHTML = 'Dia 3 - André Carvalho'

        ex1.innerHTML = '10 min cromatismo 1324 em semínima e colcheia'
        ex2.innerHTML = '10 min 5 shapes da pentatônica M7 em semínima e colcheia - F'
        ex3.innerHTML = '20 min praticar a melodia de “Mr. Pc” e improvisar sobre a base (penta Cm7 + Arpejos de Cm7 e Eb7M)'
        ex4.innerHTML = '20 min praticar os arpejos de Cm7, Eb7M, Fm7 e G7'
        video1.style.display = 'none'
        video2.style.display = 'none'
        titulo1.style.display = 'none'
        titulo2.style.display = 'none'
        download.style.display = 'none'

    } else if (dia.value == 'dia4') {

        tituloDia.innerHTML = 'Dia 4 - André Carvalho'

        ex1.innerHTML = '10 min cromatismo 3241 em semínima e colcheia'
        ex2.innerHTML = '15 min 7 shapes da escala de Cm dórico (Bb maior) em semínima e colcheia'
        ex3.innerHTML = '20 min praticar a melodia de “Mr. Pc” e improvisar sobre a base (Cm dórico sobre Cm7 e penta de Cm no restante da base)'
        ex4.innerHTML = '20 min praticar os arpejos de Cm7, Eb7M, D7 e G7'
        video1.style.display = 'none'
        video2.style.display = 'none'
        titulo1.style.display = 'none'
        titulo2.style.display = 'none'
        download.style.display = 'none'

    } else if (dia.value == 'dia5') {

        tituloDia.innerHTML = 'Dia 5 - André Carvalho'

        ex1.innerHTML = '10 min cromatismo 2413 em semínima e colcheia'
        ex2.innerHTML = 'Leitura das págs (0 - 16) do livro “Acordes, arpejos e escalas” (Google Drive)'
        ex3.innerHTML = 'Ler e praticar o estudo de arpejo da pág 45 do livro'
        ex4.innerHTML = 'Gravar e enviar o estudo de arpejos'
        video1.style.display = 'none'
        video2.style.display = 'none'
        titulo1.style.display = 'none'
        titulo2.style.display = 'none'
        download.style.display = 'none'

    } else if (dia.value == 'dia6') {

        tituloDia.innerHTML = 'Dia 6 - André Carvalho'

        ex1.innerHTML = '10 min cromatismo 4213 em semínima e colcheia'
        ex2.innerHTML = 'Gravar improviso sobre uma backingtrack qualquer em Cm.'
        ex3.innerHTML = 'Gravar os formatos da penta de Cm6'
        ex4.innerHTML = 'Gravar os formatos de C dórico (7 shapes de Bb maior sobre uma backing track em C dorian)'
        video1.style.display = 'none'
        video2.style.display = 'none'
        titulo1.style.display = 'none'
        titulo2.style.display = 'none'
        download.style.display = 'none'
    } else if (dia.value == 'dia7') {

        tituloDia.innerHTML = 'Dia 7 - André Carvalho'

        ex1.innerHTML = '10 min cromatismo 2314 em semínima e colcheia'
        ex2.innerHTML = '10 min 5 shapes da pentatônica m7 em colcheia e semicolcheia - Gm'
        ex3.innerHTML = 'Transpôr a melodia de “Mr. PC” para Gm (uma corda abaixo, mais grave)'
        ex4.innerHTML = 'Transpôr a harmonia de “Mr. PC” para Gm (cada acorde uma quinta acima, 3 tons e meio)'
        video1.style.display = 'none'
        video2.style.display = 'none'
        titulo1.style.display = 'none'
        titulo2.style.display = 'none'
        download.style.display = 'none'

    } else if (dia.value == 'dia8') {

        tituloDia.innerHTML = 'Dia 8 - André Carvalho'

        ex1.innerHTML = '10 min cromatismo 2134 em colcheia e semicolcheia'
        ex2.innerHTML = '10 min 5 shapes da pentatônica m6 em semínima e colcheia - Gm'
        ex3.innerHTML = '20 min praticar os 7 shapes de F maior'
        ex4.innerHTML = '20 min de improvisação sobre uma backing track em Gm dórico (penta de Gm6 + G dórico - F maior)'
        video1.style.display = 'none'
        video2.style.display = 'none'
        titulo1.style.display = 'none'
        titulo2.style.display = 'none'
        download.style.display = 'none'
    } else if (dia.value == 'dia9') {

        tituloDia.innerHTML = 'Dia 9 - André Carvalho'

        ex1.innerHTML = '10 min cromatismo 4123 em colcheia e semicolcheia'
        ex2.innerHTML = '10 min padrão 3 em 3 da escala de G maior'
        ex3.innerHTML = '20 min mudar o padrão estudado em G e praticar em C dórico (Bb maior)'
        ex4.innerHTML = '20 min de improviso e aplicação do padrão estudado em uma base em Cm dórico'
        video1.style.display = 'none'
        video2.style.display = 'none'
        titulo1.style.display = 'none'
        titulo2.style.display = 'none'
        download.style.display = 'none'
    } else if (dia.value == 'dia10') {

        tituloDia.innerHTML = 'Dia 10 - André Carvalho'

        ex1.innerHTML = '10 min cromatismo 4321 em colcheia e semicolcheia'
        ex2.innerHTML = '10 min padrão 4 em 4 da escala de G maior'
        ex3.innerHTML = '20 min mudar o padrão estudado em G e praticar em Eb maior (Eb F G Ab Bb C D Eb)'
        ex4.innerHTML = '20 min de improviso e aplicação do padrão estudado em uma base em Fm dórico (Eb maior)'
        video1.style.display = 'none'
        video2.style.display = 'none'
        titulo1.style.display = 'none'
        titulo2.style.display = 'none'
        download.style.display = 'none'
    }

}



let botao = document.getElementById('botao')

botao.onclick = function () {

    window.location = 'https://www.swiss-jazz.ch/standards-jazz/Mr.PC.pdf'

}