// first tutorial test
// module.exports = function(){
//     return "hello";
// }

module.exports = {

    concater: function(inputStr){
        if(inputStr==null){
            return "Provide Non-null values"
        }
        if(inputStr.trim()==''){
            return "Provide Non-empty values"
        }
        return inputStr+inputStr;
    },

    addNumbers: function(value1, value2){
        return value1+value2;
    },

    factorial: function(factNumber){
        if(factNumber<0){
            return -1;
        }

        if(factNumber==0){
            return 1;
        }

        var result =1;
        for(let index=1;index<=factNumber;index++){
            result=result*index;
        }
        return result;
    }

}