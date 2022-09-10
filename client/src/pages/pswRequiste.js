const PWDRequisite = ({
    capsLetterFlag,
    lowerLetterFlag,
    numberFlag,
    pwdLengthFlag,
    specialCharFlag
    }) =>{

    return(
        <div>
            <p className={capsLetterFlag}>Must contain atleast 1 capital letter</p>
            <p className={lowerLetterFlag}>Must contain atleast 1 lower case letter</p>
            <p className={numberFlag}>Must contain a number</p>
            <p className={pwdLengthFlag}>Must be 8 characters long</p>
            <p className={specialCharFlag}>Must contain a special character(!@#$*&%.)</p>
        </div>
    )
}

export default PWDRequisite;