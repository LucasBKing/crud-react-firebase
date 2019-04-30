export const urls = {
    home: {name: 'Home', path:'/', component:'Welcome'},
    data: {name: 'Data', path:'/data', component: 'DataTable'},
    add: {name: 'Add', path:'/add', component: 'Add'}
}

export const privateUrls = {
    edit: { 
        name: 'Edit',
        path:'/edit/:id',
        pathWithouParam:'/edit/'
    }
};