function labels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}

function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;
}

function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
}

var firstname=labels("label","for","firstname","Firstname");
var br=linebreak("br");
var inputs1=inputs("input","type","firstname","name","firstname","id","firstname");
var br1=linebreak("br");
var br2=linebreak("br");

var middlename=labels("label","for","middlename","Middlename");
var br3=linebreak("br");
var inputs2=inputs("input","type","middlename","name","middlename","id","middlename");
var br4=linebreak("br");
var br5=linebreak("br");

var lastname=labels("label","for","lastname","Lastname");
var br6=linebreak("br");
var inputs3=inputs("input","type","lastname","name","lastname","id","lastname");
var br7=linebreak("br");
var br8=linebreak("br");

var email=labels("label","for","email","Email");
var br9=linebreak("br");
var input=inputs("input","type","email","name","email","id","email");
var br10=linebreak("br");
var br11=linebreak("br");

var password=labels("label","for","password","Password");
var br12=linebreak("br");
var input1=inputs("input","type","password","name","password","id","password");



document.body.append(firstname,br,inputs1,br1,br2,middlename,br3,inputs2,br4,br5,lastname,br6,inputs3,br7,br8,email,br9,input,br10,br11,password,br12,input1);