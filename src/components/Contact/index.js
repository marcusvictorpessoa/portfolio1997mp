import { Button, Card, ContactContainer, FormContact, InfoContact, InfoDescription, InfoTitle, Input, TextArea } from "./styles";

export default function Contact() {
    return (
        <ContactContainer id="contact">
            <Card>
                <InfoContact>
                    <InfoTitle>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown.
                    </InfoTitle>
                    <InfoDescription>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's.
                    </InfoDescription>

                </InfoContact>
                <FormContact>
                    <Input placeholder="Nome" />
                    <Input placeholder="Telefone" />
                    <Input placeholder="E-mail" />
                    <TextArea placeholder="Assunto" />
                    <Button>
                        Solicitar contato
                    </Button>
                </FormContact>
            </Card>
        </ContactContainer>
    );
}