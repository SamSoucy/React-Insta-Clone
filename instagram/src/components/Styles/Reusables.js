import styled from 'styled-components';



//............Search Bar Styles.................
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;;
    border-bottom: 1px solid black;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 50px;
`;

const Ser = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    i{
        width: 25%;
        margin-right:25px;
        margin-left:25px;
        text-align: center;
        align-self: center;
        font-size: 2.5rem; 
    }

    img{
        height: 40px;
    max-width: 75%;
    margin-left: 25px;
    }
`;

const SerInput = styled.input`
font-size: 1rem;
text-align: center;
margin: 0 auto;
`;

const SubLogo = styled.div`
justify-content: flex-end;
    font-size:25%;

    i{
        margin: 0 20px;
        font-size: 2rem; 
    }
`;

export {Header, Ser, SerInput, SubLogo}