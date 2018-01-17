import styled from 'styled-components'

const GlobalStyle = styled.div`
    font-size: 0.95em;
    background: #ECF0F1;
    a {
        text-shadow: none !important;
        background: none;
    }
    /* Timeline */
    .vertical-timeline{
        width: 100%;
        .vertical-timeline-element-subtitle {
            color: #3498DB;
        }
    }
    @media only screen and (min-width: 1170px) {
        .vertical-timeline-element {
            margin: 4px 0;
            p {
                font-size: 0.95em;
            }
        }
        .vertical-timeline-element-content .vertical-timeline-element-date {
            position: absolute;
            width: 100%;
            left: 150%;
            top: 6px;
            font-size: 16px;
            font-size: 1rem;
        }
        .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content .vertical-timeline-element-date {
            left: auto;
            right: 150%;
            text-align: right;
        }
        .vertical-timeline-element-content::before {
            border-left-color: #e3e3e3;
        }
        .vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content::before, .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content::before {
            border-right-color: #e3e3e3;
        }
    }
    .vertical-timeline::before {
        background: #e3e3e3;
    }
    .vertical-timeline-element-content {
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    }
    .vertical-timeline-element-title {
        margin-bottom: 16px;
    }
    @media only screen and (max-width: 1170px) {
        .vertical-timeline-element-content::before {
            border-right-color: #e3e3e3;
        }
    }
    /* // Timeline  */
`

export default GlobalStyle