function ChildBox(){

    function changeShape(){
        document.getElementById('childBox').style.borderRadius = "50%"
    }
    return(
        <div className="Child-Boxes" id='childBox'>
            <div className="boxes">
                <button className="childBox-Btn" onClick={changeShape}>change shape</button>

            </div>
        </div>
    );
}
export default ChildBox;