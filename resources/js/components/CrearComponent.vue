<template>
    <div>
        <form @submit.prevent="agregar">
                <h3>Agregar Nota</h3>
                <input type="text" placeholder="Nombre" 
                class="form-control mb-2" v-model="nota.nombre">

                <input type="text" placeholder="Descripcion"
                class="form-control mb-2" v-model="nota.descripcion">

                <button type="submit" class="btn btn-primary">Agregar</button>
        </form>
        <router-link :to='{name:"mostrarNotas"}' class="btn btn-danger btn-block">Cancelar</router-link>
    </div>
</template>

<script>
export default {
    name: "crear-nota",
    data: () => {
        return ({
            notas: [],
            nota: {nombre: '', descripcion: ''},
            editarActivo: false
        })
    },
    methods: {
        agregar(){
            if(this.nota.nombre === '' || this.nota.descripcion === ''){
                alert('Debes completar todos los campos antes de guardar')
                return;
            }
            const params = {
                nombre: this.nota.nombre, 
                descripcion: this.nota.descripcion
            };
            
            axios.post('/notas', params)
            .then(res => {
                this.$router.push({name:"mostrarNotas"})
            });
        },
        
    }
}
</script>