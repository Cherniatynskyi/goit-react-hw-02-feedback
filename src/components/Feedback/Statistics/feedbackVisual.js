export function feedbackVisualisation(value) {
    let numbValue = parseInt(value)
    let color = ''
    if (!numbValue) {
        color = "black"
    }
    else if (numbValue < 34) {
        color = 'red'
    }
    else if (numbValue > 33 && numbValue < 67){
        color='orange'
    }
    else {
        color = 'green'
    }
    return color

}