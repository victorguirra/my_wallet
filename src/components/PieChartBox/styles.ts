import styled, { keyframes } from 'styled-components';

interface ILegendProps{
    color: string;
}

const animate = keyframes`
    0%{
        transform:translateX(100px);
        opacity:0;
    }
    50%{
        opacity:.3;
    }
    100%{
        transform:translateX(0px);
        opacity:1;
    }
`;

export const Container = styled.div`
    width:48%;
    height:260px;

    margin:10px 0;

    color:${ props => props.theme.colors.white };
    background-color:${ props => props.theme.colors.secondary };

    border-radius:7px;

    display:flex;

    animation:${ animate } .5s;

    @media(max-width:770px){
        width:100%;
        display:flex;
    }
`;

export const SideLeft = styled.aside`
    padding:30px 20px;
    overflow:hidden;
    p{
        margin-bottom:30px;
        font-size:22px;
    }

    @media(max-width:1345px){
        padding:0 15px 5px;
        margin-bottom:7px;

        p{
            margin-top:15px;
            margin-bottom:7px;
        }
    }

    @media(max-width:420px){
        padding:15px;
        margin-bottom:7px;
    }
`;

export const LegendContainer  = styled.ul`
    height:150px;

    list-style:none;
    padding-right:30px;
    
    overflow-y:scroll;

    ::-webkit-scrollbar{
        width:10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color:${ props => props.theme.colors.secondary };
        border-radius:10px;
    }

    ::-webkit-scrollbar-track{
        background-color:${ props => props.theme.colors.tertiary };
    }

    @media(max-width:1345px){
        display:flex;
        flex-direction:column;
    }
`

export const Legend = styled.li<ILegendProps>`
    display:flex;
    align-items:center;

    margin-bottom:7px;
    
    div{
        width:45px;
        height:45px;

        padding:15px;

        font-size:14px;
        border-radius:5px;

        background-color:${ props => props.color };

        display:flex;
        align-items:center;
        justify-content:center;
    }

    span {
        margin-left:10px;
    }

    @media(max-width:1345px){
        font-size:14px;
        margin:3px 0;

        > div{
            width:35px;
            height:35px;
            line-height:35px;
        }

        > span{
            margin-left:7px;
        }
    }
`

export const SideRight = styled.main`
    display:flex;
    flex:1;
    justify-content:center;

    @media(max-width:1345px){
        height:100%;
    }
`;