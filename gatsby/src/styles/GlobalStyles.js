import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
        --container-size: 1040px;

        --color-black: #2D3B3F;
        --color-white: #fff;
        --color-grey-1: #ACBBC1;
        --color-grey-2: #334A52;

        --color-blue-1: #e3f3f9;
        --color-blue-2: #C3D3E2;
        --color-blue-3: #7DB3C6;

        --color-green-1: #C0DBC0;
        --color-green-2: #7FD1AE;

        --color-brown-1: #CEB3A0;

        --color-purple-1: #E3C8EA;

    }

    html {
        box-sizing: border-box;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        background-color: var(--color-white);
        color: var(--color-black);
    }

    h1, h2, h3, h4 {
        color: var(--color-black);
    }

    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
        /* color: blue; */
    }

    label {
        font-size: 1.2rem;
        font-weight: 300;
        max-width: 100%;
        display: block;
        margin: 1rem 0 0.5rem;
    }

    [type=color], [type=date], [type=datetime], [type=datetime-local], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=url], [type=week], [type=time], select, textarea {
        display: block;
        border: 1px solid var(--color-black);
        border-radius: 3px;
        padding: 1rem;
        background: #fafafa;
        color: #002000;
        margin: 0 0 1.5rem 0;;
        font-size: 1.8rem;
        width: 100%;
        max-width: 100%;
        line-height: 1;

        @media (max-width: 635px) {
            font-size: 1.6rem;
        }

        &:focus,
        &:active {
            border: 1px solid var(--color-green-3);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px var(--color-green-1);
        }
    }

    button {
        display: block;
        border-radius: 3px;
        border-style: none;
        background: var(--color-blue-3);
        color: var(--color-white);
        font-size: 1.8rem;
        text-transform: none;
        padding: 1rem 1.5rem;
        margin: 0 0 1.5rem 0;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        line-height: 1;
        transition: all 0.3s;

        @media (max-width: 635px) {
            font-size: 1.6rem;
        }

        &:hover {
            background-color: var(--color-blue-2);
        }
    }

    .visually-hidden {
        border: 0;
        clip: rect(0 0 0 0);
        -webkit-clip-path: inset(100%);
        clip-path: inset(100%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }

    ::selection {
        background-color: var(--color-green-3);
        color: var(--color-white);
    }

`;

export default GlobalStyles;