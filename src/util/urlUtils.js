export const urls = {
    home: {name: 'Home', path:'/', component:'Welcome'},
    login: {name: 'Login', path:'/login', component:'Login'}
}

export const privateUrls = {
    edit: { 
        name: 'Edit',
        path:'/edit/:id',
        pathWithouParam:'/edit/'
    },
    data: {name: 'Data', path:'/data', component: 'DataTable'},
    add: {name: 'Add', path:'/add', component: 'Add'}
};