import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login/teladeLogin'
import ListaClientes from '../src/pages/funcionario/listaClientes'
import ListagemEquipamentos from '././pages/empresa/listaEquipamento'
import CadastroCliente from './pages/funcionario/cadastroClientes'
import MeusEquipamentos from './pages/empresa/meusEquipamentos';


import {
  Routes,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

const Routing = (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/ListaClientes" element={<ListaClientes/>}/>
        <Route path="/ListagemEquipamentos" element={<ListagemEquipamentos/>}/>
        <Route path="/MeusEquipamentos" element={<MeusEquipamentos/>}/>
        <Route path="/cadastroCliente" element={<CadastroCliente/>}/>
      </Routes>
    </div>
  </Router>
)


ReactDOM.render(
  Routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
