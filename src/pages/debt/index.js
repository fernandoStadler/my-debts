import React from 'react';
import '../style.css';
import InputMask from 'react-input-mask';
import NumberFormat from 'react-number-format';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faListAlt,
    faMoneyBillWave,
    faEdit,
    faTrashAlt,
    faPlusCircle,
    faCalendarDay
} from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/header';
import Footer from '../../components/footer';



export default class Taks extends React.Component {



    render() {


        return (

            <div className="container ">
                <div className="container  pt-5 mt-5">
                    <Header />
                    <div className=" d-none d-lg-block ">
                        <button className="btn bg-clean-blue float-right mb-2" data-toggle="modal" data-target="#addModal"><FontAwesomeIcon size="2x" icon={faPlusCircle} /></button>
                        <table className="table table-bordered table-striped text-center">
                            <thead className="bg-primary text-light">
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Data de vencimento</th>
                                    <th scope="col">Situação</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Nome</th>
                                    <th scope="row">Valor</th>
                                    <th scope="row">Data de vencimento</th>
                                    <th scope="row">Situação</th>
                                    <th scope="row">
                                        <button className="btn btn-success mr-2"><FontAwesomeIcon size="2x" icon={faMoneyBillWave} /></button>
                                        <button className="btn bg-orange text-light mr-2"><FontAwesomeIcon size="2x" icon={faMoneyBillWave} /></button>
                                        <button className="btn btn-warning text-light mr-2 "><FontAwesomeIcon size="2x" icon={faEdit} /></button>
                                        <button className="btn btn-danger mr-2"><FontAwesomeIcon size="2x" icon={faTrashAlt} /></button>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row">Nome</th>
                                    <th scope="row">Valor</th>
                                    <th scope="row">Data de vencimento</th>
                                    <th scope="row">Situação</th>
                                    <th scope="row">Paga | Em aberto | Editar | Deletar</th>
                                </tr>
                                <tr>
                                    <th scope="row">Nome</th>
                                    <th scope="row">Valor</th>
                                    <th scope="row">Data de vencimento</th>
                                    <th scope="row">Situação</th>
                                    <th scope="row">Paga | Em aberto | Editar | Deletar</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="d-md-block d-sm-block d-lg-none">
                        <ul className="list-group mr-5 ml-5">
                            <button className="btn bg-clean-blue float-right mb-2"><FontAwesomeIcon size="2x" icon={faPlusCircle} /></button>
                            <li className="list-group-item active">Nome: Nome da dívida</li>
                            <li className="list-group-item">Valor: R$ 250,00</li>
                            <li className="list-group-item">Data de vencimento: 09/10/2020</li>
                            <li className="list-group-item">Situação: Paga</li>
                            <li className="list-group-item">
                                <button className="btn btn-success col-12  mt-2"><FontAwesomeIcon icon={faMoneyBillWave} /></button>
                                <button className="btn bg-orange text-light col-12 mt-2"><FontAwesomeIcon icon={faMoneyBillWave} /></button>
                                <button className="btn btn-warning text-light col-12 mt-2 "><FontAwesomeIcon icon={faEdit} /></button>
                                <button className="btn btn-danger col-12 mt-2"><FontAwesomeIcon icon={faTrashAlt} /></button>
                            </li>
                        </ul>
                    </div>
                    <div className="alert alert-primary  mt-5" role="alert">
                        <h5 className="text-center">TOTAL</h5>
                    </div>
                    <div className="total pb-5">
                        <h5 className="mt-3">Total em aberto: </h5>
                        <hr></hr>
                        <h5 className="mt-3">Total pago: </h5>
                    </div>
                </div>
                {/* Modal Adicionar */}
                <div className="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header text-light bg-primary">
                                <h5 className="modal-title text-uppercase text-center " id="exampleModalLabel">Adicionar despesa</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12 col-md-12">
                                        <span>Nome</span>
                                        <input className="form-control" type="text" name="name" />
                                    </div>
                                    <div className="col-12 col-md-6 mt-2">
                                        <span>Valor</span>
                                        <NumberFormat className="form-control" type="text" name="value"  thousandSeparator={true} prefix={'R$'} />
                                    </div>
                                    <div className="col-12 col-md-6 mt-2">
                                        <span>Data de vencimento</span>
                                        <input className="form-control" type="date" name="date" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" >Adicionar</button>
                                <button type="button" className="btn btn-dark" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
