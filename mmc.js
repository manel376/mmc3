let numero1 
let numero2 
let maior;
let mmc;

console.log("digite o primeiro numero");
process.stdin.on('data', function (data){
    if (!numero1){
        numero1 = data.toString().trim();
        
        console.log ("digite o segundo numero")
    } else if(!numero2){
        numero2 = data.toString().trim();
        if(numero1>=numero2){
            maior = numero1;
        } else{
            maior=numero2
        }
        for(let i = maior; i <= numero1*numero2; i++){
            if (i%numero1==0 && i%numero2==0){
                mmc = i;
            }                                                                        
        }
        console.log ("O mmc é " + mmc);
        process.exit()
    }
})