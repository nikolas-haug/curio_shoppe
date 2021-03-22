import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

    html {
        font-size: 62.5%;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.5;
    }

    p {
        font-size: 1.8rem;

        // TODO: find optimal breakpoint
        @media (max-width: 635px) {
            font-size: 1.4rem;
        }
    }
    
    h1,
    h2,
    h3,
    h4 {
        line-height: 1.25;
    }
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.25rem;
    }
    h4 {
        font-size: 0.875rem;
    }
    p {
        margin-bottom: 1.25rem;
    }

    @media screen and (min-width: 635px) {
        h1 {
            font-size: 4rem;
        }
        h2 {
            font-size: 2.8rem; 
        }
        h3 {
            font-size: 1.75rem;
        }
        h4 {
            font-size: 1rem;
        }
        body {
            font-size: 1rem;
        }
        h1,
        h2,
        h3,
        h4 {
            line-height: 1;
        }
    }

`;

export default Typography;