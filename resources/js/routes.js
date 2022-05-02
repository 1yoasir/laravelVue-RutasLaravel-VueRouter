
const Mostrar = ()=> import('./components/MostrarComponent.vue');
const Editar = () => import('./components/EditarComponent.vue');
const Crear = () => import('./components/CrearComponent.vue');
const Bienvenida = () => import ('./components/Bienvenida.vue')



export const routes = [
    {
        name: 'mostrarNotas',
        path: '/notas',
        component: Mostrar
    },
    {
        name: 'crearNota',
        path: '/notas/crear',
        component: Crear
    },
    {
        name: 'editarNota',
        path: '/editar/:id',
        component: Editar
    },
    {
        name: 'bienvenida',
        path: '/',
        component: Bienvenida
    }
]