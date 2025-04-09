// const randomNumber = Math.random() * 10;
        // // console.log(randomNumber);

        // // round 9.5=10 and 9.4=9
        // const roundOf=Math.round(randomNumber);
        // console.log("round  "+roundOf);
        // // ceil 9.1=10 and 9.5=10
        // const ceilOf=Math.ceil(randomNumber);
        // console.log("ceil   "+ ceilOf);
        // // floor 9.9=9 and 9.1=10
        // const floor=Math.floor(randomNumber);
        // console.log("floor  "+floor);
        // const fixed=randomNumber.toFixed(2);
        // console.log("To Fixed   "+fixed);



        // logical operation 
        // const nationality="Pakistan";
        // const age=18;
        // const and= age >=18 && nationality =="pakistan";
        // console.log(and);

        // const OR= age >=18 || nationality =="pakistan";
        // console.log(OR);

        // const not =false;
        // console.log(!not);


        // condition statment 
        // const marks=parseInt(prompt("Enter your marks: "));
        // if(marks>0 && marks<=100){
        //     if(marks>=90){
        //         console.log("Grade A");
        //     }
        //     else if(marks>=80){
        //         console.log("Grade B");
        //     }
        //     else if(marks>=70){
        //         console.log("Grade c");
        //     }
        //     else if(marks>=60){
        //         console.log("Grade D");
        //     }
        //     else if(marks>=50){
        //         console.log("Grade E");
        //     }
        //     else{
        //         console.log("Failed")
        //     }
        // }
        // else {
        //     console.log("Invalid marks");
        // }
    
        
        // Gussing number game 

        // const num=parseInt(prompt("Enter your number: "));
        // const computerNum=Math.random()*10;
        // const computerRound=Math.round(computerNum);
        // if(num>0 && num<=10){
        //     if(num == computerRound){
        //         // console.log("User number: "+num+"\n"+"Computer number: "+computerRound);
        //         alert("User guss number same with computer number");
        //     }
        //     else if(num<computerRound){
        //         alert("guess number is to low try agian")
        //     }
        //     else if(num>computerRound){
        //         alert("guess number is to high try agian")
        //     }
        //     else{
        //         // console.log("User number: "+num+"\n"+"Computer number: "+computerRound);
        //         alert("gusses number wrong try again");
        //     }
        // }
        // else {
        //     alert("invalid guess number");
        // }



        // simple calculator

        const num1=parseInt(prompt("Enter first number: "));
        const operation=prompt("Enter oprator :");
        const num2=parseInt(prompt("Enter second number"));

        if(operation==="+"){
            console.log("sum is: "+(num1+num2));
        }
        else if(operation==="-"){
            console.log("subtraction is: "+(num1-num2));
        }
        else if(operation==="٭"){
            console.log("Mul is: "+(num1*num2));
        }
        else if(operation==="/"){
            console.log("Divid is: "+(num1/num2));
        }
        else{
            console.log("invalid operation")
        }