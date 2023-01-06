import React from 'react';
import Modal from 'react-modal';
import { useModalContext } from '../../contexts/modal.context';
import { GrClose } from 'react-icons/gr';

import { Button, ContentModal, Input, TitleModal,  } from './styles';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '60vw',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'Column',
        padding: '1.5em',

    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, .5)'
    }
};

Modal.setAppElement(document.getElementById('root'));

export function FormModal() {
    /// let subtitle;
    const { modalState, closeModal } = useModalContext();

    //function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.backgroundColor = '#1976d2';
    // }

    return (
        <Modal
            isOpen={modalState}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <GrClose style={{ alignSelf: 'flex-end', cursor: 'pointer' }} size={30} onClick={closeModal} />
            <TitleModal>Preencha os dados para solicitar o orçamento</TitleModal>
            <ContentModal>
                    <Input placeholder='Nome completo' />
                    <Input placeholder='E-mail' />
                    <Input placeholder='telefone' />
                    <Input placeholder='CEP' />
                    <Input placeholder='Estado' />
                    <Input placeholder='Cidade' />
                    <Input placeholder='Setor de instalação' />
                    <Input placeholder='Tipo de instalação' />
                    <Input placeholder='Tipo de telhado' />
                    <Input placeholder='Geração média em KWh desejada' />
                    <Button>Solicitar orçamento</Button>
            </ContentModal>
        </Modal>

    );
}