import React from 'react';

function Form() {

    return(

        <form>
            <input className="input-group" type="text" name="name" placeholder="Your name" />
            <input type="text" name="phone" placeholder="Your Phone" />
            <input type="email" name="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <input type="submit" onClick={(e) => e.preventDefault()} value="Send request" />
        </form>
    );

}

export default Form;