<template>
    <div>
        <form @submit.prevent="editarNota(nota)">
            <h3>Editar Nota</h3>
            <input type="text" placeholder="Nombre" 
            class="form-control mb-2" v-model="nota.nombre">

            <input type="text" placeholder="Descripcion"
            class="form-control mb-2" v-model="nota.descripcion">

            <button class="btn btn-primary btn-sm">Guardar</button>
            <router-link :to='{name:"mostrarNotas"}' class="btn btn-danger btn-block btn-sm">Cancelar</router-link>
        </form>
        
    </div>
</template>

<script>
export default {
    name: 'editarNota',
    data(){
        return{
            nota:{
                nombre: "",
                descripcion: ""
            }
        }
    },
    mounted(){
        this.mostrarNota()
    },
    methods: {
        mostrarNota(){
            axios.get(`/notas/${this.$route.params.id}`)
            .then(response => {
                const {nombre, descripcion} = response.data;
                this.nota.nombre = nombre;
                this.nota.descripcion = descripcion;
            })
        },
        editarNota(nota){
            const params = {nombre: nota.nombre, descripcion: nota.descripcion}
            axios.put(`/notas/${this.$route.params.id}`, params)
                .then(res => {
                    this.$router.push({
                        name: "mostrarNotas"
                    });
                    
                })
        },
    }
}
</script>