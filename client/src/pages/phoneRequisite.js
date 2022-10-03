const PhoneRequisite = (props) =>{

    return(
        <div>
            <p className={props.phoneNumberFlag}>Must start with '07' or '01' and 10 digits</p>
        </div>
    )
}

export default PhoneRequisite;