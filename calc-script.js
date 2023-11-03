var result = document.getElementById("output");
var expression="";
document.body.addEventListener("click", function(event) {
    if (event.target.classList.contains("num") || event.target.classList.contains("operator")) {
        // Check if the clicked element is a number or operator
        result.textContent = result.textContent + event.target.textContent;
        expression =expression + event.target.textContent;
    }
    else if(event.target.classList.contains("clear-all")) {
        // Check if the clicked element is a clear all button
        result.textContent = null;
        expression = "";
    }
    else if(event.target.classList.contains("clear")) {
        // Check if the clicked element is a clear button
        result.textContent = result.textContent.substring(0,result.textContent.length-1);
        expression = expression.substring(0,expression.length-1);
    }
    else if(event.target.classList.contains("pi-e")) {
        var str;
        switch(event.target.textContent){
            case 'e':str=2.71828183;
            if(parseInt(result.textContent.charAt(result.textContent.length-1))>=0 && parseInt(result.textContent.charAt(result.textContent.length-1))<=9)
        {
            expression+="*"+str;
        }
        else
        expression += str;
            result.textContent+='e';break;
            case 'π': str= 3.14159265;
            if(parseInt(result.textContent.charAt(result.textContent.length-1))>=0 && parseInt(result.textContent.charAt(result.textContent.length-1))<=9)
        {
            expression+="*"+str;
        }
        else
        expression += str;
            result.textContent+='π';break;
        }
    }
   else if (event.target.classList.contains("root")) {
        // Check if the clicked element is a number or operator
        result.textContent = result.textContent + event.target.textContent;
        expression+= event.target.textContent;
    }
    else  if (event.target.classList.contains("fact")) {
        // Check if the clicked element is a number or operator
        result.textContent = result.textContent + '!';
        var p="",i=2;
        result.textContent = result.textContent.trim();
            while(parseInt(result.textContent.charAt(result.textContent.length-i))>=0 && parseInt(result.textContent.charAt(result.textContent.length-i))<=9 && (result.textContent.length-i>=0))
            {
                p=result.textContent.charAt(result.textContent.length-i)+p;
                
                i++;
            }
            if(p.length<1)
            {
                result.textContent = "Error";
                expression= "";
            }
        var f=1;  
        for(i=1;i<=parseInt(p);i++)
        {
            f*=i;
        } 
        expression=expression.slice(0,-(p.length));
        expression+=f;
    }
    else if (event.target.classList.contains("pow")) {
        // Check if the clicked element is a number or operator
        result.textContent = result.textContent + event.target.textContent;
        expression += event.target.textContent;
    }
    
    

    
    else if(event.target.classList.contains("equals")) {
        // Check if the clicked element is an equals 
        try {
            for(i=0;i<result.textContent.length;i++)
            {
                if((result.textContent.charAt(i)=="e" || result.textContent.charAt(i)=="π") && ((parseInt(result.textContent.charAt(i+1))>=0 && parseInt(result.textContent.charAt(i+1))<=9)))
                {
                    result.textContent = "Error";
                    expression= "";
                    result.textContent = "Error";
                    break;

                }
            }
            if(result.textContent.indexOf("^")>0){            var a="",b="",c=1,d=1,index="";
            result.textContent = result.textContent.trim();
            index=result.textContent.indexOf("^");
                while(parseInt(result.textContent.charAt(index-c))>=0 && parseInt(result.textContent.charAt(index-c))<=9 && (index-c>=0))
                {
                    a=result.textContent.charAt(index-c)+a;
                    c++;
                }
                while(parseInt(result.textContent.charAt(index+d))>=0 && parseInt(result.textContent.charAt(index+d))<=9 && (index+d<result.textContent.length))
                {
                    b=result.textContent.charAt(index+d)+b;
                    d++;
                }
                if(b.length<1)
                {
                    result.textContent = "Error";
                    expression= "";
                }
            expression=expression.replace(a+"^"+b,Math.pow(parseInt(a),parseInt(b)));
            console.log(expression);
            }
            if(result.textContent.indexOf("√")>0){
            var a="",b="",c=1,d=1,index="";
            result.textContent = result.textContent.trim();
            console.log(result.textContent);
            index=result.textContent.indexOf("√");
            console.log(index);
                while(parseInt(result.textContent.charAt(index+d))>=0 && parseInt(result.textContent.charAt(index+d))<=9 && (index+d<result.textContent.length))
                {
                    b=result.textContent.charAt(index+d)+b;
                    d++;
                }
                if(b.length<1)
                {
                    result.textContent = "Error";
                    expression= "";
                }
                if(index>0 && parseInt(result.textContent.charAt(index-1))>=0 && parseInt(result.textContent.charAt(index-1))<=9){
                    expression=expression.replace("√"+b,"*"+Math.sqrt(parseInt(b)));
                }
                else{
            expression=expression.replace("√"+b,Math.sqrt(parseInt(b)));
                }
            console.log(expression);
        }
            result.textContent = eval(expression);
        } catch (error) {
            result.textContent = "Error";
            expression= "";
        }
    }
});