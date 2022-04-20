import '../../css/estilo.css'
import fundoB1 from '../../img/imgLogin/imgFundo1.png';
import Logoo from '../../img/imgLogin/darede.png';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router';
import UserPool from '../../components/UserPool';

// export default class teladeLogin extends Component {


// constructor(props) {
//   super(props);
//   this.state = {
//     email: '',
//     senha: '',
//     erroMensagem: '',
//     isLoading: false,
//     redirectTo: null,
//   };
// }


// efetuaLogin = (event) => {
//   event.preventDefault();
//   console.log('logando')
//   this.setState({ erroMensagem: '', isLoading: true });

//   axios.post('http://localhost:5000/api/Login', {
//     email: this.state.email,
//     senha: this.state.senha,
//   })

//     .then((resposta) => {
//       if (resposta.status === 200) {

//         if (resposta.status === 200) {

//           localStorage.setItem('usuario-login', resposta.data.token);
//           this.setState({ isLoading: false })

//           let base64 = localStorage.getItem('usuario-login').split('.')[1];


//           console.log(base64)

//           if (parseJwt().role === '1') {

//             this.props.history.push('/listarconsulta');
//             console.log('logado: ' + usuarioAutenticado());
//           } else if (parseJwt().role === '2') {
//             this.props.history.push('/listarmedicos');
//           } else {
//             this.props.history.push('/listarminhas');
//           }
//         }

//         // localStorage.setItem('usuario-login', resposta.data.token);
//         // this.setState({ isLoading: false });
//         // this.setState({ redirectTo: "/Listagem" });
//       }
//     })

//     .catch(() => {
//       this.setState({
//         erroMensagem: 'E-mail ou senha inválidos, corrija NOVAMENTE',
//         isLoading: false,
//       });
//     });

// }

// atualizaStateCampo = (campo) => {
//   this.setState({ [campo.target.name]: campo.target.value });
// };


export default function Login() {

  const [name, setName] = useState("")
  const [senha, setSenha] = useState("")
  const [msg, setMsg] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  const efetuarLogin = (e) => {
    e.preventDefault();
    setLoading(true)

    const user = new CognitoUser({
      Username: name,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: name,
      Password: senha,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        setLoading(false)
        console.log("onSuccess: ", data);
        navigate("/MeusEquipamentos")
      },
      onFailure: (err) => {
        setLoading(false)
        setMsg(true)
        console.error("onFailure: ", err);
      },
    });

  }

  return (
    <div className='centro'>
      <div className='lado1'>
        <h1>LOGIN</h1>
        <img className='fundob1' src={fundoB1} alt="" />
      </div>
      <div >
        <div className='digitacao'>
          <div className='bloco1'></div>
          <div className='bloco2'></div>
          <div className='bloco3'>
            <div>
              <img class="logoo" src={Logoo} alt="" />
            </div>
            <div className='estilizacaoI'>

              <form onSubmit={efetuarLogin}>
                <p>EMAIL</p>
                <input type="name" id="name" value={(name)} onChange={(e) => setName(e.target.value)}></input>

                <p>SENHA</p>
                <input type="password" input value={senha} onChange={(e) => setSenha(e.target.value)} class="inputS" name="senha" />
                <button type='submit'>Login</button>
              </form>

            </div>
            {/* <div>
              {
                loading === true && <button type='submit' disabled id="botao"> Loading </button>
              }
              {
                loading === false && <button id="botao" type="submit">
                  Logar
                </button>
              }
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
};