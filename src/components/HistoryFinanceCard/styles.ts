import styled, { keyframes } from 'styled-components';

interface ITagProps{
    color: string;
}

const animate = keyframes`
    0%{
        transform:translateX(-120px);
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

export const Container = styled.li`
    background-color:${ props => props.theme.colors.tertiary };

    list-style:none;
    border-radius:10px;

    margin:20px 0;
    padding:12px 20px;

    cursor:pointer;
    position:relative;

    display:flex;
    align-items:center;
    justify-content:space-between;

    transition:all .3s;
    animation:${ animate } .5s ease;

    &:hover{
        opacity:.7;
        transform: translateX(10px);
    }

    > div{
        display:flex;
        flex-direction:column;
        justify-content:space-between;

        padding-left:10px;
    }
 
    > div span{
        font-size:20px;
        font-weight:500;
    }
`;

export const Tag = styled.div<ITagProps>`
    width:5px;
    height:100%;

    background-color:${ props => props.color};

    border-top-left-radius:10px;
    border-bottom-left-radius:10px;

    position:absolute;
    left:0;
`;