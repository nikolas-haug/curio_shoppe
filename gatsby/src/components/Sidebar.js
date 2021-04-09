import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const SidebarStyles = styled.aside`

    @media (min-width: 1025px) {
        width: 25%;
        &.sticky {
            position: fixed;
            top: 0;
            width: auto;
        }
    }
    padding: 1.5rem 1.5rem;

    .sidebar__heading {
        margin-bottom: 2rem;
        text-transform: uppercase;
    }

    ul {
        background-color: var(--color-blue-1);
        padding: 2rem;
        @media (min-width: 1025px) {
            //TODO: adjust fixed margin accordingly
            width: ${ props => props.sticky ? '222.5px' : 'auto' };
        }
        border-radius: 5px;
    }

    li:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    a {
        display: block;
        font-size: 1.6rem;
        color: var(--color-black);
        border-radius: 5px;
        padding: .5rem;
        transition: all .18s ease;
        &:hover {
            background-color: var(--color-grey-1);
            color: var(--color-white);
        }
    }

`;

export default function Sidebar({ sticky, element }) {
    const data = useStaticQuery(graphql`
        query CategoriesQuery {
            categories: allSanityCategory {
                nodes {
                    name
                    id
                }
            }
        }
    `);
    const categories = data.categories.nodes;

    return (
        <>
            <SidebarStyles ref={element} className={sticky ? 'sticky' : ''} sticky={sticky}>
                <h3 className="sidebar__heading">peruse by category</h3>
                <ul>
                    <li>
                        <Link to={'/'}>All Items</Link>
                    </li>
                    {categories.map((category) => (
                        <li key={category.id}>
                            <Link to={`/category/${category.name.toLowerCase()}`}>{category.name}</Link>
                        </li>
                    ))}
                </ul>
            </SidebarStyles>
        </>
    )
}