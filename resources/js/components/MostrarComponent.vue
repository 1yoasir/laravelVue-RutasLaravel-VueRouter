<template>
    <div class="row" v-if="isAuthenticated">
        <div class="col-lg-12 mb-4">
            <router-link :to='{name:"crearNota"}' class="btn btn-success btn-block">Crear Nota</router-link>
            <hr class="mt-3">
        <h3>Listado de notas</h3>
        <ul class="list-group my-2">
            <li class="list-group-item"
            v-for="(item, index) in notas" :key="index">
                <span class="badge bg-primary" style="float:right">
                    {{item.updated_at}}
                </span>
            
                <p>{{item.nombre}}</p>
                <p>{{item.descripcion}}</p>

                <button class="btn btn-danger btn-sm"
                @click="eliminarNota(item, index)">Eliminar</button>

                <router-link :to='{name: "editarNota", params:{id: item.id}}' class="btn btn-warning text-white btn-sm">Editar</router-link>
            </li>
        </ul>
        </div>
    </div>
    <div class="card-body" v-else>
        <h1>Es necesario que te verifiques</h1>
        <router-link :to='{name:"bienvenida"}' class="btn btn-primary">Hacer login</router-link>
    </div>
</template>

<script>
export default {
    name: "mostrarNotas",
    data: () => {
        return ({
            notas: [],
            nota: {nombre: '', descripcion: ''},
        })
    },
    created (){
        axios.get('/notas')
        .then(res => {
            this.notas = res.data;
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
                this.notas.push(res.data);
            });
            this.nota.nombre = '';
            this.nota.descripcion = '';
        },
        eliminarNota(item, index) {
            if(confirm("Confirma que quieres eliminar el registro")){
                axios.delete(`/notas/${item.id}`)
                .then(res => {
                    this.notas.splice(index, 1);
                });
            }
            
        },
    }
}
</script>