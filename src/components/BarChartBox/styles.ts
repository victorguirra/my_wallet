import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width:48%;
    min-height:260px;

    margin:10px 0;
    border-radius:7px;

    color:${ props => props.theme.colors.white };
    background-color:${ props => props.theme.colors.tertiary };

    display:flex;
    align-items:center;
`;

export const LeftSide = styled.aside`
    padding:30px 20px;

    > h2 {
        padding-left:20px;
        margin-bottom:10px;
    }
`;

export const LegendContainer  = styled.ul`
    flex:1;
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
    padding-left:20px;
    
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
`
export const RightSide = styled.main`
    flex:1;
    height:150px;

    display:flex;
    justify-content:center;
    padding-top:35px;
`;