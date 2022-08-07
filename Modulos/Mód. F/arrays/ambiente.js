let num = [7, 4, 5, 8, 9, 1]
num.sort()
// console.log(`Nosso vetor é o ${num}`)
// console.log(num)

// console.log(`O vetor tem ${num.length} posições!`)
// console.log(num[0])


console.log(num)
let pos = num.indexOf(4)
if(pos == -1){
    console.log('Posição não encontrada')
}else{
    console.log(`O valor está na posição ${pos}`)
}
