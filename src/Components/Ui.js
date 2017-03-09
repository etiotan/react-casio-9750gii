import React from 'react';

export default class Ui extends React.Component {

    render() {
        /**
         * User interface
         */
        return (
            <div className="userInterface">
              <ul>
                <li>Built for Ryerson FIN300 by <a href="https://etiotan.github.io/portfolio/app/" target="_blank" title="Portfolio">Etio</a></li>
                <li>Solve for empty input box</li>
                <li>PY and CY defaults at 1</li>
                <li>Full documentation on <a href="https://github.com/etiotan/react-casio-9750gii" target="_blank" title="README.md">GitHub</a></li>
              </ul>
            </div>
        );

    }
}
