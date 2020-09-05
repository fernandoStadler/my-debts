import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faCoins
} from '@fortawesome/free-solid-svg-icons'


export default class Header extends React.Component {
    render() {
        return (
            <div className="mb-5">
                <nav class="navbar navbar-dark bg-primary fixed-top ">
                    <a class="navbar-brand" href="#">
                        <FontAwesomeIcon size="2x" icon={faCoins} className="mr-2" />Minhas despesas</a>
                </nav>
            </div>
        );
    }
}