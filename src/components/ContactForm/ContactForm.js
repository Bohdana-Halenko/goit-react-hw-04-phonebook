import { useState } from 'react';
import propTypes from 'prop-types';
import s from './ContactForm.module.css';

function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const changeInputName = event => {
        setName(event.currentTarget.value);
    };
  
    const changeInputNumber = event => {
        setNumber(event.currentTarget.value);
    };

    const hendleSubmit = event => {
        event.preventDefault();
        const data = { name, number };
        onSubmit(data);
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={hendleSubmit} className={s.formWrap}>
            <div className={s.inputWrap}>
                <label className={s.label}>Name</label>
                <input
                    className={s.input}
                    value={name}
                    onChange={changeInputName}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />  
            </div>
            <div className={s.inputWrap}>
                <label className={s.label}>Number</label>
                <input
                    className={s.input}
                    value={number}
                    onChange={changeInputNumber}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </div>   
            <button className={s.button} type='submit'>
                Add contact
            </button>
        </form>
    );
}

ContactForm.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.number.isRequired,
};

export default ContactForm;