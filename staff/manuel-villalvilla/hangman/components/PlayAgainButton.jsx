function PlayAgainButton({...props }) {
    // le meto los propos del tiron al button porque sus nombres coinciden con los nombres de los atributos de button, aunque
    // aqui solo entra un onClick
    return (
        <button type="button" {...props}>PLAY AGAIN</button>
    )
}