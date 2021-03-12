import styled from 'styled-components';

interface ILegendProps{
    color: string;
}

export const Container = styled.div`
    width:48%;
    height:260px;

    margin:10px 0;

    color:${ props => props.theme.colors.white };
    background-color:${ props => props.theme.colors.tertiary };

    border-radius:7px;

    display:flex;
`;

export const SideLeft = styled.aside`
    padding:30px 20px;
    overflow:hidden;
    h2{
        margin-bottom:30px;
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
`

export const Legend = styled.li<ILegendProps>`
    display:flex;
    align-items:center;

    margin-bottom:7px;
    
    div{
        width:45px;
        height:45px;

        font-size:18px;
        border-radius:5px;

        background-color:${ props => props.color };

        display:flex;
        align-items:center;
        justify-content:center;
    }

    span {
        margin-left:10px;
    }
`

export const SideRight = styled.main``;