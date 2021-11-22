function update(_v) // fuction for update input tag
{
    document.querySelector('input').value = _v
}
function append(_v) // add a number to the back when button is clicked
{
    document.querySelector('input').value += _v
}
function calc() {   // calculate when '=' button is clicked
    const v = document.querySelector('input').value
    try {
        const f = new Function('return ' + v)
        update(f().toString())
    } catch (error) {
        update(error)
    }
}