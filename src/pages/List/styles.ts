import styled from 'styled-components';

export const Filters = styled.div`
    width:100%;

    margin-bottom:30px;

    display:flex;
    align-items:center;
    justify-content:center;

    .tag-filter{
        color:${ props => props.theme.colors.white };
        background:transparent;

        margin:0 10px;
        
        font-size:18px;
        font-weight:500;

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

        transition:opacity .3s;
        opacity:.4;

        &:hover{
            opacity:.7;
        }       
    }

    .tag-filter-recurrent::after{
        content:'';
            
        width:55px;
        display:block;
        border-bottom: 10px solid ${ props => props.theme.colors.success };
    }

    .tag-filter-eventual::after{
        content:'';
            
        width:55px;
        display:block;
        border-bottom: 10px solid ${ props => props.theme.colors.warning };
    }

    .tag-actived{
        opacity:1;
    }
`;