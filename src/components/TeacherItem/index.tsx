import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {

    return (
        <article className="teacher-item">
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr81BvRBGEtXBLXxmBop43GKMSclgPu74Haw&usqp=CAU" alt=""/>
                <div>
                    <strong>Diego F. Galisteu</strong>
                    <span>Química</span>  <br/><br/>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada. <br/><br/>
                Apaixonado por explodir coisas em laboratórios e por mudar vida das pessoas através de experiências.
                Mais de 2000 pessoas passaram por uma das minhas explosões.
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>Entrar em contato
                </button>
            </footer>
        </article>
    );
    
}

export default TeacherItem;