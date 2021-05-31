<template>
    <button class="request-access">
        {{text}}
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props:{
            text:String,
            color:String
        }
    }

</script>
<style>
.request-access {
    background-color: #EDF3F8;
    border: 1px solid #36536b;
    color: #36536b;
    height: 48px;
    width: 200px;
    border-radius: 48px;
    margin-top: 25px;
     font-weight:500
}
.request-access:hover{
    background: #36536b;
    color:#EDF3F8;
    font-weight:500
}.request-access:focus{
    outline: none;
}
</style>