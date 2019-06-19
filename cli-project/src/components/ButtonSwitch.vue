<template>
    <button :class="{'active' : value}" @click="toggle">
        <span v-if="value">Ligado</span>
        <span v-else>Desligado</span>
    </button>
</template>

<script>
export default {
    name: "button-switch",
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        toggle(){
            if (this.value){
                this.$emit("input",false);
            }
            else{
                this.$emit("input",true);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    background-color : red;
    color: white;
    &.active{
        background-color: green;
    }
    &.active:hover{
        background-color: purple;
    }

    &:hover{
        background-color: blue;
    }

}

</style>

