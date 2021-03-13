import styled from 'styled-components';

interface ILegendProps{
    color: string;
}

export const Container = styled.div`
    width:100%;

    color:${ props => props.theme.colors.white };
    background-color:${ props => props.theme.colors.tertiary };

    border-radius:7px;

    margin:10px 0;
    padding:30px 20px;

    display:flex;
    flex-direction:column;

`;

export const Header = styled.div`
    width:100%;

    display:flex;
    align-items:center;
    justify-content:space-between;
    
    > h2{
        margin-bottom:20px;
        padding-left:20px;
    }
`;

export const LegendContainer = styled.ul`
    display:flex;
    
    list-style:none;
`;

export const Legend = styled.li<ILegendProps>`
    display:flex;
    align-items:center;

    padding-right:20px;

    margin-bottom:10px;
    margin-left:10px;

    > div{
        width:40px;
        height:40px;

        font-size:14px;
        border-radius:5px;

        background-color:${ props => props.color };
        
        display:flex;
        align-items:center;
        justify-content:center;
    }

    > span{
        margin-left:7px;
    }
`

export const ChartContainer = styled.div`
    flex:1;
    height:260px;
`;
