<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> 

<script>
    function stringToDate(str){

    }



    export default{
        data(){
            return{
                flightType:'one-way flight',
                departureDate:'',
                returnDate:'',
                
            }
        },
        computed:{

        },
        methods: {
            
        },
    }
</script>
<template>
    <div>
        <select name="" id="">
        <option value=""></option>
        <option value=""></option>
    </select>
    <input type="date" >
    <input type="date" :disabled="false">
    <button :disabled="false">Book</button>
    <p>提示</p>
    </div>
</template>
<style >
    select,
input,
button {
  display: block;
  margin: 0.5em 0;
  font-size: 15px;
}

input[disabled] {
  color: #999;
}

p {
  color: red;
}
</style>