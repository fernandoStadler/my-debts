import React from 'react';
import '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faListAlt,
    faMoneyBillWave,
    faEdit,
    faTrashAlt,
    faPlusCircle,
    faCalendarDay
} from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/header'

import Footer from '../../components/footer'
import { Link } from 'react-router-dom';



export default class Taks extends React.Component {

    render() {
        return (
            <div className="container ">
                <div className="container  pt-5 mt-5">
                        
                    <div className=" d-none d-lg-block ">
                        <Header />
                        <button className="btn bg-clean-blue float-right mb-2"><FontAwesomeIcon size="2x" icon={faPlusCircle} /></button>
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
                        <ul class="list-group mr-5 ml-5">
                            <button className="btn bg-clean-blue float-right mb-2"><FontAwesomeIcon size="2x" icon={faPlusCircle} /></button>
                            <li class="list-group-item active">Nome: Nome da dívida</li>
                            <li class="list-group-item">Valor: R$ 250,00</li>
                            <li class="list-group-item">Data de vencimento: 09/10/2020</li>
                            <li class="list-group-item">Situação: Paga</li>
                            <li class="list-group-item">

                                <button className="btn btn-success col-12  mt-2"><FontAwesomeIcon icon={faMoneyBillWave} /></button>
                                <button className="btn bg-orange text-light col-12 mt-2"><FontAwesomeIcon icon={faMoneyBillWave} /></button>
                                <button className="btn btn-warning text-light col-12 mt-2 "><FontAwesomeIcon icon={faEdit} /></button>
                                <button className="btn btn-danger col-12 mt-2"><FontAwesomeIcon icon={faTrashAlt} /></button>
                            </li>
                        </ul>
                    </div>
                    <div class="alert alert-primary  mt-5" role="alert">
                        <h5 className="text-center">TOTAL</h5>
                    </div>
                    <div className="total pb-5">
                        <p className="mt-3">Total em aberto: </p>
                        <hr></hr>
                        <p className="mt-3">Total pago: </p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}