
function Footer(){
    return(    
        <div>
            <hr/>
            &copy; {getYear()} norbertc
        </div>
    )
}

function getYear() {
    return new Date().getFullYear();
}
export default Footer;