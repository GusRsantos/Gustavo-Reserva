console.log("Está funcionado")

var array = ["Texto1", 10, 25, null, "Oswaldo", "Texto 2"]

//console.log(array[0])
//console.log(array[1])
//console.log(array[2])

/*
for(var i = 0; i < 5; i++){
console.log(array[i])
}

for(var index in array){
console.log(index)
} */

for(var index of array){
    console.log(index)
}