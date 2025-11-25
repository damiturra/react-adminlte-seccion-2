import React from 'react';
import NavBarPrincipal from './components/navbar';
import Sidemenu from './components/sidemenu';
import Perfil from './components/perfil';


function PerfilUsuario() {
    return (
        <div>
            <NavBarPrincipal />
            <Sidemenu />
            <Perfil/>            
        </div>

    );
}

export default Usuarios;