let num = [ 8 , 1 , 7 , 4 , 2, 9 ]
num.push(3)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor nao foi encontrado!')

}else{
    console.log(`O valor esta na posiçao ${pos}`)
}

