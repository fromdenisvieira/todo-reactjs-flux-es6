import React from 'react';

class Header {
    render() {
        return(
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?" />
            </header>
        );
    }
}

module.exports = Header;