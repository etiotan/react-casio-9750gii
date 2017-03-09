import React from 'react';

export default class Ui extends React.Component {

    render() {
/**
 * User interface
 */


        return (
            <div className="userInterface">
              <ul>
                <li>Built for Ryerson FIN300</li>
                <li>Leave input box empty on the one you would like to solve for</li>
                <li><span>Restrictions: </span>Periods & interest on bond valuations</li>
                <li>Full documentation on GitHub</li>
              </ul>
              {/* github link */}
              <div className="contact">
              <a href="https://github.com/etiotan" target="_blank" title="Documentation">
                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
              <a href="https://etiotan.github.io/portfolio/app/" target="_blank" title="Contact Me">
                <i className="fa fa-user-o fa-2x" aria-hidden="true"></i>
              </a>
            </div>
            </div>
        );

    }
}
