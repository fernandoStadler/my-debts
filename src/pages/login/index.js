import React from 'react';
import '../style.css';
import './style.css';
import { render } from '@testing-library/react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faCoins
} from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/header'

import Footer from '../../components/footer'
import { Link } from 'react-router-dom';


export default class Login extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="container pt-5 pb-5 mt-5">
                    <div className="center-aling">
                        <div className="container login-card ">
                            <form>
                                <div className="row ">
                                    <div className=" text-center col-12  text-primary p-4">
                                        <h5><FontAwesomeIcon size="2x" icon={faCoins} />SEJA BEM VINDO!</h5>
                                    </div>
                                    <div className=" text-center col-12">
                                        <p>Faça login para continuar ou crie uma conta!</p>
                                    </div>
                                    <div className="center-aling col-12 mt-3">
                                        <input className="form-control" type="email" name="email" placeholder="Login" />
                                    </div>
                                    <div className="center-aling col-12 mt-3">
                                        <input className="form-control" type="password" name="password" placeholder="Senha" />
                                    </div>
                                    <div className="col-12 col-md-12 text-center mt-2">
                                        <a type="submit" class="text-primary" data-toggle="modal" data-target="#forgetPassword">Esqueci a minha senha</a>
                                    </div>
                                    <div className="col-12 col-md-6 mt-5 pb-3">
                                        <button type="button" class=" btn btn-link btn-block" data-toggle="modal" data-target="#acountCreate">Criar nova conta</button>
                                    </div>
                                    <div className="col-12 col-md-6 mt-5 pb-3">
                                        <Link type="submit" class="btn btn-primary btn-block" to={'/'}>Logar</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Modal criar conta */}
                <div className="modal fade" id="acountCreate" tabindex="-1" aria-labelledby="addacountCreate" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header text-light bg-primary">
                                <h5 className="modal-title text-uppercase text-center " id="exampleModalLabel">Criar conta</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12 col-md-12 mt-2" >
                                        <input className="form-control" type="text" name="nickname" placeholder="Como você gostaria de ser chamado(a)?"/>
                                    </div>
                                    <div className="col-12 col-md-12 mt-2" >
                                        <input className="form-control" type="email" name="email" placeholder="E-mail"/>
                                    </div>
                                    <div className="col-12 col-md-12 mt-2" >
                                        <input className="form-control" type="email" name="email" placeholder="Confirme o email"/>
                                    </div>
                                    <div className="col-12 col-md-12 mt-2">
                                        <input className="form-control" type="password" name="password" placeholder="Digite uma senha" />
                                    </div>
                                    <div className="col-12 col-md-12 mt-2">
                                        <input className="form-control" type="password" name="passwordConfirm" placeholder="Cofirme a senha" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" >Criar conta</button>
                                <button type="button" className="btn btn-dark" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal criar conta */}
                {/* Modal esqueci a senha */}
                <div className="modal fade" id="forgetPassword" tabindex="-1" aria-labelledby="forgetPassword" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header text-light bg-primary">
                                <h5 className="modal-title text-uppercase text-center " id="exampleModalLabel">Redefinir senha</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12 col-md-12 mt-2" >
                                        <input className="form-control" type="email" name="forgetEmail" placeholder="Informe o email para redefinição de senha"/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" >Redefinir</button>
                                <button type="button" className="btn btn-dark" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal criar conta */}
            </div>
        );
    }
}