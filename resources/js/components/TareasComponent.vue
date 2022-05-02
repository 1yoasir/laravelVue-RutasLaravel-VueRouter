<template>
    <div>
        <form @submit.prevent="editarNota(nota)" v-if="editarActivo">
            <h3>Editar Nota</h3>
            <input type="text" placeholder="Nombre" 
            class="form-control mb-2" v-model="nota.nombre">

            <input type="text" placeholder="Descripcion"
            class="form-control mb-2" v-model="nota.descripcion">

            <button type="submit" class="btn btn-success">Guardar</button>
            <button type="submit" class="btn btn-danger" @click="cancelarEdit()">Cancelar</button>
        </form>

        <form @submit.prevent="agregar" v-else>
            <h3>Agregar Nota</h3>
            <input type="text" placeholder="Nombre" 
            class="form-control mb-2" v-model="nota.nombre">

            <input type="text" placeholder="Descripcion"
            class="form-control mb-2" v-model="nota.descripcion">

            <button type="submit" class="btn btn-primary">Agregar</button>
        </form>

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

                <button class="btn btn-warning btn-sm"
                @click="editarFormulario(item)">Editar</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => {
        return ({
            notas: [],
            nota: {nombre: '', descripcion: ''},
            editarActivo: false
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
            axios.delete(`/notas/${item.id}`)
                .then(res => {
                    this.notas.splice(index, 1);
                });
        },
        editarFormulario(item){
            this.editarActivo = true;
            this.nota.nombre = item.nombre;
            this.nota.descripcion = item.descripcion;
            this.nota.id = item.id;
        },
        editarNota(item){
            const params = {nombre: item.nombre, descripcion: item.descripcion}
            this.nota = {nombre: '', descripcion: ''};
            axios.put(`/notas/${item.id}`, params)
                .then(res => {
                    this.editarActivo = false;
                    const index = this.notas.findIndex(
                        notaBuscar => notaBuscar.id === res.data.id)
                    this.notas[index].nombre = res.data.nombre;
                    this.notas[index].descripcion = res.data.descripcion;
                })
        },
        cancelarEdit(){
            this.editarActivo = false;
            this.nota = {nombre: '', descripcion: ''};
        }
    }
}
</script>