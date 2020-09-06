import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faCoins
} from '@fortawesome/free-solid-svg-icons'


export default class Header extends React.Component {
    render() {
        return (
            <div className="mb-5">
                <nav class="navbar navbar-dark bg-primary text-uppercase fixed-top ">
                    <a class="navbar-brand" href="#">
                        <FontAwesomeIcon size="2x" icon={faCoins} className=" mr-2" />Minhas despesas</a>
                         <Link className="float-right text-uppercase text-white mr-2" to={'/login'}>Sair</Link>
                </nav>
            </div>
        );
    }
}